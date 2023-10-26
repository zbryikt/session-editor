<-(->it.apply {}) _
(sessions) <~ ld$.fetch "assets/data/sample.json", {method: \GET}, {type: \json} .then _

@entries = []
@ticks = []
@tracks = [1 to 3].map -> {id: "#it", dur: 8 * 60, start: 8 * 60 - it * 10}
@refptr = {}
@sessions = sessions
  .map (data) ~>
    id: Math.random!toString(36).substring(2)
    data: data
    dur: data.duration
    track: @tracks.0.id
    p: @tracks.0.start

snap = ({y, grain, screen}) ->
  grain = grain or 10
  y = time2y({screen, p: grain * Math.round(y2time({screen, y}) / grain)})
  return y

@autopos = ->
  for i from 0 til @entries.length =>
    e1 = @entries[i]
    for j from i + 1 til @entries.length =>
      e2 = @entries[j]
      move = (e1.p >= e2.p and e1.p <= e2.p + e2.dur) or (e2.p >= e1.p and e2.p <= e1.p + e1.dur)
      track = @tracks.filter(-> it.id == e1.track).0
      if e1.p < track.start or e1.p + e1.dur > track.start + track.dur => move = true
      if move => break
    if move => # TODO: find a valid position to place it

@restat = ->
  @timespan =
    min: Math.min.apply Math, @tracks.map(-> it.start)
    max: Math.max.apply Math, @tracks.map(-> it.start + it.dur)
  @timespan.min = Math.floor(@timespan.min / 10) * 10
  @timespan.max = Math.ceil(@timespan.max / 10) * 10
  @times = [0 to @timespan.max - @timespan.min by 10].map ~> {p: it + @timespan.min}

@restat!

y2local = ({y}) ->
  box = ld$.find(view.get(\canvas), "[ld=tracks]", 0).getBoundingClientRect!
  return y - box.y

y2global = ({y}) ->
  box = ld$.find(view.get(\canvas), "[ld=tracks]", 0).getBoundingClientRect!
  return y + box.y

y2time = ({y, screen}) ~>
  box = ld$.find(view.get(\canvas), "[ld=tracks]", 0).getBoundingClientRect!
  dy = if screen => box.y else 0
  Math.round(((@timespan.max - @timespan.min) * (y - dy) / box.height) + @timespan.min)

fmttime = ({p}) ->
  p = Math.round(p)
  mn = p % 60 
  hr = Math.floor(p / 60)
  "#hr".padStart(2, \0) + ":" + "#mn".padStart(2, \0)

time2y = ({p, screen}) ~>
  box = ld$.find(view.get(\canvas), "[ld=tracks]", 0).getBoundingClientRect!
  ret = box.height * ((p or 0) - @timespan.min) / (@timespan.max - @timespan.min)
  if screen => ret += box.y
  return ret

dur2h = ({dur}) ~> time2y({p: @timespan.min + dur}) - time2y({p: @timespan.min})

d2h = ({dur, start}) -> time2y({p: dur + start}) - time2y({p: start})

view = new ldview do
  root: document.body
  action:
    click: "break-add": ({node, ctx, views}) ~>
      track = @tracks.0
      obj =
        id: Math.random!
        track: track.id
        p: track.start
        dur: (view.get(\break-min).value or 30)
        data: {title: {zh: "休息時間", en: "Break Time"}}
      obj.p >?= @timespan.min <?= @timespan.max
      obj.y = time2y {p: obj.p}
      @entries.push obj
      views.0.render!
  handler:
    session:
      list: ~> @sessions
      key: -> it.id
      view:
        handler: "@": ({node, ctx}) ~> node.classList.toggle \used, !!ctx.used
        text:
          "title": ({node, ctx}) ~> ctx.data.title.zh
          "speaker": ({node, ctx}) ~> ctx.data.speaker.map(->it.name).join(' / ')
        action: click: "@": ({node, ctx, views}) ~>
          ctx.used = !ctx.used
          ctx.p >?= @timespan.min <?= @timespan.max
          ctx.y = time2y {p: ctx.p}
          if ctx.used and !(ctx in @entries) => @entries.push ctx
          else if !ctx.used and (ctx in @entries) => @entries.splice(@entries.indexOf(ctx), 1)
          views.1.render!
    canvas:
      action:
        mousemove: "@": ({evt, views}) ~>
          @refptr <<< x: evt.clientX, y: evt.clientY, unsnap: !!evt.shiftKey
          views.0.render \tick, \refline
        mouseup: "@": ({evt, views}) ~>
          unsnap = !!evt.shiftKey
          grain = if unsnap => 1 else undefined
          track = @tracks.filter((t) ~>
            box = t.{}box
            box.x <= @refptr.x and box.x + box.width >= @refptr.x
          ).0 or {box: {}}
          @ticks
            .filter -> it.moving
            .map (t) ~>
              y = snap({y: evt.clientY, screen: true, grain})
              p = y2time {y, screen: true}
              t <<< {y, p}
              t.moving = false
          @entries
            .filter -> it.moving
            .map (s) ~>
              rbox = views.0.get(\tracks).getBoundingClientRect!
              y = y2local y: (snap({y: (evt.clientY - @refptr.delta), screen: true, grain}))
              p = y2time {y}

              if !unsnap =>
                ticks = @ticks.map (t) -> {t, d: Math.min.apply Math, [p - t.p, p + s.dur - t.p].map(-> Math.abs(it))}
                ticks.sort (a,b) -> a.d - b.d
                if (tick = ticks.0) and tick.d <= 10 =>
                  tick = tick.t
                  if Math.abs(p - tick.p) < Math.abs(p + s.dur - tick.p) => p = tick.p
                  else p = tick.p - s.dur
                ss = @entries
                  .filter -> it != s
                  .map (e) ->
                    e: e
                    d: Math.min.apply Math, [
                      p + s.dur - e.p, p - (e.p + e.dur)
                    ].map(-> Math.abs(it))
                ss.sort (a,b) -> a.d - b.d
                if (session = ss.0) and session.d <= 10 =>
                  e = session.e
                  if Math.abs(p - (e.p + e.dur)) < Math.abs(p + s.dur - e.p) => p = e.p + e.dur
                  else p = e.p - s.dur

              p >?= track.start
              p <?= ((track.start + track.dur) - s.dur)
              y = time2y {p}
              s <<< {y, p}
              s.moving = false
              if track.id => s.track = track.id

          views.0.render \entry, \tick, \refline

        click: "times": ({node, evt, views}) ~> 
          box = node.getBoundingClientRect!
          y = snap y: evt.clientY, screen: true
          p = y2time({y, screen: true})
          id = Math.random!
          @ticks.push {y, p, id}
          views.0.render!

      handler:
        time:
          list: ~> @times
          key: -> it.p
          view:
            handler: "@": ({node, ctx}) ~>
              node.style.top = "#{time2y ctx}px"
              node.classList.toggle \half, !(ctx.p % 30)
              node.classList.toggle \full, !(ctx.p % 60)
              if !(ctx.p % 60) => node.innerText = ctx.p / 60
        refline: ({node, views}) ~>
          {x,y, unsnap} = @refptr
          grain = if unsnap => 1 else undefined
          if @ticks.filter(->it.moving).length =>
            y = snap({y: (@refptr.y or 0), screen: true, grain})
            node.innerText = fmttime p: y2time({y, screen: true})
            node.style <<<
              display: \block
              left: "0px"
              top: "#{y2local {y}}px"
              width: "100%"
              height: 0
            return

          track = @tracks.filter((t) ->
            box = t.{}box
            box.x <= x and box.x + box.width >= x
          ).0
          move-session = @entries.filter(->it.moving).0
          do-move = !!move-session
          if !track or !do-move => return node.style <<< display: \none
          tbox = views.0.get \tracks .getBoundingClientRect!
          cbox = views.0.get \@ .getBoundingClientRect!

          box = track.box or {}
          height = (
            time2y({p: move-session.p + move-session.dur}) -
            time2y({p: move-session.p})
          )
          y = snap({y: (@refptr.y or 0) - @refptr.delta, screen: true, grain})
          node.innerText = fmttime p: y2time({y, screen: true})
          node.style <<<
            display: \block
            left: "#{(track.box.x or 0) - cbox.x}px"
            top: "#{y - tbox.y}px"
            width: "#{track.box.width or 0}px"
            height: "#{height}px"

        tick:
          list: ~> @ticks
          key: -> it.id
          view:
            action:
              mousedown: "@": ({ctx}) -> ctx.moving = true
            text: "tick-inner": ({node, ctx}) ~> fmttime(ctx)
            handler: "@": ({node, ctx}) -> node.style.top = "#{y2local y: ctx.y}px"

        track:
          list: ~> @tracks
          key: -> it.id
          view:
            handler: "@": ({node, ctx}) ~>
              height = dur2h {dur: ctx.dur}
              y = time2y {p: ctx.start}
              node.style <<<
                transform: "translate(0,#{y}px)"
                height: "#{height}px"
              nbox = node.getBoundingClientRect!
              ctx.box =
                x: nbox.x
                y: nbox.y
                width: nbox.width
                height: nbox.height

        entry:
          list: ~> @entries
          key: -> it.id
          view:
            action:
              mousedown: "@": ({ctx, evt}) ~>
                if evt.target.classList.contains \i-close => return
                @refptr.delta = evt.clientY - time2y(p: ctx.p, screen: true)
                ctx.moving = true
              click: "@": ({ctx, node, evt, views}) ~>
                if evt.target.classList.contains \i-close =>
                  ctx.used = false
                  if ctx in @entries => @entries.splice(@entries.indexOf(ctx), 1)
                views.2.render!

            text:
              "title": ({node, ctx}) ~> ctx.data.title.zh
              "time": ({node, ctx}) ~> fmttime ctx
              "speaker": ({node, ctx}) ~> ctx.data.speaker.map(->it.name).join(' / ')
            handler: "@": ({node, ctx, views}) ~>
              if !(track = @tracks.filter(-> it.id == ctx.track).0) => return
              tbox = views.1.get \tracks .getBoundingClientRect!
              cbox = views.1.get \@ .getBoundingClientRect!

              box = track.box or {}
              height = box.height * (ctx.dur or 1) / track.dur 
              node.style <<<
                top: "#{ctx.y + tbox.y - cbox.y}px"
                left: "#{box.x - cbox.x}px"
                width: "#{box.width}px"
                height: "#{height}px"


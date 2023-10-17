<-(->it.apply {}) _
(sessions) <~ ld$.fetch "assets/data/sample.json", {method: \GET}, {type: \json} .then _

@sessions = sessions
  .map (data) ->
    id: Math.random!toString(36).substring(2)
    data: data
    dur: data.duration
    track: "1"
    y: 30

@ticks = []
@tracks = [1 to 3].map -> {id: "#it", dur: 8 * 60}
@refptr = {}

d2h = ({track, dur}) -> track.box.height * (dur or 0) / track.dur
view = new ldview do
  root: document.body
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
          views.1.render!
    canvas:
      action:
        mousemove: "@": ({evt, views}) ~>
          box = views.0.get(\@).getBoundingClientRect!
          @refptr = {x: evt.clientX - box.x, y: evt.clientY - box.y}
          views.0.render \tick, \refline
        mouseup: "@": ({evt, views}) ~>
          box = views.0.get \@ .getBoundingClientRect!
          x = @refptr.x
          track = @tracks.filter((t) ->
            box = t.box or {}
            box.x <= x and box.x + box.width >= x
          ).0 or {}
          track.{}box
          @ticks
            .filter -> it.moving
            .map ->
              it.y = evt.clientY - box.y
              it.moving = false
          @sessions
            .filter -> it.moving
            .map (s) ~>
              rbox = views.0.get(\sessions).getBoundingClientRect!
              max-y = (track.box.y or 0) + (track.box.height or 0) - d2h({track, s.dur})
              y = (evt.clientY - rbox.y)
              ticks = @ticks.map (t) -> {d: Math.min(Math.abs(t.y - y), Math.abs(t.y - y - d2h({track, s.dur}))), t}
              ticks.sort (a,b) -> a.d - b.d
              if ticks.0 and ticks.0.d < 20 =>
                if Math.abs(ticks.0.t.y - y) < Math.abs(ticks.0.t.y - y - d2h({track, s.dur})) => y = ticks.0.t.y
                else y = ticks.0.t.y - d2h({track, s.dur})
              y = y >? (track.box.y or 0) <? max-y
              s.y = y
              s.moving = false
              if track.id => s.track = track.id
          views.0.render \session

        click: "tick-field": ({node, evt, views}) ~> 
          box = node.getBoundingClientRect!
          @ticks.push {y: evt.clientY - box.y, id: Math.random!}
          views.0.render!

      handler:
        refline: ({node, views}) ~>
          {x,y} = @refptr
          if @ticks.filter(->it.moving).length =>
            node.style <<<
              display: \block
              left: "#0px"
              top: "#{@refptr.y or 0}px"
              width: "100%"
            return

          track = @tracks.filter((t) ->
            box = t.box or {}
            box.x <= x and box.x + box.width >= x
          ).0
          do-move = @sessions.filter(->it.moving).length
          if !track or !do-move =>
            node.style <<< display: \none
            return
          box = track.box or {}
          node.style <<<
            display: \block
            left: "#{track.box.x or 0}px"
            top: "#{@refptr.y or 0}px"
            width: "#{track.box.width or 0}px"

        tick:
          list: ~> @ticks
          key: -> it.id
          view:
            action:
              mousedown: "@": ({ctx}) -> ctx.moving = true
            handler: "@": ({node, ctx}) ->
              node.style.top = "#{ctx.y}px"

        track:
          list: ~> @tracks
          key: -> it.id
          view:
            handler: "@": ({node, ctx}) ~>
              rbox = node.parentNode.getBoundingClientRect!
              nbox = node.getBoundingClientRect!
              ctx.box =
                x: nbox.x - rbox.x
                y: nbox.y - rbox.y
                width: nbox.width
                height: nbox.height

        session:
          list: ~> @sessions.filter -> it.used
          key: -> it.id
          view:
            action:
              mousedown: "@": ({ctx, evt}) ->
                if evt.target.classList.contains \i-close => return
                ctx.moving = true
              click: "@": ({ctx, node, evt, views}) ->
                if evt.target.classList.contains \i-close => ctx.used = false
                views.2.render!

            text:
              "title": ({node, ctx}) ~> ctx.data.title.zh
              "speaker": ({node, ctx}) ~> ctx.data.speaker.map(->it.name).join(' / ')
            handler: "@": ({node, ctx}) ~>
              if !(track = @tracks.filter(-> it.id == ctx.track).0) => return
              box = track.box or {}
              height = box.height * (ctx.dur or 1) / track.dur 
              node.style <<<
                top: "#{ctx.y}px"
                left: "#{box.x}px"
                width: "#{box.width}px"
                height: "#{height}px"


var Scene = function(game) {
  var s = {
    game: game,
  }

  var paddle = Paddle(game)
  var ball = Ball(game)

  var score = 0

  blocks = loadLevel(game, 1)



  s.update = function() {

    if(window.paused) {
      return
    }

    ball.move()

    // 判断游戏结束
    if (ball.y > paddle.y) {
      var end = SceneEnd(game)
      game.replaceScene(end)
      return
    }
  }

  s.draw = function() {
    game.context.fillText('',,)
  }

  game.registerAction('a', function(){
    paddle.moveLeft()
  })

  game.registerAction('d', function(){
    paddle.moveRight()
  })

  game.registerAction('f', function(){
    ball.fire()
  })

  return s
}

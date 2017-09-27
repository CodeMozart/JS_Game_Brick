var Scene = function(game) {
  var s = {
    game: game,
  }

  var paddle = Paddle(game)
  var ball = Ball(game)
  var score = 0

  blocks = loadLevel(game, 1)

  s.update = function() {

  }

  s.draw = function() {

  }

  g.registerAction('a', function(){
    paddle.moveLeft()
  })

  g.registerAction('d', function(){
    paddle.moveRight()
  })

  g.registerAction('f', function(){
    ball.fire()
  })
}

var SceneEnd = function(game) {
  var s = {
    game: game,
  }

  var score = 0

  blocks = loadLevel(game, 1)

  s.update = function() {

  }

  s.draw = function() {
    game.context.fillText('游戏结束',100,290)
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
}

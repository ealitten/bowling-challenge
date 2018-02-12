$(document).ready(function () {

  game = new Game();
  game.addFrame(new Frame());

  function updateTotalScore(){
    $("#current-score").text(game.score());
  };

  function writeRolls(){
    for (n = 0; n < game.currentFrameNo(); n++) {
      var frame = game.getFrames()[n]
      $("#frame" + (n+1) + "roll1").text(getFirstRoll(frame))
      $("#frame" + (n+1) + "roll2").text(getSecondRoll(frame))
      if (n === 9) {
        $("#frame10roll3").text(game.getFrames()[9].thirdRoll())
      }
    }
  };

  function getFirstRoll(frame) {
    if (frame.isStrike()) {return ""}
    return frame.firstRoll()
  }

  function getSecondRoll(frame) {
    if (frame.isSpare()) {return "/"}
    if (frame.isStrike()) {return "X"}
    return frame.secondRoll()
  }
  
  function writeFrames(){
    for (n = 0; n < game.currentFrameNo(); n++) {
      var frame = game.getFrames()[n]
      $("#frameScore" + (n+1)).text(frame.score() + game.bonusScore(frame,n))
    }
  };

  function addRoll(pins){
    game.addRoll(pins)
    updateTotalScore()
    writeRolls()
    writeFrames()
  }

  $('.hit-pins').on('click', function() {
    addRoll(parseInt($(this).val()))
  });


});
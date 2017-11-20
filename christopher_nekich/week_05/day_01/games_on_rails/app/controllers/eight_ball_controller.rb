class EightBallController < ApplicationController

  def game
  end

  def results
    @question = params[:question]
    @responses = [
      "Yes",
      "No",
      "Maybe",
      "I don't know, magic isn't real dumbass"
    ]
  end

end

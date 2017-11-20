class RockPaperScissorsController < ApplicationController
  def throw; end

  def validate
    @choice = params[:choice]
    @computer_choice = case Random.rand 1..3
    when 1
      "rock"
    when 2
      "paper"
    when 3
      "scissors"
    end
    if @choice == @computer_choice
      @result = "A winner is you!"
    else
      @result = "I guess you're a loser!"
    end
  end
end

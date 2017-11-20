class RockPaperScissorsController < ApplicationController
  def throw; end

  def validate
    win_list = [
      ["rock", "scissors"],
      ["scissors", "paper"],
      ["paper", "rock"]
    ]

    @choice = params[:choice]
    @computer_choice = case Random.rand 1..3
    when 1
      "rock"
    when 2
      "paper"
    when 3
      "scissors"
    end
    # raise 'hell'
    if @choice == @computer_choice
      # @result = "A winner is you!"
      @result = "Tie Game!"
    elsif win_list.include? [@choice, @computer_choice]
      @result = "A winner is you!"
    else
      # @result = "I guess you're a loser!"
      @result = "I guess you're a loser!"
    end
  end
end

class RockpsController < ApplicationController
  def form
  end

  def outcome
    @throw = params[:throw]
    @gameboard = ['rock', 'paper', 'scissors'];
    @computer = @gameboard.sample
    if @throw == @computer
      @result = "You won!"
    else
      @result = "You lost!"
    end
  end
end

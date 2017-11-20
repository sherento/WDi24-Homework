class SecretController < ApplicationController
  def secret
  end

  def answer
    @guess = params[:guess]
    @secret_number = 1 + rand(10)
    if @guess == @secret_number
      @result = "You're a genius, you got it!"
    else
      @result = "Wrong!"
    end
  end
end

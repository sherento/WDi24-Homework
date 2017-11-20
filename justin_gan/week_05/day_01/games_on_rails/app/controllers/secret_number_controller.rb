class SecretNumberController < ApplicationController
  def guess; end

  def validate
    @secret_number = [1..10].sample
    @guess = params[:guess].to_i
    if @secret_number == @guess
      @result = "A winner is you"
    else
      @result = "I guess you're a loser"
    end
  end
end

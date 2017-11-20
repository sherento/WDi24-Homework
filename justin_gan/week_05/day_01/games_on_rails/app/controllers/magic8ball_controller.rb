class Magic8ballController < ApplicationController
  def question; end

  def answer
    @question = params[:question]
    choice = Random.rand 1..3
    @answer = case choice
    when 1
      "It is certain"
    when 2
      "Reply hazy, try again"
    when 3
      "Don't count on it"
    end
    @answer = 42 if @question == "What is the meaning of life?"
  end
end

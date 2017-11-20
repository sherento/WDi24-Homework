Rails.application.routes.draw do
  root :to => 'pages#home'
  get '/eightball' => 'eight_ball#game'
  get '/eightball/results' => 'eight_ball#results'
  get '/secretnumber' => 'secret_number#game'
  get '/rockpaperscissors' => 'rps#game'
end

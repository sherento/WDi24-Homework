Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/magic-8-ball' => 'ball#start'
  get '/magic-8-ball/answer' => 'ball#answer'
end

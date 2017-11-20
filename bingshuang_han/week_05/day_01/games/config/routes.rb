Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'pages#home'

  get '/magic8' => 'magic8#form'
  get '/magic8/game'=>'magic8#game'

  get '/secretN' => 'secretN#form'
  get '/secretN' => 'secretN#game'

  # get '/rock_paper_scissor' =>
end

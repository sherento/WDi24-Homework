Rails.application.routes.draw do
  root :to => 'mountains#index'
  get '/mountains' => 'mountains#index' # index of all mountains
  get '/mountains/new' => 'mountains#new'  # show form for new mountain
  post '/mountains' => 'mountains#create' # makes a new mountain arise from the earth
  get '/mountains/:id' => 'mountains#show', :as => "mountain" # show single mountain info
  delete '/mountains/:id' => 'mountains#destroy'
end

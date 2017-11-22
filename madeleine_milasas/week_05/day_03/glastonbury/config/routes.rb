# == Route Map
#
#    Prefix Verb   URI Pattern               Controller#Action
#     bands GET    /bands(.:format)          bands#index
#           POST   /bands(.:format)          bands#create
#  new_band GET    /bands/new(.:format)      bands#new
# edit_band GET    /bands/:id/edit(.:format) bands#edit
#      band GET    /bands/:id(.:format)      bands#show
#           PATCH  /bands/:id(.:format)      bands#update
#           PUT    /bands/:id(.:format)      bands#update
#           DELETE /bands/:id(.:format)      bands#destroy
# 

Rails.application.routes.draw do
  resources :bands
end

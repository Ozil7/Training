Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'welcomes/index'
   
   resources :articles do
  resources :comments
  root 'welcomes#index'
end

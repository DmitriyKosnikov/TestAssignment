Rails.application.routes.draw do
  resources :posts, except: :index
  resources :users

  root 'posts#index'
end

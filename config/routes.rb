Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "homes#index"

  resources :pokemon, only: [:index, :show, :create]
  resources :usage, only: [:index]

  namespace :api do
    namespace :v1 do
      resources :pokemon, only: [:index, :destroy, :show, :create]
      resources :reviews, only: [:index, :create]
    end
  end
end

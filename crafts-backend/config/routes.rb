Rails.application.routes.draw do
  # resources :craft_logs
  resources :materials do 
    resources :crafts
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

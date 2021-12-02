class Api::V1::PokemonController < ApplicationController
  def index
    render json: Pokemon.all
  end

  def create
    pokemon = Pokemon.new({
      name: params[:name],
      user_id: current_user.id
    })
  
    if pokemon.save
      render json: pokemon
    else
      render json: { error: pokemon.errors.full_messages }, status: :unprocessable_entity
    end
  end
end
class PokemonController < ApplicationController
  def index
  end

  def show
    # @reviews = Review.where(species: params["id"])
  end

  # def review_params
  #   params.require(:review).permit(:body)
  # end

  # # def create
  # #   @new_review = Review.new(species: params["id"], user_id: current_user.id, body: review_params)
  # # end
end
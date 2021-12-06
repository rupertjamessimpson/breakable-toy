class Api::V1::ReviewsController < ApplicationController
  require 'pry'

  def index
    render json: Review.all
  end

  def create
    review = Review.new({
      body: params[:body],
      species: params[:species],
      user_id: current_user.id
    })
  
    if review.save
      render json: review
    else
      render json: { error: review.errors.full_messages }, status: :unprocessable_entity
    end
  end
end
class Review < ApplicationRecord
  belongs_to :user

  validates :body, presence: true
  validates :species, presence: true
end
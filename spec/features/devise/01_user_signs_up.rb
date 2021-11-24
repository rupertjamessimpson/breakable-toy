require 'rails_helper'

feature "user signs up" do
  scenario "visting home page and clicking signup page" do
    visit root_path
    click_link "Sign Up"

    expect(page).to have_content "New User Sign up"
    fill_in "Username", with: "Ash_Ketchum"
    fill_in "Email", with: "gottacatchemall@gmail.com"
    fill_in "Password", with: "theverybest"
    fill_in "Password confirmation", with: "theverybest"

    click_button "Sign up"

    expect(page).to have_content "Welcome! You have signed up successfully."
  end
end
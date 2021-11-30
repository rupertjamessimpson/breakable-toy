class UsageController < ApplicationController
require 'open-uri'
require 'nokogiri'
require 'pry'

  def index
    doc = Nokogiri::HTML(URI.open("https://www.pikalytics.com/"))


    pokemon_array = doc.css('.pokemon-name').map do |pokemon|
      if pokemon.text === "Thundurus " || pokemon.text === "Tornadus " || pokemon.text === "Landorus "
        {name: "#{pokemon.text.gsub(" ", "")}-Incarnate", usage: ""}
      else
        {name: pokemon.text, usage: ""}
      end
    end

    usage_array = doc.css('.float-right.margin-right-20').map do |data|
      data.text
    end

    i = 0
    pokemon_array.each do |hash|
      hash[:usage] = usage_array[i]
      i = i + 1
    end

    @pokemon = pokemon_array.slice(0, 10)
  end
end

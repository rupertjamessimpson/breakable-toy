import { shallow } from 'enzyme';
import React from 'react';
import HomePage from '../components/HomePage';

const home = shallow(<HomePage />);

describe('Test home page images', () => {

    it("renders the logo image", () => {   
        expect(home.find("img.logo").prop("src")).toEqual("https://pokemon-bucket-breakable-toy.s3.us-east-2.amazonaws.com/d634bc0c3be955e5792ab97f27702385.png");
     });

     it("renders the trainer image", () => { 
      expect(home.find("img.rupe").prop("src")).toEqual("https://pokemon-bucket-breakable-toy.s3.us-east-2.amazonaws.com/rupertspokemon.png");
    });

 });
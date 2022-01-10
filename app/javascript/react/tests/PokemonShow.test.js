import { shallow } from 'enzyme';
import React from 'react';
import PokemonShow from '../components/PokemonShow';

const species = { params: { name: 'pikachu' } }
const show = shallow(<PokemonShow species={species}/>);

describe('Pokemon information should be displayed', () => {

  it('should pass', () => {
    expect(true).toBe(true);
  });
  
});

// How do I pass URL params to the componenet through a test?
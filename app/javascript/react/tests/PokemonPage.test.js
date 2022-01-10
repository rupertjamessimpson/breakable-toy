import { shallow } from 'enzyme';
import React from 'react';
import PokemonPage from '../components/PokemonPage';

// example test code to let the test run before finishing it
const show = shallow(<PokemonShow species={species}/>);

describe('example test', () => {
  it('should pass', () => {
    expect(true).toBe(true);
  });
});

// How do I account for when the page looks at the ERB header in the browser?
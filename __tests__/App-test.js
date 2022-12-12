import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import {ListItem} from '../src/components/ListItem';
import axios from 'axios';
import {MockService} from '../src/services';

const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({navigate: mockedNavigate}),
}));

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => {
    return mockedNavigate;
  },
}));

it('list item renders correctly', () => {
  const fakeItems = {
    item: {
      name: 'Homer Simpsons',
    },
    index: 1,
  };
  const {getByText, toJSON} = render(<ListItem items={fakeItems} />);
  expect(getByText('Homer Simpsons')).toBeTruthy();
  expect(toJSON()).toMatchSnapshot();
});

jest.mock('axios');
const {getData} = MockService();

describe('Get simpsons', () => {
  describe('when API call is successful', () => {
    it('should return users list', async () => {
      // given

      const mockData = {
        item: {
          name: 'Homer Simpsons',
          avatar:
            'https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png/revision/latest/scale-to-width-down/300?cb=20201222215437',
          job: 'Nuclear Safety Inspector',
          description:
            "Homer Jay Simpson (born May 12, 1956) is the main protagonist and one of the five main characters of The Simpsons series (or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson. Homer is overweight (said to be ~240 pounds), lazy, and often ignorant to the world around him. Although Homer has many flaws, he has shown to have great caring, love, and even bravery to those he cares about and, sometimes, even others he doesn't. He also serves as the main protagonist of the The Simpsons Movie. He is 39 years old and was born in 1956.",
          id: '14',
        },
      };

      axios.get.mockResolvedValueOnce(mockData);
      // when
      const result = await getData();
      //console.log(result);
      // then
      expect(axios.get).toHaveBeenCalledWith(
        'https://5fc9346b2af77700165ae514.mockapi.io/simpsons',
      );
      expect(result).toEqual(mockData);
    });
  });
});

import axios, {AxiosResponse} from 'axios';
import React, {useContext} from 'react';
import { HelperFunctions } from '../helpers/ServiceHelpers';

const url = HelperFunctions.GetSimpsonsServiceUrl();

export default MockService = () => {

  const getData = async () => {
    try {
      let res = await axios.get(url);

      return res;
    } catch (error) {
      return error;
    }
  };

  return {getData};
};

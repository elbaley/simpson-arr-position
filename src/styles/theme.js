import {Dimensions,PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');

const colors = {
  success: '#71D4FF',
  error: '#FF6F6F',
  white: '#FFFFFF',
  black: '#000000',
  buttonBackgroundColor: '#71D4FF',
};

function normalize(size, multiplier = 2) {
    const scale = (width / height) * multiplier;
    const newSize = size * scale;
  
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }

const sizes = {
  width: width,
  height: height,
};




export { colors, sizes, normalize};

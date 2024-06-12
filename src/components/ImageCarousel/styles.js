import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../utils/colors';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  list: {},
  image: {
    width: width,
    height: height * 0.45,
  },
  pageination: {
    position: 'absolute',
    bottom: 70,
    flexDirection: 'row',
    alignContent: 'center',
    alignSelf: 'center',
  },
  pageinationLine: {
    height: 4,
    width: 20,
    borderRadius: 10,
    backgroundColor: colors.white,
    margin: 5,
  },
  activeLine: {
    backgroundColor: colors.blue,
    width: 30,
  },
});
export default styles;

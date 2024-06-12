import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    flexDirection: 'row',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
  },
  contint: {
    flex: 1,
  },

  title: {
    color: colors.textGrey,
    paddingVertical: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 20,
  },
  price: {
    color: colors.black,
    paddingBottom: 8,
  },
  icon: {
    tintColor: colors.blue,
    width: 24,
    height: 24,
    margin: 8,
  },
});
export default styles;

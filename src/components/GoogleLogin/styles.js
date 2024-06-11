import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkGrey,
    alignSelf: 'center',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    width: '45%',
    marginBottom: 50,
  },
  image: {
    width: 30,
    height: 30,
  },
});
export default styles;

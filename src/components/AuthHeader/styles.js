import {colors} from '../../utils/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 54,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 18,
    height: 18,
  },
  title: {
    paddingHorizontal: 16,
    color: colors.blue,
    fontSize: 26,
    fontWeight: '500',
  },
});

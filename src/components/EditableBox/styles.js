import {colors} from '../../utils/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: colors.white,
    marginVertical: 12,
    borderRadius: 4,
  },
  lable: {
    color: colors.grey,

    fontSize: 12,
    marginBottom: 6,
  },
  input: {
    color: colors.blue,
    fontSize: 14,
    fontWeight: '500',
  },
});

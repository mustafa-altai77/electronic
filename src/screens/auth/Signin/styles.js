import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';
export const styles = StyleSheet.create({
  container: {
    padding: 24,
  },

  title: {
    color: colors.blue,
    fontSize: 15,
    marginHorizontal: 13,
  },

  button: {
    marginVertical: 20,
  },
  footerText: {
    color: colors.blue,
    textAlign: 'center',
  },
  footerLink: {
    fontWeight: 'bold',
  },
});

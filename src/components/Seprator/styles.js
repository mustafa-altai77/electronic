import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  text: {
    color: colors.blue,
    fontSize: 14,
    fontWeight: '500',
    marginHorizontal: 8,
  },
  line: {
    heigßht: 1,
    backgroundColor: colors.lightGrey,
    flex: 1,
  },
});
export default styles;

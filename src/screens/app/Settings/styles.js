import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';
export const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  containerHeaderINfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  sectionTitle: {
    fontWeight: '500',
    fontSize: 16,
    color: colors.grey,
    marginBottom: 16,
  },
  editIcon: {
    width: 24,
    height: 24,
  },
  Button: {
    paddingVertical: 12,

    marginTop: 16,
  },
});

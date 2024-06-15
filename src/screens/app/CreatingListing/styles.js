import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';
export const styles = StyleSheet.create({
  container: {
    padding: 24,
  },

  sectionTitle: {
    fontWeight: '500',
    fontSize: 14,
    color: colors.blue,
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 4,
    marginRight: 8,
    marginTop: 8,
  },
  uploadContainer: {
    width: 100,
    height: 100,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.grey,
    borderStyle: 'dotted',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    marginTop: 8,
  },
  uploadCircle: {
    width: 32,
    height: 32,
    borderRadius: 20,
    backgroundColor: colors.lightGrey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadPlus: {
    color: colors.white,
    fontSize: 24,
  },
  imageRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingBottom: 16,
  },
  deletelIcon: {
    position: 'absolute',
    right: 1,
  },
  delete: {
    width: 24,
    height: 24,
    tintColor: colors.blue,
  },
  textArea: {
    minHeight: 150,
    paddingTop: 16,
  },
});

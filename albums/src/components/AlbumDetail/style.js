import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  thumbnail: {
    width: 50,
    height: 50,
  },
  image: {
    flex: 1,
    width: null,
    height: 300,
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerText: {
    fontSize: 18,
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
});

export default style;

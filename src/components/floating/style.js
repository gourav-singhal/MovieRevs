import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  element: {
    position: 'relative'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    borderWidth: 1,
    color: 'black',
    fontSize: 20,
    borderRadius: 4,
    paddingLeft: 10,
    marginTop: 20,
  },
  label: {
   marginTop: 21,
   paddingLeft: 9,
   color: '#AAA',
   position: 'absolute'
  }
});

export default styles;

import EStyleSheet from 'react-native-extended-stylesheet';

const bgColor = '#DCFFEE';
const innerBgColor = '#FDFDFD'

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerContainer: {
      height: 300,
      width: 300,
      backgroundColor: innerBgColor,
      alignItems: 'center'
  },
  headerText: {
      fontSize: 24,
      fontWeight: '300'
  },
  headerContainer: {
      marginTop: 20
  },
  inputContainer: {
      marginTop: 10,
      justifyContent:'center',
      backgroundColor:'white',
      borderRadius:2,
      borderColor:'#DCDCDC',
      borderWidth:2,
      paddingLeft:0,
  },
  buttonContainer: {
      marginTop: 10,
      justifyContent:'center'
  },
  labelInput: {
    color: '#673AB7',
  },
  formInput: {    
    borderBottomWidth: 1.5, 
    borderColor: '#DCDCDC',       
  },
  input: {
    height: 40,
    color: '#8A2BE2',
    backgroundColor: 'transparent',
    paddingLeft: 10
  }
});

export default styles;
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    buttonContainer:{
       backgroundColor:'#8A2BE2',
       alignItems:'center',
       marginVertical:10,
    },
    buttonView:{
        width:100,
        height: 40,
        borderRadius:5,
        alignItems:'center',
        justifyContent: 'center'
    },
    buttonText:{
        color:'white',
        fontSize:18,
        fontWeight:'900'
    },
});

export default styles;
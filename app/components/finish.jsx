import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { StyleSheet, View, Button, Text } from 'react-native'
import { validateBoard } from '../store/actions'

export default function Finish({ navigation, route}) {
    const dispatch = useDispatch()
    const difficulty = route.params.difficulty
    const name = route.params.name
    useEffect(() => {
        dispatch(validateBoard(false))
    },[])
    return (
        <View style={styles.container}>
            {/* <View style={styles.subcontainer}> */}
                <Text style={styles.titleText}>
                    Congratulation {name}
                </Text>
                <Text style={styles.subtitleText}>
                    for Resolving This game at {difficulty} Mode!
                </Text>
            {/* </View> */}
            <Button style={styles.button}
                    title="Home"
                    color="#f194ff"
                    onPress={() => navigation.navigate('Home')}
                />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        // flexWrap: 'wrap',
        width:'100%'
      },
    subcontainer: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        // flexWrap: 'wrap',
        width:'100%',
        height: 5
      },
  titleContainer: {
    flex: 1,
    paddingTop: '10%',
    // backgroundColor: '#00f',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    textAlign: 'center',
    flexWrap: 'nowrap',
    width:'100%',
    height:'35%'
  },
    button: {
        alignItems: 'center',
        justifyContent: 'space-around',
        color:'white',
        width:'100%',
        marginTop: 40,
    },
    buttonDif: {
        alignItems: 'center',
        justifyContent: 'space-around',
        color:'white',
        width:'100%'
      },
    buttonWrapper: {
        alignItems: 'center',
        justifyContent: 'space-around',
        color:'white',
        width: '50%'
      },
      titleText: {
          fontSize: 20,
          color: '#000',
          textAlign:'center'
      },
      subtitleText: {
          fontSize: 15,
          color: '#000',
          textAlign:'center',
          marginBottom:50
      },
});

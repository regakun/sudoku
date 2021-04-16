import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { StyleSheet, View, Button, Text, TextInput, Dimensions, Alert } from 'react-native'
import { setLoading } from '../store/actions'

export default function Home({ navigation }) {
    const dispatch = useDispatch()
    // const difficulty = useSelector(state => state.difficulty)
    const [difficulty, setDifficulty] = useState('random')
    const [name, setName] = useState('')
    // const changeDiff = (diff) => {
    //     dispatch(editDifficulty(diff))
    // }
    const changeDiff = (diff) => {
        setDifficulty(diff)
    }
    const start = () => {
        if (name.length > 0) {
            dispatch(setLoading(true))
            navigation.navigate('Board',{difficulty: difficulty, name})
        }else{
            Alert.alert('Please fill your name properly')
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>
                    Welcome to Sugoku!
                </Text>
                <Text style={styles.subtitleText}>
                    Please enter your name
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setName}
                    placeholder={'Guest'}
                />
            </View>
            <View style={styles.footerContainer}>
                <View style={styles.footerChild}>
                    <View>
                    <Text>
                        Select Difficulty
                    </Text>
                    </View>
                    <View style={styles.buttonGroup}>
                        <Button style={styles.buttonDif}
                        title="Easy"
                        color={(difficulty == 'easy') ? '#BDD8FE' : '#FEBDBD'}
                        onPress={() => changeDiff('easy')}
                        />  
                        <Button style={styles.buttonDif}
                        title="Medium"
                        color={(difficulty == 'medium') ? '#BDD8FE' : '#FEBDBD'}
                        onPress={() => changeDiff('medium')}
                            />  
                    </View>
                    <View style={styles.buttonGroup}>
                        <Button style={styles.buttonDif}
                        title="Hard"
                        color={(difficulty == 'hard') ? '#BDD8FE' : '#FEBDBD'}
                        onPress={() => changeDiff('hard')}
                        /> 
                        <Button style={styles.buttonDif}
                        title="Random"
                        color={(difficulty == 'random') ? '#BDD8FE' : '#FEBDBD'}
                        onPress={() => changeDiff('random')}
                        />
                    </View>
                </View>
                <View style={styles.footerChild}>
                    <View style={styles.buttonGroup}>
                        <Button style={styles.button}
                        title="Start"
                        color="#f194ff"
                        onPress={() => start()}
                        />  
                    </View>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        width:'100%'
      },
  titleContainer: {
    flex: 1,
    paddingTop: '10%',
    // backgroundColor: '#00f',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    flexWrap: 'nowrap',
    width:'100%',
    height:'35%'
  },
  footerChild: {
    flex: 1,
    paddingTop: '10%',
    // backgroundColor: '#00f',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    flexWrap: 'wrap',
    width:'100%',
    height:'25%'
  },
  buttonGroup: {
    flex: 1,
    paddingTop: '10%',
    // backgroundColor: '#00f',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection:'row',
    flexWrap: 'wrap',
    width:'100%',
    height:'25%'
  },
  footerContainer: {
    flex: 1,
    // backgroundColor: '#00f',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection:'column',
    flexWrap: 'wrap',
    width:'100%',
    height:'25%'
  },
    button: {
        alignItems: 'center',
        justifyContent: 'space-around',
        color:'white',
        width:'100%'
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
      input: {
        // height: 40,
        margin: 12,
        padding:5,
        width:(Dimensions.get('window').width - (Dimensions.get('window').width/4)),
        textAlign:'center',
        fontSize:15,
        borderWidth: 1,

      },
      titleText: {
          fontSize: 21,
          color: '#000',
      },
      subtitleText: {
          fontSize: 14,
          color: '#969696',
      },
});

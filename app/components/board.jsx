import React,{useEffect} from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { getBoardAsync, validateBoardAsync, solveBoardAsync } from '../store/actions'
import Row from './row'

export default function Board({ navigation, route }) {
    const dispatch = useDispatch()
    const board = useSelector(state => state.board)
    const initBoard = useSelector(state => state.initBoard)
    const loading = useSelector(state => state.loading)
    const status = useSelector(state => state.status)
    const difficulty = route.params.difficulty
    const name = route.params.name
    const validate = () => {
        dispatch(validateBoardAsync(board))
        // Alert.alert(status)
    }
    const solve = () => {
        dispatch(solveBoardAsync(initBoard))
        // Alert.alert('Congratulations! its solved now')
    }
    useEffect(() => {
        if (status == 'solved') {
            navigation.navigate('Finish',{difficulty, name})
        }
    },[status])
    const retry = () => {
        dispatch(getBoardAsync(difficulty))
    }
    useEffect(() => {
        dispatch(getBoardAsync(difficulty))
    },[])
    if (loading) {
        return (
            <View style={styles.loadingContainer}>
            <Image
                style={styles.tinyLogo}
                source={require('../assets/Cube-1s-200px.gif')}
            />
        </View>
        )
    }else{

        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                <Text  style={styles.text}>
                    Player {name}
                </Text>
                </View>
            {
                (loading) ? 
                <View style={styles.loadingContainer}>
                    <Image
                        style={styles.tinyLogo}
                        source={require('../assets/Cube-1s-200px.gif')}
                    />
                </View> : 
                <View style={styles.boardContainer}>
                    {
                    board.map((element, index) => (
                        <Row key={index} keys={index} values={board[index]}>
            
                        </Row>
                    ))
                    }
                </View>
            }
            <View style={styles.titleContainer}>
                <View style={styles.footerContainer}>
                <Button style={styles.button}
                    title="Solve"
                    color="#f194ff"
                    onPress={() => solve()}
                />
                <Button style={styles.button}
                    title="Check"
                    color="#f194ff"
                    onPress={() => validate()}
                />
                <Button style={styles.button}
                    title="Retry"
                    color="#f194ff"
                    onPress={() => retry()}
                />
                <Button style={styles.button}
                    title="Home"
                    color="#f194ff"
                    onPress={() => navigation.goBack()}
                />
                </View>
            </View>
        </View>
        )
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    // flexWrap: 'wrap',
  },
  boardContainer: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    flexWrap: 'wrap',
    width:'97%',
    height:'50%'
  },
  titleContainer: {
    flex: 0,
    // backgroundColor: '#00f',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    flexWrap: 'nowrap',
    width:'100%',
    height:'25%'
  },
  footerContainer: {
    flex: 1,
    marginTop: '10%',
    // backgroundColor: '#00f',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection:'row',
    flexWrap: 'wrap',
    width:'100%',
    height:'25%'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text: {
      color: 'black'
  },
  tinyLogo: {
    width: 50,
    height: 50,
  }
});

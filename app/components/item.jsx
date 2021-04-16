import React,{useEffect, useState} from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { editBoardAsync } from '../store/actions'

export default function Item(props) {
    const rowIndex = props.rowIndex
    const keys = props.keys
    const dispatch = useDispatch()
    const values = props.values
    const board = useSelector(state => state.board)
    const initBoard = useSelector(state => state.initBoard)
    const [value, setValue] = useState(0)
    const updateField = (val) => {
      let tempBoard = board.map(element => [...element])
      tempBoard[rowIndex][keys] = Number(val)
      dispatch(editBoardAsync(tempBoard))
    }
    useEffect(() => {
      setValue(props.values)
    },[])
    if (initBoard[rowIndex][keys] == 0) {
      return (
          <TextInput
              keyboardType="numeric"
              style={styles.input}
              maxLength = {1}
              value={(values != 0) ? String(values) : ''}
              onChangeText={(e) => updateField(e)}
          />
      )
    }else{
      return (
        <TextInput
            style={styles.input}
            editable={false}
            value={String(value)}
        />
    )
    }
}


const styles = StyleSheet.create({
  input: {
    // flex:1,
    width:33.3,
    backgroundColor: 'white',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-between',
    flexDirection:'column',
    borderWidth: 1,
    borderColor: 'pink',
    display: 'flex'
  },
  text: {
    color: 'black'
  }
});

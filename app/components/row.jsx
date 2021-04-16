import React from 'react'
import { StyleSheet, View } from 'react-native'
import Item from './item.jsx'

export default function Row(props) {
    const rowValue = props.values;
    const rowIndex = props.keys
    return (
        <View style={styles.rowContainer}>
            {
                rowValue.map((element, index) => (
                    <Item
                    key={index}
                    keys={index}
                    rowIndex={rowIndex}
                    values={element}
                    >
                    </Item>
                ))
            }
        </View>
        )
}


const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#00f',
    justifyContent: 'center',
    width:'100%'
  },
  columnContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor:'pink',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    borderColor:'white',
    borderWidth:1,
  },
  input: {
    // flex:1,
    width:33.3,
    backgroundColor: 'white',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    borderWidth: 1,
    borderColor: 'red',
    display: 'flex'
  },
  text: {
    color: 'black'
  }
});

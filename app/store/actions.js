import axios from 'axios'
import { Alert } from 'react-native'

const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length -1 ? '' : '%2C'}`, '')

const encodeParams = (params) => 
Object.keys(params)
.map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
.join('&');



export function getBoard(payload) {
    return {
        type: 'board/set',
        payload
    }
}
export function setLoading(payload) {
    return {
        type: 'loading/set',
        payload
    }
}

export function getBoardAsync(payload) {
    return (dispatch) => {
        dispatch(setLoading(true))
        axios({
            method: 'get',
            url: `https://sugoku.herokuapp.com/board?difficulty=${payload}`
        })
        .then(response => {
            dispatch(getBoard(response.data.board))
        })
        .catch(({ response }) => {
            // console.log(response, 'ini  catch')
        })
        .finally((_) => {
            dispatch(setLoading(false))
        })
    }
}

export function editBoard(payload) {
    return {
        type: 'board/edit',
        payload
    }
}

export function editBoardAsync(payload) {
    return (dispatch) => {
        dispatch(editBoard(payload))
    }
}

export function validateBoard(payload) {
    return {
        type: 'status/edit',
        payload
    }
}

export function validateBoardAsync(payload) {
    setLoading(true)
    const data = {board:payload}
    return (dispatch) => {
        fetch('https://sugoku.herokuapp.com/validate',{
            method: 'post',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encodeParams(data)
        })
        .then(response => response.json() )
        .then(response => {
            if (response.status != 'solved') {
                Alert.alert(response.status)
            }
            dispatch(validateBoard(response.status))
        })
        .catch((response) => {
            // console.log(response,'catch')
        })
        .finally((_) => {
            setLoading(false)
        })
        // dispatch(validateBoard(payload))
    }
}

export function solveBoardAsync(payload) {
    setLoading(true)
    const data = {board:payload}
    // console.log(data,'data')
    return (dispatch) => {
        fetch('https://sugoku.herokuapp.com/solve',{
            method: 'post',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encodeParams(data)
        })
        .then((response) => response.json())
        .then(response => {
            dispatch(editBoard(response.solution))
        })
        .catch(( response ) => {
            // console.log(response,'catch')
        })
        .finally((_) => {
            setLoading(false)
        })
        // dispatch(validateBoard(payload))
    }
}
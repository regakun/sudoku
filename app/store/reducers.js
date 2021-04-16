const initialState = {
    board: [],
    initBoard: [],
    loading: false,
    status: false,
}

function reducer(state = initialState, action) {
    const { type, payload } = action

    if (type ==='board/set') {
        return { ...state, board: payload, initBoard: payload}
    }
    else if (type ==='board/edit') {
        return { ...state, board: payload}
    }
    else if (type ==='status/edit') {
        return { ...state, status: payload}
    }
    else if (type ==='loading/set') {
        return { ...state, loading: payload}
    }
    return state
}

export default reducer
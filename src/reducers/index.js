const initialState = {
    steamId: null
}

export default (state = initialState, action) => {
    const newState = {...state};

    //SET STEAMID
    if(action.type === 'SET_STEAM_ID'){
        newState.steamId = action.steamId;
    }

    return newState;
}
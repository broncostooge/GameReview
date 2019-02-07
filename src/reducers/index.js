const initialState = {
    steamId: null,
    gameLibrary: null
}

export default (state = initialState, action) => {
    const newState = {...state};

    //SET STEAMID
    if(action.type === 'SET_STEAM_ID'){
        newState.steamId = action.steamId;
    }
    if(action.type === 'SET_GAME_LIBRARY'){
        newState.gameLibrary = action.gameData;
    }

    return newState;
}
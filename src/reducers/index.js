const initialState = {
    steamId: null,
    gamesOwned: {
        gameCount: 0,
        gameList: []
    }
}

export default (state = initialState, action) => {
    const newState = {...state};

    //SET STEAMID
    if(action.type === 'SET_STEAM_ID'){
        newState.steamId = action.steamID;
    }

    if(action.type === 'SET_GAMES_OWNED_GAMECOUNT'){
        newState.gamesOwned.gameCount = action.gameCount;
    }

    if(action.type === 'SET_GAMES_OWNED_GAMESOWNED'){
        newState.gamesOwned.gameList = action.gamesOwned;
    }

    return newState;
}
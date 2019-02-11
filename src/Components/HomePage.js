import React, { Component } from 'react';
import { store } from '../store/index.js'

class HomePage extends Component {
    constructor(props){
        super(props)
          this.state = {
              steamUser64ID: null
        }

        this.FetchSteamUser64ID = this.FetchSteamUser64ID.bind(this);
        this.FetchSteamUserGameList = this.FetchSteamUserGameList.bind(this);
    }

    async FetchSteamUser64ID() {
        const steamUserName = document.getElementById('SteamUserName').value;
        let steamId;

        if (steamUserName) {
            await fetch('http://localhost:61581/SteamUser64ID/' + steamUserName)
            .then(res => res.json())
            .then(json => {
                this.setState({steamUser64ID: json.response.steamid});
                store.dispatch({ type: 'SET_STEAM_ID', steamID: json.response.steamid })
            });
        }
    }

    async FetchSteamUserGameList() {\
        
        if(this.state.steamUser64ID) {
            await fetch('http://localhost:61581/SteamUserGameList/' + this.state.steamUser64ID)
            .then(res => res.json())
            .then(json => {
                store.dispatch({ type: 'SET_GAMES_OWNED_GAMECOUNT', gameCount: json.response.game_count });
                store.dispatch({ type: 'SET_GAMES_OWNED_GAMESOWNED', gamesOwned: json.response.games });
            })
        }
    }

    render() {
        return(
            <div>
                <input id="SteamUserName" type="text" placeholder="Steam UserName"/>
                <button onClick={this.FetchSteamUser64ID}>GetUserID</button>
                <button onClick={this.FetchSteamUserGameList}>GetUserGameList</button>
            </div>
        );
    }
}

export default HomePage;
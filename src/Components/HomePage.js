import React, { Component } from 'react';
import { store } from '../store'

class HomePage extends Component {

    async FetchSteamUser64ID(){
        let steamUserName = document.getElementById('SteamUserName').value;
        let request;
        let response;
        let steamId;

        if(steamUserName){
            response = await fetch('http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=3F1EEFCCC0C8F311EFD50A76A5C26E68&vanityurl=' + steamUserName)
            .catch(function(e){console.log(e)});
            
            request = await response.json();
            steamId = request.response.steamid
            store.dispatch({type:'SET_STEAM_ID', steamId: steamId})
        }
    }

    render() {
        return(
            <div>
            <input id="SteamUserName" type="text" placeholder="Steam UserName"/>
            <button onClick={this.FetchSteamUser64ID}>Submit</button>
            </div>
        )
    }
}

export default HomePage;
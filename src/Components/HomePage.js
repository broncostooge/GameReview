import React, { Component } from 'react';

class HomePage extends Component {

    async FetchSteamUser64ID(){
        let steamUserName = document.getElementById('SteamUserName').value;
        let steamId;

        if(steamUserName){
            await fetch('http://localhost:61581/SteamUser64ID/' + steamUserName)
            .then(res => res.json())
            .then(json => steamId)
        }
    }

    render() {
        return(
            <div>
                <input id="SteamUserName" type="text" placeholder="Steam UserName"/>
                <button onClick={this.FetchSteamUser64ID}>Submit</button>
                {this.props.steamId}
            </div>
        )
    }
}

export default HomePage;
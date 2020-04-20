import React, { Component } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();





class NowPlaying extends Component {
    constructor(){
        super();
        const params = this.getHashParams();
        const token = params.access_token;
        if (token) {
        spotifyApi.setAccessToken(token);
        }
        this.state = {
        loggedIn: token ? true : false,
        nowPlaying: {  name: '', albumArt: '' }

        }
    }
        
    

    getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        e = r.exec(q)
        while (e) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
            e = r.exec(q);
        }
        return hashParams;
    }



    getNowPlaying(){
        spotifyApi.getMyCurrentPlaybackState()
        .then((response) => {
            this.setState({
                
            nowPlaying: { 
                name: response.item.name, 
                albumArt: response.item.album.images[0].url
                }
            });
        })
    }
    

    render() {
        return (
        <div className="nowPlaying">
            <div style={{   fontSize: 30 }} >
            Now Playing: 
            { this.state.nowPlaying.name } 
            </div>
            <div>
            <img src={this.state.nowPlaying.albumArt} style={{ height: 300 }} alt="" />
            </div>
            { this.state.loggedIn &&
            <button onClick={() => this.getNowPlaying()} style={{ width: 200, height: 50, color: '#1ed760', fontSize: 30 }}>
            Show
            </button>
            }
        </div>
        );
    }
    
}




export default NowPlaying;

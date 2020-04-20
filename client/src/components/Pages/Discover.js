import React, { Component } from 'react';
import Header from '../UI/Header/Header';
import { connect } from 'react-redux';
import ProfilePageBG from '../../assets/profile-bg.jpg';
import TrackSearchContainer from './../../containers/TrackSearchContainer';
import TopTracksContainer from './../../containers/TopTracksContainer';
import TopArtistsContainer from './../../containers/TopArtistsContainer';
import RecentTracksContainer from './../../containers/RecentTracksContainer';
import ArtistContainer from '../../containers/ArtistContainer';
import TrackList from './../TrackList/TrackList';
import Sidebar from '../UI/Sidebar/Sidebar';
import Drawer from '../UI/Drawer/Drawer';
import * as actions from '../../store/actions/index';


class Discover extends Component {
  constructor() {
    super();
    this.state = {
      trackResults: [],
      title: 'Discover',
      description: 'Find new and exiting music from artists all over the world.',
      displayMenuActions: false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      trackResults: nextProps.tracks.tracksResults
    });
  }

  render() {
    let trackSearchResults;

    if (this.state.trackResults.length === 0) {
      trackSearchResults = '';
    } else {
      trackSearchResults = (
        <section className="main__section">
          <h3 className="main__title">Search Results</h3>
          <div className="track__list">
            <TrackList
              key={this.props.topTracks}
              tracks={this.state.trackResults}
              toggleSong={this.props.toggleSong}
              favouriteTracks={this.props.tracks.favouriteTracks}
            />
          </div>
        </section>
      );
    }

    return (
      <div>
        <Sidebar>
          <TrackSearchContainer />
        </Sidebar>

        <Header
          title={this.state.title}
          description={this.state.description}
          image={ProfilePageBG}
        />

        <main className="main">

          <section className="main__section">
            <h3 className="main__title">Top Charts</h3>
            <div className="track__list">
              <TopTracksContainer />
            </div>
          </section>

          <section className="main__section">
            <h3 className="main__title">Search</h3>
            <TrackSearchContainer />
            <br></br>
            {trackSearchResults}

          </section>

          <Drawer
            active={this.props.toggleDrawer}
            playingTrack={this.props.playingTrack}
          />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tracks: state.tracks,
    trackResults: state.tracks.trackResults,
    toggleDrawer: state.tracks.toggleDrawer,
    playingTrack: state.tracks.currentlyPlaying,
    favouriteTracks: state.tracks.favouriteTracks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleSong: track => dispatch(actions.toggleDrawer(track))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discover);

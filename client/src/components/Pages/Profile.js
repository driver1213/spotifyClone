import React, { Component } from 'react';
import Header from '../UI/Header/Header';
import ProfilePageBG from '../../assets/profile-bg.jpg';
import TrackSearchContainer from './../../containers/TrackSearchContainer';
import TopTracksContainer from './../../containers/TopTracksContainer';
import RecentTracksContainer from './../../containers/RecentTracksContainer';
import PlayListContainer from '../../containers/PlayListContainer';
import Drawer from './../UI/Drawer/Darwer';
import Sidebar from '../UI/Sidebar/Sidebar';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Profile',
      description: 'See your most played artists, albums and songs.'
    };
  }

  componentWillReceiveProps(nextProps) {}

  render() {
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
            <h3 className="main__title">Your Top Tracks</h3>
            <div className="track__list">
              <RecentTracksContainer />
              <TopTracksContainer />
            </div>
          </section>

          <section className="main__section">
            <h3 className="main__title">Your Playlists</h3>
            <PlayListContainer />
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
    toggleDrawer: state.tracks.toggleDrawer
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
)(Profile);

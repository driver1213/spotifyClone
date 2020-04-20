import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import ArtistList from '../components/ArtistList/ArtistList'

class ArtistContainer extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.getArtistData('');

    // get id out of the url
  }

  render() {
    console.log(this.props.artist);
    return <ArtistList topArtists={this.props.topArtists} />;
  }
}

const mapStateToProps = state => {
  return {
    artist: state.artist
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getArtistData: term => dispatch(actions.loadArtistData(term))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistContainer);

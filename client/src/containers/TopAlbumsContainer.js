import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import AlbumList from './../components/AlbumsList';

class TopAlbumsContainer extends Component {
  componentDidMount() {
    this.props.getTopAlbums();
  }

  render() {
    if (this.props.topAlbums === null) return null;
    return <AlbumList topAlbums={this.props.topAlbums} />;
  }
}

const mapStateToProps = state => {
  return {
    topAlbums: state.albums.topAlbums
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTopAlbums: () => dispatch(actions.loadTopAlbumsData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopAlbumsContainer);

import * as actionTypes from '../actions/actionTypes';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

export const loadTopAlbumsSuccess = topAlbums => {
  return {
    type: actionTypes.LOAD_TOP_ALBUMS_DATA_SUCCESS,
    topAlbums: topAlbums
  };
};

export const loadTopAlbumsFailure = error => {
  return {
    type: actionTypes.LOAD_TOP_ALBUMS_DATA_FAILURE,
    error
  };
};

export const loadTopAlbumsData = () => {
  return dispatch => {
    spotifyApi.getMyTopAlbums((err, data) => {
      if (data) {
        dispatch(loadTopAlbumsSuccess(data));
      } else {
        console.warn('Error in loadTopAlbumsData:', err);
        dispatch(loadTopAlbumsFailure(err));
      }
    });
  };
};

export const loadAlbumSuccess = album => {
  return {
    type: actionTypes.LOAD_ALBUM_DATA_SUCCESS,
    album: album
  };
};

export const loadAlbumFailure = error => {
  return {
    type: actionTypes.LOAD_ALBUM_DATA_FAILURE,
    error
  };
};

export const loadAlbumData = term => {
  return dispatch => {
    spotifyApi.getAlbum(term, (err, data) => {
      if (data) {
        dispatch(loadAlbumSuccess(data));
      } else {
        console.warn('Error in loadTopAlbumsData:', err);
        dispatch(loadAlbumFailure(err));
      }
    });
  };
};

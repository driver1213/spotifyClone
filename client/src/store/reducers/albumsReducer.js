import * as actionTypes from '../actions/actionTypes';

const initialState = {
  topAlbums: [],
  error: false,
  albums: []
};

const loadAlbumsSuccess = (state, action) => {
  return {
    topAlbums: action.topAlbums
  };
};

const loadAlbumsFailure = state => {
  return {
    ...state,
    error: true
  };
};

const loadAlbumSuccess = (state, action) => {
  return {
    album: action.album
  };
};

const loadAlbumFailure = state => {
  return {
    ...state,
    error: true
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_TOP_ALBUMS_DATA_SUCCESS:
      return loadAlbumsSuccess(state, action);
    case actionTypes.LOAD_TOP_ALBUMS_DATA_FAILURE:
      return loadAlbumsFailure(state, action);
    case actionTypes.LOAD_ALBUM_DATA_SUCCESS:
      return loadAlbumSuccess(state, action);
    case actionTypes.LOAD_ALBUM_DATA_FAIL:
      return loadAlbumFailure(state, action);
    default:
      return state;
  }
};

export default reducer;

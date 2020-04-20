import * as actionTypes from '../actions/actionTypes';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

export const loadTopChartsSuccess = topCharts => {
  return {
    type: actionTypes.LOAD_TOP_CHARTS_DATA_SUCCESS,
    topCharts: topCharts
  };
};

export const loadTopChartsFailure = error => {
  return {
    type: actionTypes.LOAD_TOP_CHARTS_DATA_FAILURE,
    error
  };
};

export const loadTopChartsData = () => {
  return dispatch => {
    spotifyApi.getTopCharts((err, data) => {
      if (data) {
        dispatch(loadTopChartsSuccess(data));
      } else {
        console.warn('Error in loadTopChartsData:', err);
        dispatch(loadTopChartsFailure(err));
      }
    });
  };
};

export const loadChartSuccess = chart => {
  return {
    type: actionTypes.LOAD_CHART_DATA_SUCCESS,
    chart: chart
  };
};

export const loadChartFailure = error => {
  return {
    type: actionTypes.LOAD_CHART_DATA_FAILURE,
    error
  };
};

export const loadChartData = term => {
  return dispatch => {
    spotifyApi.getChart(term, (err, data) => {
      if (data) {
        dispatch(loadChartSuccess(data));
      } else {
        console.warn('Error in loadTopChartsData:', err);
        dispatch(loadChartFailure(err));
      }
    });
  };
};

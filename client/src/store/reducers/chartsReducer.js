import * as actionTypes from '../actions/actionTypes';

const initialState = {
  topCharts: [],
  error: false,
  artist: []
};

const loadChartsSuccess = (state, action) => {
  return {
    topCharts: action.topCharts
  };
};

const loadChartsFailure = state => {
  return {
    ...state,
    error: true
  };
};

const loadChartSuccess = (state, action) => {
  return {
    chart: action.chart
  };
};

const loadChartFailure = state => {
  return {
    ...state,
    error: true
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_TOP_CHARTS_DATA_SUCCESS:
      return loadChartsSuccess(state, action);
    case actionTypes.LOAD_TOP_CHARTS_DATA_FAILURE:
      return loadChartsFailure(state, action);
    case actionTypes.LOAD_CHART_DATA_SUCCESS:
      return loadChartSuccess(state, action);
    case actionTypes.LOAD_CHART_DATA_FAIL:
      return loadChartFailure(state, action);
    default:
      return state;
  }
};

export default reducer;

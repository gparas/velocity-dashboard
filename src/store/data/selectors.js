import getOr from 'lodash/fp/getOr';
import initialState from './initialState';
import C from './constants';

const getIsLoading = getOr(initialState[C.PROPS.IS_LOADING], [
  C.REDUCER_NAME,
  C.PROPS.IS_LOADING,
]);

const getError = getOr(initialState[C.PROPS.ERROR], [
  C.REDUCER_NAME,
  C.PROPS.ERROR,
]);

const getData = getOr(initialState[C.PROPS.DATA], [
  C.REDUCER_NAME,
  C.PROPS.DATA,
]);

export default {
  getIsLoading,
  getError,
  getData,
};

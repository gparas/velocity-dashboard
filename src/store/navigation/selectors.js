import getOr from 'lodash/fp/getOr';
import initialState from './initialState';
import C from './constants';

const getNavigationIsOpen = getOr(initialState[C.PROPS.NAVIGATION_IS_OPEN], [
  C.REDUCER_NAME,
  C.PROPS.NAVIGATION_IS_OPEN,
]);

export default {
  getNavigationIsOpen,
};

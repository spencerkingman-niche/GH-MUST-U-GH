

import {
  GET_SONGS_DATA_SUCCESS
} from './actions';

export const DEFAULT = {};

export default function data(state = DEFAULT, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case GET_SONGS_DATA_SUCCESS: {
      return {
        ...state,
        app: payload
      };
    }
    default:
      return state;
  }
}

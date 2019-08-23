

import { createAction } from 'redux-actions';

export const GET_SONGS_DATA = 'app/GET_SONGS_DATA';
export const GET_SONGS_DATA_SUCCESS = 'app/GET_SONGS_DATA_SUCCESS';

export const fetchDataActionCreators = {
  getSongsData: createAction(GET_SONGS_DATA),
  getSongsDataSuccess: createAction(GET_SONGS_DATA_SUCCESS),
};

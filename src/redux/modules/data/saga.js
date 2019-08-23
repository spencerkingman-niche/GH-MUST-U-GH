import { App_Service } from 'src/services';
import {
  take,
  put,
  call,
  fork,
  all
} from 'redux-saga/effects';
import {
  GET_SONGS_DATA,
  fetchDataActionCreators
} from './actions';
import Config from 'react-native-config';

export function* asyncGetSongsData() {

  // eslint-disable-next-line
  // const url = `https://graph.facebook.com/v2.11/me?access_token=${facebookToken}&fields=id,name,email,picture{url}`;
  // eslint-disable-next-line max-len
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${Config.SPENKING_SONGS_PLAYLIST_ID}&maxResults=20&key=${Config.YOU_TUBE_API_KEY}`;

  try {
    const response = yield call(App_Service, { url, method: 'GET' });

    if (response.result === 'ok') {
      yield put(fetchDataActionCreators.getSongsDataSuccess(response.data));
    }
  } catch (e) {
    console.log(e);
  }
}

    // const responseJSON = await response.json();
    // this.setState({
    //   data: Array.from(responseJSON.items),

export function* watchGetSongsData() {
  while (true) {
    const action = yield take(GET_SONGS_DATA);
    yield* asyncGetSongsData(action);
  }
}

export default function* () {
  yield all([
    fork(watchGetSongsData),
  ]);
}

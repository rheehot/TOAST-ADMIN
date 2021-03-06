import { all, fork } from 'redux-saga/effects';
import axios from 'axios';
import book from './book';
import user from './user';
import part from './part';
import question from './question';

axios.defaults.baseURL = 'http://52.198.52.213';

export default function* rootSaga() {
  yield all([fork(user), fork(book), fork(part), fork(question)]);
}

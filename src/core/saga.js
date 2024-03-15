import { all } from 'redux-saga/effects';
import { personalHomepageSaga } from '../features/PersonalHomepage/PersonalHomepageSaga';

export default function* saga() {
    yield all([
        personalHomepageSaga(),
    ]);
}
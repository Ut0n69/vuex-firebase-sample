import firebase from 'firebase/app';
import 'firebase/firestore';
import config from './config';

export default firebase.initializeApp(config).firestore();

const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
};
firestore.settings(settings);

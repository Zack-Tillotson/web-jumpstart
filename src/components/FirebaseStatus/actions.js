import actions from '../../actions';
import firebase from '../../firebase';

const dispatcher = (dispatch) => {

  function dispatchData(data) {
    console.log('dispatch data', data);
    dispatch({type: actions.firebase, ...data});
  }

  return {

    syncFirebase() {
      firebase.syncAuth(dispatchData);
      firebase.syncData(dispatchData);
    },

    dispatch: {
      requestLogin(service) {
        dispatch(() => {
          firebase.requestAuth(service, (error) => {console.log("Firebase auth error!", error)});
        });
      },
      requestLogout() {
        dispatch(() => {
          firebase.requestUnauth();
        });
      }
    }
  }
}

export default dispatcher;
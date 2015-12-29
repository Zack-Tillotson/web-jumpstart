import utils from './utils';

export default {

  requestAuth(service, onError) {
    const ref = utils.connect();
    ref.authWithOAuthRedirect(service, onError);
  },

  requestUnauth(service, onError) {
    const ref = utils.connect();
    ref.unauth();
  },

  syncAuth(onAuth) {
    const ref = utils.connect();
    ref.onAuth((auth) => {
      onAuth({path: 'auth', error: false, data: auth});
    });
  },

  syncData(onData, path = '/') {
    const ref = utils.connect(path);
    ref.on(
      'value', 
      snapshot => {
        if(snapshot.exists()) {
          onData({path, error: false, data: snapshot.val()});
        } else {
          onData({path, error: true, data: {}});
        }
      }, 
      error => {
        console.log("Firebase error", error);
        onData({path, error: true, data: null, errorData: error});
      }
    );

    return ref;
  }
}
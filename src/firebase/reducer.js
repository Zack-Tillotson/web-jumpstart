import actions from '../actions';

function getInitialState() {
  return {
    isLoggedIn: false,
    data: ''
  }
}

export default (state = getInitialState(), action) => {
  switch(action.type) {
    case actions.firebase:
      if(!action.error) {
        if(action.path == 'auth') {
          state.isLoggedIn = !!action.data;
        }
        if(action.path == '/') {
          state.data = action.data;
        }
      }
      break;
  }
  return {...state};
}
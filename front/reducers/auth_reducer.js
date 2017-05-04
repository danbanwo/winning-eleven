const _defaultState = {isLoggedIn: false, error: {hasError: false, message: ''}};

const authReducer = (state = _defaultState, action) => {
	switch(action.type){
		case "USER_LOGIN" :
			return {...state, ...action.data}
			break;
		case "USER_SIGNUP":
			return {...state, ...action.data}
			break;
		case "USER_LOGOUT":
			return action
			break;
		default:
			return state;
	}
}


export default authReducer;

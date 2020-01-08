
const AuthReducer = (state, action) => {

    switch(state){
        case 'Login':
            return {

            }

        default:
            return {
                ...state
            };    
    }
}

export default AuthReducer;
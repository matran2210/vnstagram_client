const initialState = {
    isLoggedIn: false,
    accessToken: null
}
//state ở đây là trạng thái của redux khác với state của react
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_LOGIN_SUCCESS':
            return {
                ...state,
                isLoggedIn:true,
                accessToken: action.accessToken
            }
        default:
            //phải đặt mặc định chứ k đc có mỗi break
            return state;
    }
}
export default authReducer;
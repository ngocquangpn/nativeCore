import Framework from "../framework/Framework";

import store from "../view/store/store";

import ApiUser from "../data/api/ApiUser";

/**
 *
 */
class UserService extends Framework.CoreService{
    static className = 'UserService';

    /**
     *
     * @param username
     * @param password
     * @returns {Promise<unknown>}
     */
    loginBase(username, password) {
        return ApiUser.login(username, password);
    }

    /**
     *
     */
    isLogin() {
        try {
            return !!store.getState().core.user.authToken;
        } catch (e) {
            return false;
        }
    }

}

export default Framework.ServiceFactory.get(UserService);


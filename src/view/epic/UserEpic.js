import UserConstant from '../constant/UserConstant';
import UserAction from '../action/UserAction';
import {ofType} from 'redux-observable';
import {mergeMap} from 'rxjs/operators';

import UserService from '../../service/UserService';
import {fire} from '../../event-bus';

/**
 *
 * @param action$
 * @returns {*}
 * @constructor
 */
function UserLoginEpic(action$) {
    return action$.pipe(
        ofType(UserConstant.USER_LOGIN),
        mergeMap(async action => {
            const {username, password} = action.user;
            try {
                const user = await UserService.loginBase(username, password);
                fire(UserConstant.USER_LOGIN_RESULT, user);
                return UserAction.userLoginResult(user);
            } catch (e) {
                fire(UserConstant.USER_LOGIN_ERROR, e);
                return UserAction.userLoginError(e);
            }
        }),
    );
}

UserLoginEpic.className = 'UserLoginEpic';

export default UserLoginEpic;

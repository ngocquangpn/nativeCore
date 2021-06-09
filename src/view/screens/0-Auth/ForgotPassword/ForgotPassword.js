import React     from 'react';
import Framework from '../../../../framework/Framework';

import {View} from 'react-native';

/**
 *
 */
class ForgotPassword extends Framework.CoreComponent {
    static className = 'ForgotPasswordComponent';

    template() {
        return (
            <View/>
        );
    }
}

/**
 *
 */
class ForgotPasswordContainer extends Framework.CoreContainer {
    static className = 'ForgotPasswordContainer';

    static mapState(state) {
        return {};
    }

    static mapDispatch(dispatch) {
        return {
            actions: {},
        };
    }
}

export default Framework.ContainerFactory.get(ForgotPasswordContainer).withRouter(
    Framework.ComponentFactory.get(ForgotPassword),
);

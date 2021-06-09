import React from 'react';
import Framework from '../../../framework/Framework';

import {View} from 'react-native';

/**
 *
 */
class OTP extends Framework.CoreComponent {
    static className = 'OTPComponent';

    template() {
        return (
            <View/>
        );
    }
}

/**
 *
 */
class OTPContainer extends Framework.CoreContainer {
    static className = 'OTPContainer';

    static mapState(state) {
        return {};
    }

    static mapDispatch(dispatch) {
        return {
            actions: {},
        };
    }
}

export default Framework.ContainerFactory.get(OTPContainer).withRouter(
    Framework.ComponentFactory.get(OTP),
);

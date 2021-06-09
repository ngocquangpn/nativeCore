import React     from 'react';
import Framework from '../../../../framework/Framework';

import {View} from 'react-native';

/**
 *
 */
class Register extends Framework.CoreComponent {
    static className = 'RegisterComponent';

    template() {
        return (
            <View/>
        );
    }
}

/**
 *
 */
class RegisterContainer extends Framework.CoreContainer {
    static className = 'RegisterContainer';

    static mapState(state) {
        return {};
    }

    static mapDispatch(dispatch) {
        return {
            actions: {},
        };
    }
}

export default Framework.ContainerFactory.get(RegisterContainer).withRouter(
    Framework.ComponentFactory.get(Register),
);

import React from 'react';
import Framework from '../../../framework/Framework';

import {View} from 'react-native';

/**
 *
 */
class Profile extends Framework.CoreComponent {
    static className = 'ProfileComponent';

    template() {
        return (
            <View/>
        );
    }
}

/**
 *
 */
class ProfileContainer extends Framework.CoreContainer {
    static className = 'ProfileContainer';

    static mapState(state) {
        return {};
    }

    static mapDispatch(dispatch) {
        return {
            actions: {},
        };
    }
}

export default Framework.ContainerFactory.get(ProfileContainer).withRouter(
    Framework.ComponentFactory.get(Profile),
);

import React     from 'react';
import Framework from '../../../../framework/Framework';
import {View}    from 'react-native';

/**
 *
 */
class Home extends Framework.CoreComponent {
    static className = 'HomeComponent';

    template() {
        return (
            <View/>
        );
    }
}

/**
 *
 */
class HomeContainer extends Framework.CoreContainer {
    static className = 'HomeContainer';

    static mapState(state) {
        return {};
    }

    static mapDispatch(dispatch) {
        return {
            actions: {}
        };
    }
}

export default Framework.ContainerFactory.get(HomeContainer).withRouter(
    Framework.ComponentFactory.get(Home)
);

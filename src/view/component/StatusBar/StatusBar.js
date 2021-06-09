import React from 'react';
import Framework from '../../../framework/Framework';

import {StatusBar as RNStatusBar} from 'react-native';

/**
 *
 */
class StatusBar extends Framework.CoreComponent {
    static className = 'StatusBarComponent';

    template() {
        const {color, isVisible} = this.props.statusBar;
        return (
            <RNStatusBar
                backgroundColor={color}
                hidden={!isVisible}
                animated
                showHideTransition='slide'
            />
        );
    }
}

/**
 *
 */
class StatusBarContainer extends Framework.CoreContainer {
    static className = 'StatusBarContainer';

    static mapState(state) {
        return {
            statusBar: state.core.statusBar,
        };
    }
}

export default Framework.ContainerFactory.get(StatusBarContainer).withRouter(
    Framework.ComponentFactory.get(StatusBar),
);

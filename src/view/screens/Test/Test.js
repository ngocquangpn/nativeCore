import Framework from '../../../framework/Framework';
import {Text, View} from 'react-native';
import React from 'react';
import {Button as ButtonElement, Icon} from 'react-native-elements';

class Test extends Framework.CoreComponent {
    static className = 'TestComponent';

    template() {
        return (
            <View>
                <Text>{this.I18n.t('cc')}</Text>
                <ButtonElement
                    title='test 2'
                />
                <Icon name='trash' type='font-awesome-5'/>
            </View>
        );
    }
}

class TestContainer extends Framework.CoreContainer {
    static className = 'TestContainer';

    static mapState(state) {
        return {};
    }

    static mapDispatch(dispatch) {
        return {
            actions: {},
        };
    }
}

export default Framework.ContainerFactory.get(TestContainer).withRouter(
    Framework.ComponentFactory.get(Test),
);

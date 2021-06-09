import React from 'react';
import I18n from 'react-native-i18n';

export default class CoreComponent extends React.Component {
    beforeHTML;

    afterHTML;

    I18n = I18n;

    template() {
        return null;
    }

    render() {
        return (
            <>
                {this.beforeHTML}
                {this.template()}
                {this.afterHTML}
            </>
        );
    }
}

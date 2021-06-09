import {connect} from 'react-redux';

export default class CoreContainer {
    static className = 'CoreContainer';

    component;

    constructor(component) {
        this.component = component;
    }

    static mapState(state) {
        return {};
    }

    static mapDispatch(dispatch) {
        return {};
    }

    static mapStateToProps() {
        return (state) => {
            return {
                ...this.mapState(state),
            };
        };
    }

    static mapDispatchToProps() {
        return (dispatch) => {
            return {
                ...this.mapDispatch(dispatch),
            };
        };
    }

    static getConnect(
        component,
        mapState = this.mapStateToProps(),
        mapDispatch = this.mapDispatchToProps(),
    ) {
        return connect(mapState, mapDispatch)(component);
    }

    static withRouter(
        component,
        mapState = this.mapStateToProps(),
        mapDispatch = this.mapDispatchToProps(),
    ) {
        return this.getConnect(
            component,
            mapState,
            mapDispatch,
        );
    }
}

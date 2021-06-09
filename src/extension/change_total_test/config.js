import React from 'react';
import TestComponentPlugin from "./plugin/view/screens/Test/TestComponentPlugin";

class Config {
    plugin = {
        component: {
            TestComponent: TestComponentPlugin
        }
    }

    layout = {
        test: {
            after_total: [function afterTotal_1(component) {
                return (
                    <div key='afterTotal_1'>
                        Layout test 1 - Total: {component.calcTotal()}
                    </div>
                );
            }]
        }
    }
}

export default (new Config());

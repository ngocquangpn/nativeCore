import React from 'react';
import layout from "../../../../../../framework/Layout";

export default {
    template: {
        template_test: {
            sortOrder: 100,
            around: function () {
                return (
                    <div>
                        Plugin test - Total: {this.calcTotal()}
                        {layout('test.after_total', this)}
                    </div>
                )
            }
        }
    }
}

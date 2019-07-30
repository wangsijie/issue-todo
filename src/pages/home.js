import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

@observer
class Home extends Component {
    static contextTypes = {
        store: PropTypes.object,
    };
    state = {
        issues: null,
    }
    render() {
        const { issues } = this.context.store;
        return <div className="app-home">
            <ul>
                {
                    issues && issues.map(item => <li key={item.id}>
                        {item.title}
                    </li>)
                }
            </ul>
        </div>
    }
}

export default Home;

import React, {Component} from 'react';
import 'react-notifications/lib/notifications.css';
import {withRouter} from 'react-router-dom';
import ThemeProvider from '../../../design'


class MainLayout extends Component {
    render() {
        return (
            <ThemeProvider>
                <div className="k-rtl">
                    {this.props.children}
                </div>
            </ThemeProvider>
        )
    }
}

export default withRouter(MainLayout);

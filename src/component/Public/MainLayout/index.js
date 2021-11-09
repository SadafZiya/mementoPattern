import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import ThemeProvider from '../../../design'


class MainLayout extends Component {
    render() {
        return (
            <ThemeProvider>
                <div >
                    {this.props.children}
                </div>
            </ThemeProvider>
        )
    }
}

export default withRouter(MainLayout);

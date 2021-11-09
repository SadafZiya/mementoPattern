import React, {Component} from 'react';

class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonName: '',
            disable: false,
            id: 0,
            onClick: () => {
            }
        };
    }

    load = () => {
        let {buttonName, id, disable, onClick} = this.state
        return (
            <button id={id} disabled={disable} onClick={onClick}>{buttonName}</button>
        );
    }

    render() {
        return false
    }
}

export default Buttons
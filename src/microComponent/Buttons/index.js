import React, {Component} from 'react';

class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonName: '',
            disable: false,
            onClick: ()=>{}
        };
    }

    load = () => {
        let {buttonName, disable, onClick} = this.state
        return (
            <button disabled={disable} onClick={onClick}>{buttonName}</button>
        );
    }

    render() {
        return false
    }
}

export default Buttons
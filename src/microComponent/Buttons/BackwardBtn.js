import React from 'react';
import Buttons from "./index";

class BackwardBtn extends Buttons {
    constructor(props) {
        super(props);
        this.state.buttonName = 'undo'
        this.state.disable = false
        this.state.onClick = this.backwardTextEditor
    }

    backwardTextEditor = () => {
        alert('backward text in editor')
    }

    render() {
        return this.load();
    }
}

export default BackwardBtn
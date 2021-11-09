import Buttons from "./index";

class ForwardBtn extends Buttons {
    constructor(props) {
        super(props);
        this.state.buttonName = 'redo'
        this.state.disable = false
        this.state.onClick = this.forwardTextEditor
    }

    forwardTextEditor = () => {
        alert('forward text in editor')
    }

    render() {
        return this.load();
    }
}

export default ForwardBtn
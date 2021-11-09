import Buttons from "./index";

class BackwardBtn extends Buttons {
    constructor(props) {
        super(props);
        this.state.buttonName = 'Undo'
        this.state.disable = false
        this.state.id = 'backwardBtn'
        this.state.onClick = () => {}
    }

    render() {
        return this.load();
    }
}

export default BackwardBtn
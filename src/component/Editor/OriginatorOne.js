import ShowEditor from "./ShowEditor";

//originator
class OriginatorOne extends ShowEditor {
    constructor(props) {
        super(props);
        this.memento.setContentName('firstEditor')
    }

    render() {
        return this.load()
    }
}

export default OriginatorOne
import ShowEditor from "./ShowEditor";

//originator
class OriginatorTwo extends ShowEditor {
    constructor(props) {
        super(props);
        this.memento.setContentName('secondEditor')
    }

    render() {
        return this.load()
    }
}

export default OriginatorTwo
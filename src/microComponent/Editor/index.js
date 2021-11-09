import React, {Component} from 'react';
import CareTaker from "../../component/Editor/CareTaker";
import Memento from "../../component/Editor/Memento";


class Editor extends Component {
    memento = new Memento()
    careTaker = new CareTaker()

    constructor(props) {
        super(props);
        this.state = {
            editContent: this.memento.getContent(this.props.editorName),
            isBig: false
        };
    }

    componentDidMount() {

        document.getElementById('backwardBtn').addEventListener("click", () => {
            let {editorName} = this.props
            let editContent = this.careTaker.pop(editorName)
            this.memento.setContent({name: editorName, content: editContent})
            this.setState({editContent})

        })

    }

    setContentEditorToStateManager = (content) => {
        let {editorName} = this.props
        if (!editorName) return false
        this.memento.setContent({name: editorName, content})
        this.careTaker.push({
            name: editorName,
            content: content
        })
        let editContent = this.memento.getContent(editorName)
        this.setState({editContent})
    }

    render() {
        return (
            <div>
                <textarea  value={this.state.editContent}
                          onChange={(e) => this.setContentEditorToStateManager(e.target.value)}/>
            </div>
        );
    }
}

export default Editor
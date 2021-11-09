import React, {Component} from 'react';
import Editor from '../../microComponent/Editor'
import BackwardBtn from '../../microComponent/Buttons/BackwardBtn'
import Memento from "./Memento";

class ShowEditor extends Component {
    memento = new Memento()

    constructor(props) {
        super(props);
    }

    load() {
        let editorName = this.memento.getContentName()
        console.log(editorName)
        return (
            <div>
                <h1 style={{textAlign: 'center'}}>{editorName}</h1>
                {/*<BackwardBtn stateName={editorName}/>*/}
                <BackwardBtn editorName={editorName}/>
                <br/>
                {/*<Editor stateName={editorName}/>*/}
                <Editor editorName={editorName}/>
            </div>
        );
    }

    render() {
        return false
    }
}

export default ShowEditor
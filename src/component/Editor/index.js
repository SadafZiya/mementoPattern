import React, {Component} from 'react';
import Editor from '../../microComponent/Editor'
import BackwardBtn from '../../microComponent/Buttons/BackwardBtn'
import ForwardBtn from '../../microComponent/Buttons/ForwardBtn'

class ShowEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorContent: ''
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <BackwardBtn/>
                <ForwardBtn/>
                <Editor editorContent ={this.state.editorContent}/>

            </div>
        );
    }
}

export default ShowEditor
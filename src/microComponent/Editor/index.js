import React, {Component} from 'react';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
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
        let {editorName} = this.props
        if (document.getElementsByClassName('rdw-editor-main')[0])
            document.getElementsByClassName('rdw-editor-main')[0].style.maxWidth = document.getElementsByClassName('rdw-editor-wrapper')[0].clientWidth + 'px'
        DecoupledEditor
            .create(document.querySelector('.document-editor__editable'), {
                removePlugins: ["MediaEmbed"],
                language: 'fa'
            })
            .then(editor => {
                window.editor = editor;
                // editor.setData(this.memento.getContent(editorName))
                editor.model.document.on('change:data', () => {
                    console.log('here')
                    let richText = editor.getData();
                    this.setContentEditorToStateManager(richText)
                })
                document.getElementById("backwardBtn").addEventListener("click", () => {
                    let content = this.careTaker.pop(editorName)
                    this.memento.setContent({name: editorName, content})
                    console.log('111', content)
                    editor.setData(content)
                })
            })
            .catch(err => {
                console.error(err);
            });

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
            <div className="document-editor">
                <div className="document-editor__editable-container">
                    <div className="document-editor__editable">
                        <div id={'main-content'}>
                            <div contentEditable='true'
                                 dangerouslySetInnerHTML={{__html: this.state.editContent}}/>
                            {/*dangerouslySetInnerHTML={{__html: this.memento.getContent(this.props.editorName)}}/>*/}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Editor
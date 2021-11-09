import React, {Component} from 'react';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';


class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editContent: '',
            isBig: false
        };
    }

    componentDidMount() {
        if (document.getElementsByClassName('rdw-editor-main')[0])
            document.getElementsByClassName('rdw-editor-main')[0].style.maxWidth = document.getElementsByClassName('rdw-editor-wrapper')[0].clientWidth + 'px'

        this.setState({editContent: this.props.editorContent})
        DecoupledEditor
            .create(document.querySelector('.document-editor__editable'), {
                removePlugins: ["MediaEmbed"],
                language: 'fa'
            })
            .then(editor => {
                // const toolbarContainer = document.querySelector('.document-editor__toolbar');
                // toolbarContainer.appendChild(editor.ui.view.toolbar.element);
                window.editor = editor;
                editor.model.document.on('change:data', (e) => {
                    let richText = editor.getData();
                    this.setState({editContent: richText})

                })
            })
            .catch(err => {
                console.error(err);
            });

    }

    render() {
        return (
            <div className="document-editor">
                {/*<div className="document-editor__toolbar"></div>*/}
                <div className="document-editor__editable-container">
                    <div className="document-editor__editable">
                        <div id={'main-content'}>
                            <div contentEditable='true'
                                 dangerouslySetInnerHTML={{__html: this.state.editContent}}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Editor
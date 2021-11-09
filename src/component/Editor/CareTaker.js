export default class CareTaker {
    push = (states) => {
        let {name, content} = states
        let list = this.#getEditorInfo(name)
        list.push(content)
        this.#setEditorInfo({name, content: list})
    }
    pop = (name) => {
        let list = this.#getEditorInfo(name)
        list.pop()
        this.#setEditorInfo({name, content: list})
        return list.at(-1) || ''
    }
    #getEditorInfo = (editorName) => {
        return JSON.parse(localStorage.getItem(editorName), null) || []
    }
    #setEditorInfo = ({name, content}) => {
        localStorage.setItem(name, JSON.stringify(content))
    }
}
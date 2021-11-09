export default class Memento {
    #name = ''
    getContentName = () => {
        return this.#name
    }
    setContentName = (name) => {
        this.#name = name
        localStorage.setItem(name + 'Content', JSON.stringify(''))
    }
    setContent = ({name, content}) => {
        localStorage.setItem(name + 'Content', JSON.stringify(content))

    }
    getContent = (name) => {
        return JSON.parse(localStorage.getItem(name + 'Content'), null)
    }
}
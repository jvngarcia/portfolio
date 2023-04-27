import type { TextDecoratorColor } from "~/interfaces/Decorators";


const TextDecorator: React.FC<TextDecoratorColor> = ({ from, to, children }) => {
    return(
        <span className={ `bg-gradient-to-r ${ from } ${ to } rounded-lg px-[0.5rem] py-0 my-0 mx-[0.25rem] rounded-bl-sm rounded-tr-sm` }>
            { children }
        </span>
    )
}

export default TextDecorator;
import type { CategoriesType } from "~/interfaces/Decorators";


const CategoriesDecorator: React.FC<CategoriesType> = ({ from, to, children }) => {
    return(
        <div className={ `bg-gradient-to-r ${ from } ${ to } rounded-lg px-3 text-sm` }>
            { children }
        </div>
    )
}

export default CategoriesDecorator;
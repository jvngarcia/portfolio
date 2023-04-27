import Link from "next/link";
import type { CategoriesType } from "~/interfaces/Decorators";


const CategoriesDecorator: React.FC<CategoriesType> = ({ from, to, children, slug }) => {
    return(
        <Link href={slug} className={ `bg-gradient-to-r ${ from } ${ to } rounded-lg px-3 text-sm` }>
            { children }
        </Link>
    )
}

export default CategoriesDecorator;
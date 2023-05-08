

import Image from "next/image";
import Link from "next/link";
// import CategoriesDecorator from "./CategoriesDecorator";
import type { PostArticle } from "~/interfaces/Post";


const Article: React.FC<PostArticle> = ({ title, extract, slug, image }) => {
    return (
        <article className=" hover:bg-slate-100 transition-all ease-linear rounded-md h-full">
            <Link href={ slug }>
                <Image src={ image } width={1200} height={264} alt={ title } className="rounded-xl" priority />
            </Link>
            <div className="mt-3 mx-3 pb-6">
                <Link href={ slug }>
                    <h4 className="truncate text-xl font-semibold">{ title }</h4>
                </Link>
                <p className="text-sm mt-2">{ extract }</p>
                {/* <p className="text-sm mt-2">{ createdAt.toDateString() }</p> */}
                {/* <div className="grid grid-flow-col auto-cols-max mt-3 gap-1">
                    <CategoriesDecorator from="from-slate-100" to="to-slate-300" slug="#"> Nextjs </CategoriesDecorator>
                    <CategoriesDecorator from="from-purple-300" to="to-pink-300" slug="#"> Javascript </CategoriesDecorator>
                </div> */}
            </div>
        </article>
    )
}

export default Article;
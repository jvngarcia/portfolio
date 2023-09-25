

import Image from "next/image";
import CategoriesDecorator from "./CategoriesDecorator";
// import type { PostArticle } from "~/interfaces/Post";


const Article = ({ title, extract, image, languages }: { title: string, extract: string | null, image: string, languages: string[] | null }) => {

    const colors_from = [
        "from-slate-100",
        "from-purple-300",
        "from-amber-200",
    ];

    const colors_to = [
        "to-slate-300",
        "to-pink-300",
        "to-amber-300",
    ];

    return (
        <article className=" hover:bg-slate-100 transition-all ease-linear rounded-md h-full">
            <div>
                <Image src={image} width={1200} height={264} alt={title} className="rounded-xl" priority />
            </div>
            <div className="mt-3 mx-3 pb-6">
                <div>
                    <h4 className="truncate text-xl font-semibold">{title}</h4>
                </div>
                <p className="text-sm mt-2">{extract}</p>
                <div className="grid grid-flow-col auto-cols-max mt-3 gap-1">
                    {
                        languages && languages.map((language, index) => (
                            <CategoriesDecorator key={index} from={colors_from[index] ?? 'from-slate-100'} to={colors_to[index] ?? 'from-slate-300'}> {language} </CategoriesDecorator>
                        ))
                    }
                </div>
            </div>
        </article>
    )
}

export default Article;
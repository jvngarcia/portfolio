import type { Portafolio, Post, PostArticle } from "./Post";



export type IndexPage = {
    posts: PostArticle[],
    portfolio: Portafolio[],
}


export type ShowPostPage = {
    post: Post,
    content: string
}

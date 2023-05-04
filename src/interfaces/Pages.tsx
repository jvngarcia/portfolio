import type { Post, PostArticle } from "./Post";



export type IndexPage = {
    posts: PostArticle[],
}


export type ShowPostPage = {
    post: Post,
}



export type Post = {
    title: string,
    content: string | null,
    image: string,
}

export type PostArticle = {
    title: string,
    extract: string | null,
    image: string,
    languages: string[],
}
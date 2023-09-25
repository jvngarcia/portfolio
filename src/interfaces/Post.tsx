

export type Post = {
    title: string,
    content: string | null,
    extract: string | null,
    keywords: string | null,
    image: string,
}

export type Portafolio = {
    title: string,
    extract: string | null,
    image: string,
    languages: string[],
}

export type PostArticle = {
    title: string,
    extract: string | null,
    image: string,
    content: string | null,
    slug: string,
}
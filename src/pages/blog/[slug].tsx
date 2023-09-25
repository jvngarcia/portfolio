import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "~/components/Header";
// import type { ShowPostPage } from "~/interfaces/Pages";
import type { Post } from "~/interfaces/Post";
import { prisma } from "~/server/db";
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote"
import Script from "next/script";


const Blog = ({ post, content }: InferGetStaticPropsType<typeof getServerSideProps>) => {

    return (
        <>
            <Head>
                <title>{post?.title} | JVN García</title>
                <meta name="description" content={post?.extract ?? 'inteligencia artificial'} />
                <meta name="keywords" content={post?.keywords ?? 'inteligencia artificial'} />
                <link rel="icon" href="/images/logo.png" />
            </Head>
            <main className="container">
                <Header title="Ángel García" cover={post?.image} image="/images/profile.png" />

                <article id="blog__content" className="container mt-12">
                    <h1 className="text-3xl font-semibold">{post?.title}</h1>
                    <div className="mt-4">
                        <MDXRemote {...content} />
                    </div>
                </article>

                <section className="container mt-12">
                    <div className="w-full bg-slate-100 inline-flex px-6 py-6 gap-2 items-center border">
                        <span className="text-xl">💡</span>
                        <div>Este sitio es de <Link href="https://github.com/jvngarcia/portfolio" target="_blank" className="hover:border-red-300 transition-all border-b">código abierto y fácil de usar</Link>.</div>
                    </div>
                </section>

                <section className="container mt-8">
                    <div className="grid md:grid-cols-3 grid-cols-2 justify-center m-auto items-center">
                        <div></div>
                        <Link href="/" className="inline-flex items-center hover:bg-slate-100 transition-all text-center justify-center py-4">
                            <span className="text-xl mr-2">📘</span>
                            <span className="border-b font-semibold">Ir al inicio</span>
                        </Link>
                        <div></div>
                    </div>
                </section>

                <footer className="container my-8 py-6 text-center">
                    <p>Desarrollado con <span className="text-red-500">❤️</span> por JVN García</p>
                </footer>
                <div className="container">
                    <Script src="https://www.googletagmanager.com/gtag/js?id=G-ZZ4XWXNG9E" />
                    <Script id="google-analytics">
                        {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            
                            gtag('config', 'G-ZZ4XWXNG9E');
                        `}
                    </Script>
                </div>
            </main>
        </>
    );
};

export default Blog;


// Create server side prop of the blog
export const getServerSideProps = async (context: GetStaticPropsContext<{ slug?: string }>) => {
    const { slug } = context.params ?? {};

    const allPosts: Post[] = await prisma.post.findMany({
        where: {
            slug: slug ?? '',
        },
        orderBy: {
            createdAt: 'desc',
        },
        select: {
            title: true,
            content: true,
            image: true,
            extract: true,
            keywords: true,
        }
    });

    const content = await serialize(allPosts[0]?.content ?? '', { parseFrontmatter: true });

    return {
        props: {
            post: allPosts[0],
            content: content
        },
    };
};

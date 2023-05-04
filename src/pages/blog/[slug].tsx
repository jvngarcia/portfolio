import type { GetServerSideProps, NextPage } from "next";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import Link from "next/link";
import Header from "~/components/Header";
import type { ShowPostPage } from "~/interfaces/Pages";
import type { Post } from "~/interfaces/Post";
import { prisma } from "~/server/db";
// import { api } from "~/utils/api";

const Blog: NextPage<ShowPostPage> = ({ post }) => {

    console.log(post);
    

    return (
        <>
            <Head>
                <title>JVN García | Desarrollador de software</title>
                <meta name="description" content="Desarrollador de software con Nextjs, Laravel y Python" />
                <link rel="icon" href="/images/logo.png" />
            </Head>
            <main className="container">
                <Header title="Ángel García" cover="/images/cover.jpg" image="/images/profile.png" />

                <section className="container mt-12">
                <article className="prose">
                                <h1>{ post.title }</h1>
                                <MDXRemote compiledSource={post.content ?? ''} />
                            </article>
                </section>

                <section className="container mt-12">
                    <div className="w-full bg-slate-100 inline-flex px-6 py-6 gap-2 items-center border">
                        <span className="text-xl">💡</span>
                        <div>Este sitio es de <Link href="https://github.com/jvngarcia/portfolio" target="_blank" className="hover:border-red-300 transition-all border-b">código abierto y fácil de usar</Link>.</div>
                    </div>
                </section>

                <footer className="container my-8 py-6 text-center">
                    <p>Desarrollado con <span className="text-red-500">❤️</span> por JVN García</p>
                </footer>
            </main>
        </>
    );
};

export default Blog;


// Create server side prop of the blog
export const getServerSideProps: GetServerSideProps = async (context) => {
    const slug: string = context.params?.slug as string;

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
        }
    });

    return {
        props: {
            post: allPosts[0] ?? '',
        },
    };
};

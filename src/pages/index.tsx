import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Article from "~/components/Article";
import Header from "~/components/Header";
import TextDecorator from "~/components/TextDecorator";
import type { IndexPage } from "~/interfaces/Pages";
import type { PostArticle } from "~/interfaces/Post";
import { prisma } from "~/server/db";
// import { api } from "~/utils/api";

const Home: NextPage<IndexPage> = ({ posts }) => {

  console.log(posts);


  return (
    <>
      <Head>
        <title>JVN García | Desarrollador de software</title>
        <meta name="description" content="Desarrollador de software con Nextjs, Laravel y Python" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <main className="container">
        <Header title="Ángel García" cover="/images/cover.jpg" image="/images/profile.png" />
        <section className="container mt-8 ">
          <p className="text-lg mb-3">
            Hola Mundo 👋
          </p>
          <p className="text-lg mb-3">
            Soy <TextDecorator from="from-amber-200" to="to-amber-300">Ángel García</TextDecorator>, un desarrollador de software que ama el código abierto y la IA.
          </p>
          <p className="text-lg">
            Puedes encontrarme en <TextDecorator from="from-purple-300" to="to-pink-300">Instagram</TextDecorator> y <TextDecorator from="from-slate-100" to="to-slate-300">GitHub</TextDecorator>; consulta mi <TextDecorator from="from-amber-200" to="to-amber-300">biografía</TextDecorator> para obtener más información.
          </p>
        </section>

        <section className="container mt-12">
          <h2 className="text-2xl font-semibold mb-4">Blog</h2>
          <hr />
          <div className="mt-4 grid md:grid-cols-2 grid-cols-1 gap-10">
            {
              posts.map((post, index) => (
                <Article key={index} title={post.title} extract={post.extract} slug={`/blog/${post.slug}`} image="/images/cover.jpg" />
              ))
            }
            
          </div>
        </section>

        <section className="container mt-12">
          <div className="w-full bg-slate-100 inline-flex px-6 py-6 gap-2 items-center border">
            <span className="text-xl">💡</span>
            <div>Este sitio es de <Link href="https://github.com/jvngarcia/portfolio" target="_blank" className="hover:border-red-300 transition-all border-b">código abierto y fácil de usar</Link>.</div>
          </div>
        </section>

        {/* <section className="container mt-8">
          <div className="grid md:grid-cols-3 grid-cols-2 justify-center m-auto">
            <Link href="/" className="inline-flex items-center hover:bg-slate-100 transition-all text-center justify-center py-4">
              <span className="text-xl mr-2">👋</span>
              <span className="border-b font-semibold">Sobre mi</span>
            </Link>

            <Link href="/" className="inline-flex items-center hover:bg-slate-100 transition-all text-center justify-center py-4">
              <span className="text-xl mr-2">📘</span>
              <span className="border-b font-semibold">Blog</span>
            </Link>

            <Link href="/" className="inline-flex items-center hover:bg-slate-100 transition-all text-center justify-center py-4">
              <span className="text-xl mr-2">✉️</span>
              <span className="border-b font-semibold">Contacto</span>
            </Link>
          </div>
        </section> */}

        <footer className="container my-8 py-6 text-center">
          <p>Desarrollado con <span className="text-red-500">❤️</span> por JVN García</p>
        </footer>
      </main>
    </>
  );
};

export default Home;


export const getServerSideProps = async () => {

  const allPosts: PostArticle[] = await prisma.post.findMany({
    where: {
      published: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
    select: {
      title: true,
      extract: true,
      slug: true,
      image: true,
    }
  });

  return {
    props: {
      posts: allPosts,
    },
  };
}
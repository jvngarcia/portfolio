import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import CategoriesDecorator from "~/components/CategoriesDecorator";
import Header from "~/components/Header";
import TextDecorator from "~/components/TextDecorator";
import type{ IndexPage } from "~/interfaces/Pages";
import { api } from "~/utils/api";

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
            <article className=" hover:bg-slate-200 transition-all ease-linear rounded-md h-full">
              <Link href="/">
                <Image src="/images/cover.jpg" width={1200} height={264} alt="cover JVN García" className="rounded-xl" priority />
              </Link>
              <div className="mt-3 mx-3 pb-6">
                <Link href="/">
                  <h4 className="truncate text-xl font-semibold">Title post</h4>
                </Link>
                <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                <p className="text-sm mt-2">Feb, 2023</p>
                <div className="grid grid-flow-col auto-cols-max mt-3 gap-1">
                  <CategoriesDecorator from="from-slate-100" to="to-slate-300" slug="#"> Nextjs </CategoriesDecorator>
                  <CategoriesDecorator from="from-purple-300" to="to-pink-300" slug="#"> Javascript </CategoriesDecorator>
                </div>
              </div>
            </article>
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


export const getServerSideProps = () => {

  const { data: allPosts } = api.post.getAllPublished.useQuery();

  return {
    props: {
      posts: allPosts,
    },
  };
}
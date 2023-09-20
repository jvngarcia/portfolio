import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Article from "~/components/Article";
import Header from "~/components/Header";
import TextDecorator from "~/components/TextDecorator";
import type { IndexPage } from "~/interfaces/Pages";
import type { PostArticle } from "~/interfaces/Post";
import data from "~/data/portfolio.json";
import Script from "next/script";
// import { api } from "~/utils/api";

const Home: NextPage<IndexPage> = ({ posts }) => {

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
          <p className="text-lg mb-3">
            Puedes encontrarme en <TextDecorator from="from-purple-300" to="to-pink-300">Instagram</TextDecorator> y <TextDecorator from="from-slate-100" to="to-slate-300">GitHub</TextDecorator>; consulta mi <TextDecorator from="from-amber-200" to="to-amber-300">biografía</TextDecorator> para obtener más información.
          </p>
          <p className="text-lg">
            Soy responsable del desarrollo de una aplicación web a gran escala en <TextDecorator from="from-slate-300" to="to-amber-300">ElReferente</TextDecorator>. Trabajo en estrecha colaboración con un equipo de ingenieros para diseñar, implementar y probar la aplicación. También desempeño un papel clave en el despliegue y mantenimiento de la aplicación.
          </p>
        </section>

        <section className="container mt-12">
          <h2 className="text-2xl font-semibold mb-4">Portafolio</h2>
          <hr />
          <div className="mt-4 grid md:grid-cols-2 grid-cols-1 gap-10">
            {
              posts.map((post, index) => (
                <Article key={index} title={post.title} languages={post.languages} extract={post.extract} image={post.image} />
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

        <section className="container mt-8">
          <div className="grid md:grid-cols-3 grid-cols-2 justify-center m-auto">
            <Link href="https://github.com/jvngarcia" target="_blank" className="inline-flex items-center hover:bg-slate-100 transition-all text-center justify-center py-4">
              <span className="text-xl mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
              </span>
              <span className="border-b font-semibold">Github</span>
            </Link>

            <Link href="mailto:angelgarciaweb@gmail.com" className="inline-flex items-center hover:bg-slate-100 transition-all text-center justify-center py-4">
              <span className="text-xl mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <polyline points="3 7 12 13 21 7" />
                </svg>
              </span>
              <span className="border-b font-semibold">Correo</span>
            </Link>

            <Link href="https://www.linkedin.com/in/jvngarcia/" target="_blank" className="inline-flex items-center hover:bg-slate-100 transition-all text-center justify-center py-4">
              <span className="text-xl mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <line x1="8" y1="11" x2="8" y2="16" />
                  <line x1="8" y1="8" x2="8" y2="8.01" />
                  <line x1="12" y1="16" x2="12" y2="11" />
                  <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                </svg>
              </span>
              <span className="border-b font-semibold">Linkedin</span>
            </Link>
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

export default Home;


export const getServerSideProps = () => {

  const allPosts: PostArticle[] = data.map((post) => ({
    title: post.title,
    extract: post.extract,
    image: post.image,
    languages: post.languages,
  }));

  return {
    props: {
      posts: allPosts,
    },
  };
}
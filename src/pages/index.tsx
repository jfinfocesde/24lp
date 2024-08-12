import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (

    <section className="text-zinc-400 dark:text-zinc-300 body-font bg-white dark:bg-zinc-900">
    <div className="container px-5 py-24 mx-auto">
      <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-zinc-900 dark:text-white mb-4">Submódulo Lógica de Programación</h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-zinc-500 dark:text-zinc-400">Técnico Laboral como Asistente en Desarrollo de Software</p>
        <div className="flex justify-center mt-12">
          <img src="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Introduction Section Image" className="rounded-lg max-w-96" />
        </div>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
        </div>
      </div>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        <div className="p-4 md:w-1/2 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-500 mb-5 flex-shrink-0">
            <img src="https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Basic Logic" className="w-16 h-16 object-cover rounded-full" />
          </div>
          <div className="flex-grow">
            <h2 className="text-zinc-900 dark:text-white text-lg title-font font-medium mb-3">Unidad I: Elementos básicos de la lógica</h2>
            <p className="leading-relaxed text-base">Conceptos básicos de lógica de programación, partes del computador, algoritmos, instrucciones básicas, operadores aritméticos y lógicos.</p>
          </div>
        </div>
        <div className="p-4 md:w-1/2 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-500 mb-5 flex-shrink-0">
            <img src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Logical Structures" className="w-16 h-16 object-cover rounded-full" />
          </div>
          <div className="flex-grow">
            <h2 className="text-zinc-900 dark:text-white text-lg title-font font-medium mb-3">Unidad II: Estructuras lógicas</h2>
            <p className="leading-relaxed text-base">Ciclos, condicionales, acumuladores y contadores, promedios, porcentajes, funciones, teoría de objetos y arreglos unidimensionales.</p>
          </div>
        </div>
      </div>    
      <a href='/docs/intro'>
        <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Contenido</button>
      </a>
    </div>
  </section>

  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Bienvenido a ${siteConfig.title}`}
      description="Introducción a la Programación">
      <main>
        <HomepageHeader />
      </main>
    </Layout>
  );
}

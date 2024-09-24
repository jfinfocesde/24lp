import React from 'react';
import Layout from '@theme/Layout';

export default function Custom404() {
  // Reemplaza esta fecha con la fecha real de inicio del curso
  const courseDateString = "1 de enero de 2025";

  return (
    <Layout title="Contenido próximamente disponible">
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <h1 className="hero__title">Contenido próximamente disponible</h1>
            <p>El contenido que estás buscando estará disponible a partir del {courseDateString}.</p>
            <p>Este material forma parte de nuestro próximo curso y se activará en la fecha de inicio.</p>
            <p>
              Mientras tanto, puedes volver a la{' '}
              <a href="/">página de inicio</a> para explorar el contenido existente o revisar los requisitos del curso.
            </p>
            <p>Gracias por tu interés. ¡Esperamos verte en el curso!</p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
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
            <p>Este material se activará en la fecha de la semana correspondiente.</p>
            <p>
              Mientras tanto, puedes volver a la{' '}
              <a href="/">página de inicio</a> para explorar el contenido existente.
            </p>
            <p>Gracias por tu interés.</p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
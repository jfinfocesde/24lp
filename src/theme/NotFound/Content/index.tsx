import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import type { Props } from '@theme/NotFound/Content';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';

export default function NotFoundContent({ className }: Props): JSX.Element {
  return (
    <main className={clsx('container margin-vert--xl', className)}>
      {/* <div className="row">
        <div className="col col--6 col--offset-3">
          <Heading as="h1" className="hero__title">
            <Translate
              id="theme.NotFound.title"
              description="The title of the 404 page">
              Page Not Found JF
            </Translate>
          </Heading>
          <p>
            <Translate
              id="theme.NotFound.p1"
              description="The first paragraph of the 404 page">
              We could not find what you were looking for.
            </Translate>
          </p>
          <p>
            <Translate
              id="theme.NotFound.p2"
              description="The 2nd paragraph of the 404 page">
              Please contact the owner of the site that linked you to the
              original URL and let them know their link is broken.
            </Translate>
          </p>
        </div>
      </div> */}

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
    </main>
  );
}

import React from 'react';
import type { Props } from '@theme/NotFound/Content';

export default function NotFoundContent({ className }: Props): JSX.Element {
  return (
    <main className="container margin-vert--xl">
      <div className="row">
        <div className="col col--6 col--offset-3">
          <div className="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" className="mb-4">
              <rect width="640" height="480" fill="#f8f8f8" />
              <path d="M320 240c-44.183 0-80-35.817-80-80s35.817-80 80-80 80 35.817 80 80-35.817 80-80 80zm0-128c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z" fill="#ccc" />
              <path d="M320 272c-70.692 0-128-57.308-128-128s57.308-128 128-128 128 57.308 128 128-57.308 128-128 128zm0-224c-52.935 0-96 43.065-96 96s43.065 96 96 96 96-43.065 96-96-43.065-96-96-96z" fill="#999" />
              <path d="M320 304c-97.202 0-176-78.798-176-176S222.798 48 320 48s176 78.798 176 176-78.798 176-176 176zm0-320C178.953 0 48 130.953 48 272s130.953 272 272 272 272-130.953 272-272S461.047 0 320 0z" fill="#666" />
            </svg>
            <h1 className="hero__title">Contenido próximamente disponible</h1>
            <p>Este material se activará en la semana correspondiente.</p>
            <p>
              Mientras tanto, puedes volver a la{' '}
              <a href="/" className="text-blue-500 hover:text-blue-700">
                página de inicio
              </a>{' '}
              para explorar el contenido existente.
            </p>
            <p>Gracias por tu interés.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
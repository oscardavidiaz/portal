import { useState } from 'react';

import './App.css';
import Modal from './components/Modal';

function App() {
  const [mostrarModal1, setmostrarModal1] = useState(false);
  const [montarModal1, setmontarModal1] = useState(true);
  const [mostrarModal2, setmostrarModal2] = useState(false);

  return (
    <article className="container">
      <div className="row my-4">
        <section className="col-8">
          <p>
            <ol>
              <li>
                Abra el inspector del navegador para observar el código HTML de
                la página. En varios navegadores se hace con la tecla <strong>F12</strong>.
              </li>
              <li>
                Haga click en los botones para mostrar el modal que desea.
                Fíjese como en el body de la página se crean dinámicamente los
                divs que contienen los modales.
              </li>
              <li>
                Haga click en el botón "Desmontar modal 1" para eliminar el modal 1
                del DOM. Fíjese como el div correspondiente desaparece del body de
                la página.
              </li>
            </ol>
          </p>
        </section>
        <section className="col-4 align-items-center btn-group btn-group-sm">
          <button
            className="btn btn-info"
            type="button"
            onClick={(e) => {
              if (!montarModal1) {
                setmontarModal1(true);
              }

              setmostrarModal1(!mostrarModal1);
            }}
          >
            Mostrar modal 1
          </button>
          <button
            className="btn btn-warning"
            type="button"
            onClick={(e) => setmostrarModal2(!mostrarModal2)}
          >
            Mostrar modal 2
          </button>
          <button
            className="btn btn-danger"
            type="button"
            onClick={(e) => setmontarModal1(false)}
          >
            Desmontar modal 1
          </button>
        </section>
      </div>
      {montarModal1 && (
        <Modal
          contenido="Contenido del modal 1"
          mostrar={mostrarModal1}
          nombre="modal1"
          titulo="Modal 1"
          onCerrarModal={() => setmostrarModal1(false)}
        />
      )}
      <Modal
        botones={
          <button
            className="btn btn-success"
            type="button"
            onClick={() => alert('Hello')}
          >
            Hello
          </button>
        }
        contenido="Contenido del modal 2"
        mostrar={mostrarModal2}
        nombre="modal2"
        titulo="Modal 2"
        onCerrarModal={() => setmostrarModal2(false)}
      />
    </article>
  );
}

export default App;

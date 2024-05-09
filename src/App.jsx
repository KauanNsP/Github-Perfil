import { useState } from "react";
import Perfil from "./Components/Perfil";
import Formulario from "./Components/Perfil/Formulario";
import ReposList from "./Components/ReposList";

function App() {
  const [FormularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <>
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)}/>
      

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}

      {FormularioEstaVisivel && (
        <Formulario />
      )}

      <button onClick={() => setFormularioEstaVisivel(!FormularioEstaVisivel)} type="button">Toggle Form</button>
    </>
  )
}

export default App

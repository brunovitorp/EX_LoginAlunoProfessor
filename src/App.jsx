import { useState } from 'react';
import './App.css';
import Aluno from './components/Aluno';
import Professor from './components/Professor';
import Login from './components/Login';

function App() {
  const [papel, setPapel] = useState(null); // Estado para armazenar a escolha (aluno ou professor)

  const papelEscolhido = () => {
    if (papel === 'aluno') {
      return <Aluno />;
    } else if (papel === 'professor') {
      return <Professor />;
    } else {
      return null; // Não mostra nada se ainda não foi selecionado
    }
  };

  return (
    <div className="app">
      <div className="lado-login">
        <Login papelEscolhido={setPapel} /> {/* Passa a função para escolher o papel */}
      </div>
      <div className="lado-conteudo">
        {papelEscolhido()} {/* Renderiza o conteúdo com base no papel escolhido */}
      </div>
    </div>
  );
}

export default App;

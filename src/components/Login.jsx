/* eslint-disable react/prop-types */

const Login = ({ papelEscolhido }) => {
  return (
    <div className="login-options">
      <p>😍</p>
      <div className="buttons">
        <button onClick={() => papelEscolhido('aluno')}>Sou Aluno</button>
        <button onClick={() => papelEscolhido('professor')}>Sou Professor</button>
      </div>
    </div>
  );
};

export default Login;

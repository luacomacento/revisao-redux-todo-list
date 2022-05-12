import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveUserEmail, saveUserName } from '../redux/actions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
    }
  }

  handleChange = ({target}) => {
    this.setState({
      [target.name]: target.value,
    })
  }

  handleSubmit = (event) => {
    const {history, setUserName, setUserEmail} = this.props;
    const { name, email } = this.state;
    event.preventDefault();
    setUserName(name);
    setUserEmail(email);
    history.push('/todo');
  }
  
  render() {
    const {name, email} = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form>
          <input
            type="text"
            placeholder='Nome completo'
            name='name'
            onChange={this.handleChange}
            value={name}
          />
        <input
          type="text"
          placeholder='E-mail'
          name='email'
          onChange={this.handleChange}
          value={email}
        />
        <button type="submit" onClick={this.handleSubmit}>Entrar</button>
        </form>
      </div>
    )
  }
}

// O mapDispatchToProps, como o nome indica, é responsável por levar o dispatch para as props do componente. Porém mais poderoso do que isso, ele nos permite definir quais actions específicas serão disparadas ao evocar a função que estará nas props.
// Ele, como todas as funções do Redux, retorna um objeto, cujas chaves serão sempre funções. Essas funções normalmente (mas nem sempre) recebem um parâmetro, e a partir disso disparam uma action que irá atualizar nosso estado global.
// Note que o nome da função que estamos criando dentro do objeto (nesse caso "setUserName" e "setUserEmail") NÃO pode ser o mesmo nome da action, para evitar conflitos.
// Essas duas chaves do objeto estarão disponíveis nas props do componente. Não acredita? Dê um console.log(this.props) e confira! :)
const mapDispatchToProps = (dispatch) => {
  return {
    setUserName: (name) => dispatch(saveUserName(name)),
    setUserEmail: (email) => dispatch(saveUserEmail(email)),
  }
}

// A função connect é a função mais importante para se utilizar o Redux no React. Isso porque é ela que CONECTA informações da sua store no seu componente. Note que ela é parte da biblioteca "react-redux", e sua importação é feita lá em cima!
// Essas informações são, em ordem, chaves do próprio estado global, passadas a partir do mapStateToProps (não utilizado neste componente, favor olhar o arquivo Todo.js ou Profile.js), e as actions a serem disparadas, a partir do mapDispatchToProps.
// É muito importante prestar atenção na ordem. São dois parâmetros: mapState e mapDispatch. Caso queiramos passar apenas o segundo, é NECESSÁRIO passar um vazio (null) no primeiro parâmetro. O inverso não é necessário, mas ajuda a ficar mais claro (ver Profile.js)
// Como o nome dessas duas funções indicam, elas mapeiam essas informações nas props do componente.
// Note também como o connect é estruturado, sempre com duas aberturas e fechamentos de parênteses. connect()().
export default connect(null, mapDispatchToProps)(Login);

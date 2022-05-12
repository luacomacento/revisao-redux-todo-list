import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Profile extends Component {
  render() {
    const {userName, userEmail, tasks} = this.props;
    return (
      <div>
        <Header />
        <h1>Profile</h1>
        <p>{`Seu nome é: ${userName}`}</p>
        <p>{`Seu email é: ${userEmail}`}</p>
        <p>{`Você tem ${tasks.length} tarefas`}</p>
      </div>
    )
  }
}

// O mapStateToProps, como o nome indica, é responsável por levar informações do nosso estado global para as props do componente. Ele permite que extraiamos apenas as chaves que serão úteis para nosso componente.
// Essas chaves serão utilizadas para fazermos a LEITURA do estado, renderizar informações na página, entre outros. Mas não serão utilizados para ATUALIZAR informações que lá estão. Isso é feito no mapDispatchToProps (ver Login.js ou Todo.js)
// Como todas as funções do Redux, o mapStateToProps retorna um objeto, cujas chaves serão chaves do nosso estado global.
// Note que utilizamos a estrutura globalState.user.name, com duas chaves encadeadas. Isso é necessário pois temos dois reducers, "user" e "tasks", e cada um deles são chaves do nosso estado. Ou seja, as informações que queremos estarão sempre encadeadas.
const mapStateToProps = (globalState) => {
  return {
    userName: globalState.user.name,
    userEmail: globalState.user.email,
    tasks: globalState.tasks.savedTasks,
  }
}

// Note que aqui passamos apenas o mapStateToProps, sem precisar do mapDispatchToProps. Dessa forma, não seria sequer necessário passar "null" como segundo parâmetro. Porém fica mais claro de entender.
export default connect(mapStateToProps, null)(Profile);

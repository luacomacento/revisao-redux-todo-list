// Lembre-se sempre de criar um estado inicial para cada reducer. É o mesmo que fazíamos com o this.state lá no constructor...
const INITIAL_STATE = {
  name: '',
  email: '',
}

// Nosso reducer é em si uma função, responsável por interpretar a action e realizar a alteração do estado baseado no que precisa ser feito.
// Essa função recebe como parâmetro um state (que por padrão é o INITIAL_STATE, para quando ainda não há um estado que possa ser utilizado), e a action que foi passada.
// Baseamos o que será feito a partir da chave TYPE da action, pois é ela que contém um "nome" da ação a ser executada.
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_USER_NAME':
      return {...state, name: action.payload}
    case 'SET_USER_EMAIL':
      return {...state, email: action.payload}
    default:
      return state;
  }
}

export default userReducer;
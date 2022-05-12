import { combineReducers } from "redux";
import tasks from './tasks';
import user from './user';

// Aqui combinamos os nossos dois reducers, de usuários e tarefas, em um único objeto, pois como falamos, sempre estamos trabalhando com um objeto único (o nosso global state), e cada um dos reducers vira uma chave deste.
// Perceba que a função recebe como parâmetro um objeto, e as chaves são os nomes que passamos ali. Escrevemos de forma simplificada pois importamos nossos reducers com o nome "user" e "tasks", os mesmos nomes que daremos nas chaves.
const rootReducer = combineReducers( { user, tasks } );

export default rootReducer;
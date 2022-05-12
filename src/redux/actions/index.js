// 1. Salvar nome de um usuário
export const saveUserName = (name) => {
  return {
    type: 'SET_USER_NAME',
    payload: name
  }
}
// 2. Salvar o email de um usuário
export const saveUserEmail = (email) => ({
  type: 'SET_USER_EMAIL',
  payload: email
})
// 3. Adicionar uma tarefa
export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: task
})
// 4. Remover uma tarefa
export const removeTask = (task) => ({
  type: 'REMOVE_TASK',
  payload: task
})
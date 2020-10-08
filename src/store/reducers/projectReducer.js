const initState = {}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FUNCIONARIO_PROJECT_SUCCESS':
      console.log('funcionário registrado com sucesso');
      return state;
    case 'FUNCIONARIO_PROJECT_ERROR':
      console.log('erro ao registrar funcionário');
      return state;
      case 'FUNCIONARIO_REMOVE_SUCCESS':
      console.log('funcionário removido com sucesso');
      return state;
      case 'FUNCIONARIO_REMOVE_ERROR':
      console.log('erro ao remover funcionário');
      return state;
    default:
      return state;
  }
};

export default projectReducer;
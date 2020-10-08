import FUNCIONARIO_PROJECT_SUCCESS from '../reducers/projectReducer'

export const funcionarioProject = (project) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('projects').add({
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'FUNCIONARIO_PROJECT_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'FUNCIONARIO_PROJECT_ERROR' }, err);
    });
  }
};

export function funcionarioRemove (id) {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
       firestore.collection('projects').doc(id).delete()
    .then(() => {
      dispatch({ type: 'FUNCIONARIO_REMOVE_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'FUNCIONARIO_REMOVE_ERROR' }, err);
    });
  }
};


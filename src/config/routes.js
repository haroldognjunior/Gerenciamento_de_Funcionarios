import firebase from './fbConfig'
import FUNCIONARIO_PROJECT_SUCCESS from '../store/reducers/projectReducer'

var db = firebase.firestore()

export function add(input) {
    var nombre = input;
db.collection("haja").add({
  nome: nombre
})
.then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
  console.error("Error adding document: ", error);
});
}
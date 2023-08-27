let redux = require("redux");
let createStore = redux.legacy_createStore;
// action
const ADDHERO = "ADDHERO"
// action object creator
const addHero = ()=> {
    return {
        type : ADDHERO
    }
}
// intial State
const initalState = {
    numberOfHeroes : 0
};
 
// reducer
let reducerFun = (state = initalState, action)=>{
    switch(action.type){
        case "ADDHERO": return { ...state, numberOfHeroes : state.numberOfHeroes+1 }
        default : return state
    }
};
 
// store
let store = createStore(reducerFun);
 
console.log(store.getState());
 
// subscribe and unsubscribe 
store.subscribe(function(){
    console.log(store.getState());
});
 
store.dispatch(addHero());
store.dispatch(addHero());
store.dispatch(addHero());
store.dispatch(addHero());
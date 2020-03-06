import React from "react"

export let StoreContext=React.createContext();//context object created


function reducer(state,action){

    switch(action.type){
        case "test_action":console.log(action);
    }
    return state;

}

export function StoreProvider(props) {
    const initialState={count:0};
    //createStore()
    const [state, dispatch] = React.useReducer(reducer, initialState);
    //object
    const value = { state, dispatch };

    let StoreContextProviderComponent=
    <StoreContext.Provider value={value}>{props.children}</StoreContext.Provider>
    return StoreContextProviderComponent;
  }
  
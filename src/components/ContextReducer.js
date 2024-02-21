import React, { createContext, useReducer } from 'react'

const cartStateContext = createContext;
const cartDispatchContext = createContext;
const reducer = (state,action)=>{

}
export const Cartprovider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,[]);
return(
    <cartDispatchContext.Provider value = {dispatch}>
        <cartStateContext.Provider value={state}>
{children}
        </cartStateContext.Provider>
    </cartDispatchContext.Provider>
);
}

export const useCart = ()=>(cartStateContext)
export const useDispatchCart = ()=>(cartDispatchContext)
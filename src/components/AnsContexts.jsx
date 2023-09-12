import React,{useContext,createContext, useState} from 'react'

export const finalAnsContext = createContext([]);

export function AnsContexts({ children }) {
  const [finalAns, setFinalAns] = useState([]);

  const addItem = (ansName) => {
    setFinalAns([...finalAns, ansName]);
    console.log(finalAns)
  };

  const contextValue = { finalAns, addItem };

  return (
    <finalAnsContext.Provider value={contextValue}>
      {children}
    </finalAnsContext.Provider>
  );
}

export default AnsContexts

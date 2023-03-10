import React, { createContext, ReactNode, ReactElement, useContext } from 'react';

export type defaultContext = {
  contextData: DataContext;
  setData: (data: any) => void;
};

interface DataContext {
  customersDetail: any;
  accountsDetail: any;
}
const WebviewContext = createContext({
  contextData: null,
  setData: (contextData: any) => console.warn('no theme provider'),
});

interface IProps {
  children?: ReactNode;
}

const WebviewProvider = ({ children }: IProps): ReactElement => {
  const [contextData, setData] = React.useState<any>(null);

  return (
    <WebviewContext.Provider value={{ contextData, setData }}>{children}</WebviewContext.Provider>
  );
};

const useWebviewContext = () => useContext(WebviewContext);

export { WebviewProvider, WebviewContext, useWebviewContext };

import { createContext, use } from "react";

const AppContext = createContext();
const useAppContext = useContext(AppContext);

const ContextProvider = (props) => {
    return (
        <AppContext.Provider>
            {props.children}
        </AppContext.Provider>
    )
}


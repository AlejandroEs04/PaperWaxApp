import { createContext, FC, ReactNode } from "react";

interface AppProviderProps {
    children: ReactNode
}

interface AppContextInterface {

}

export const AppContext = createContext<AppContextInterface | null>(null)

const AppProvider: FC<AppProviderProps> = ({ children }) => {
    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider
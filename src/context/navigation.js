import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);  // o '/'?


// el useEffect hace q puedas acceder a la flecha de atras y adelante y no refresca toda la pagina 
// del navegador (creo q tiene q ver con el popstate al q accede gracias al pushstate)
    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname)
        };
        window.addEventListener('popstate', handler);

        return () => {
            window.removeEventListener('popstate', handler);
        }
    }, []);

    const navigate = (to) => {
        window.history.pushState({}, '', to);
        setCurrentPath(to)
    }

    return <NavigationContext.Provider value={{ currentPath, navigate }}>
        {/* {currentPath} */}
        {children}
    </NavigationContext.Provider>
};

export { NavigationProvider };
export default NavigationContext;
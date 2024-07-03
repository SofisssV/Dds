import { useState } from "react";

const Contador = () => {
    const [cont, setCont] = useState(0);
    const incrementar = () => {
        setCont(cont + 1)
        
    }
    return(
        <>
            <button onClick={incrementar}>Presionado {cont} veces</button>
        </>
    )
}
export default Contador;
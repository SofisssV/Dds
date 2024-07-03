import DeudoresListado from './DeudoresListado';
import { useState} from 'react';

function Deudores() {
    const [deudoresListado] = useState([]);
return(
    <div>
        <DeudoresListado deudores={deudoresListado} />
    </div>





)
}
export default Deudores;

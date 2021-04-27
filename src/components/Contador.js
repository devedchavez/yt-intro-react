import { useState } from 'react';


const Contador = () => {

    const [ contador, setContador ] = useState(10);

    const aumentar = () => {
        setContador( contador + 1 );
    }

    return (
        <div>
            <h3>Contador: { contador }</h3>

            <div>
                <button 
                    className="btn btn-primary mx-2"
                    onClick={ aumentar }
                >
                    +1
                </button>
                <button 
                    className="btn btn-danger"
                    onClick={ () => setContador( contador - 1 ) }
                >
                    -1
                </button>
            </div>
        </div>
    )
}

export default Contador;

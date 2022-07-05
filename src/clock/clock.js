import React, { useState, useEffect }  from 'react';
 
function Clock() {
    const [dateState, setDateState] = useState(new Date());
    //Taxa de Atualização do relógio
    useEffect(() => {
           setInterval(() => setDateState(new Date()), 1000);
    }, []);
    //devolve o relogio no formato solicitado
    return (
        <div className="clock">
            <p>
             {dateState.toLocaleString('pt-BR', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
            })}
            </p>
        </div>
    );
}

export default Clock;
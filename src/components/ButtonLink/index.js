import React from 'react';

function ButtonLink (props) {

    return (
        //props => { className: o que receber}

        <a href = {props.href} className = {props.className}>
          {props.children}
        </a>

    );

}

export default ButtonLink; //Exportar a função para poder usar em outros lugares  

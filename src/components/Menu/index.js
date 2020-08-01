import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from '../ButtonLink';

function Menu() {

    return (

        <nav className='Menu'>
            <Link to='/'>
                <img className='Logo' src={Logo} alt='Logo da Aluraflix'></img>
            </Link>

            <Button as = {Link} className='ButtonLink' to='/cadastro/video'>
                Novo vídeo
            </Button>

        </nav>  





    );

}

export default Menu; //Exportar a função para poder usar em outros lugares  
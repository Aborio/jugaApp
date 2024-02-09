import React from 'react';

import '../componentes/style.css'



const Home = () => {

    return (
        <div className='titulo'> 
            <h1 className='titulo'>Juga con nosotros!</h1>
            <img src='/casino2.jpg' alt='Casino' className='imagen'></img>
            <br />
            <button className='boton' >
             <a className='boton2' href='https://wa.link/4476ir'>Click aqui para contactarte con nosotros</a>
            </button>
            
        </div>
    );

}
export default Home;
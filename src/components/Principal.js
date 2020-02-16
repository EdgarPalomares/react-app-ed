import React from 'react';

import Pelicula from './Pelicula';
import Descripcion from './Descripcion';


const Principal = () => (
    <div>
        <Pelicula titulo={"John Wick 3"}></Pelicula>
        <Descripcion></Descripcion>
    </div>
);

export default Principal;
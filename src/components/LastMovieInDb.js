import React from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg';

function LastMovieInDb(){
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">

                    <h5 className="m-0 font-weight-bold text-gray-800">Ultima Venta</h5>
                
                    {/* {LastCard.name} */}
                
                </div>
                <div className="card-body">
                    <div className="text-center">

                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>

                        {/* <img src={apiUrl ===`http://localhost:3000/img/users/${LastCard.image}`} alt="" /> */}

                    </div>
                    
                    {/* {contentP} */}
                    
                </div>
            </div>
        </div>
    )
}

export default LastMovieInDb;
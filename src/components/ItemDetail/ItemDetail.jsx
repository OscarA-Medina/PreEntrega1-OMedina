import React from 'react';

export const ItemDetail = ({datos}) => {
    return (
        <div className="container">
            <div className="detail">
                <img className="detail-image" src={datos.image} alt="" />
                <div className="content">
                    <h1>{datos.title}</h1>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail; 


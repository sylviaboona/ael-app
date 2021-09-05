import React from 'react'
import bassGuitar1 from "../assets/img/bass-guitar2.jpg" 

const GuitarShop = () => {
    return (
        <div className="page-container">
            <div className="card">
                <img src={bassGuitar1} alt="" className='card-image'/>
                <p>Bass-Guitar, Yamaha</p>
                <p>$500</p>
                <input type="button" value="Buy Now" />
            </div>
        </div>
    )
}

export default GuitarShop

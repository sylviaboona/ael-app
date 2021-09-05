import React from 'react'
import bassGuitar1 from "../assets/img/bass-guitar1.jpg" 
import bassGuitar2 from "../assets/img/bass-guitar2.jpg"
import electricGuitar1 from "../assets/img/bass-guitar4.jpg"
import electricGuitar2 from "../assets/img/electric-guitar2.jpg"
import acousticGuitar1 from "../assets/img/acoustic-guitar1.jpg"
import acousticGuitar2 from "../assets/img/acoustic-guitar3.jpg"



const GuitarShop = () => {
    return (
        <div className="page-container">
            <div className="card">
                <img src={bassGuitar1} alt="" className='card-image'/>
                <p>Bass-Guitar, Yamaha</p>
                <p>$500</p>
                <input type="button" value="Buy Now" />
            </div>
            <div className="card">
                <img src={bassGuitar2} alt="" className='card-image'/>
                <p>Bass-Guitar, Yamaha</p>
                <p>$750</p>
                <input type="button" value="Buy Now" />
            </div>
            <div className="card">
            <img src={electricGuitar1} alt="" className='card-image'/>
                <p>Electric-Guitar, Yamaha</p>
                <p>$1000</p>
                <input type="button" value="Buy Now" />
            </div>
            <div className="card">
            <img src={acousticGuitar1} alt="" className='card-image'/>
                <p>Acoustic-Guitar, Yamaha</p>
                <p>$350</p>
                <input type="button" value="Buy Now" />
            </div>
            <div className="card">
            <img src={acousticGuitar2} alt="" className='card-image'/>
                <p>Acoustic-Guitar, Yamaha</p>
                <p>$650</p>
                <input type="button" value="Buy Now" />
            </div>
            <div className="card">
            <img src={electricGuitar2} alt="" className='card-image'/>
                <p>Electric-Guitar, Yamaha</p>
                <p>$875</p>
                <input type="button" value="Buy Now" />
            </div>
        </div>
    )
}

export default GuitarShop

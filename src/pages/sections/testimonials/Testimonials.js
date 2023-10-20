import React from 'react';
import './testimonials.css';
import brandon from '../../../assets/brandon.jpg';
import selena from '../../../assets/selena.jpg';
import peter from '../../../assets/peter.jpg';
import fiveStar from '../../../assets/5 star rating.png';

const Testimonials = ()=> {
    const tData = [
        {id:1, img:brandon, nametag:'Brandon F..', review:'"I loved the atmosphere and every dish I tried"'},
        {id:2, img:selena, nametag:'Selena G.', review:'"The Chefs know what they are doing!"'},
        {id:3, img:peter, nametag:'Peter H.', review:'"Meh, could have been better...Ok, who am i kidding! This place is amazing!"'},
    ]
    return (
        <div className='t-background'>
            <div className='t-main'>
                <div className ='t-containter'>
                    <h2 className="t-title">Testimonials</h2>
                </div>
                <div className='t-layout'>
                    {tData.map((tcard) => (
                        <div className='t-card' key={tcard.id}>
                            <img className='t-rating' alt='Star Rating' src={fiveStar}/>
                            <img className='t-profilepic' alt={tcard.nametag} src={tcard.img}/>
                            <p className='t-name'>{tcard.nametag}</p>
                            <p className='t-review'>{tcard.review}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Testimonials;
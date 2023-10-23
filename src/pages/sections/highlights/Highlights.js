import React from 'react';
import './highlights.css';
import {useNavigate} from "react-router-dom";
import Button from '../../../Components/Button/button.js'
import pages from '../../pages';

const Hightlights = ()=> {
    const navigate = useNavigate();
    const onClickMenu = () => {
        navigate(pages.get('menu').path);
    }
    return (
        <div className ='specials-container'>
            <div className ="specials">
                <h3 className='specials-text'>Specials</h3>
                <Button title={'Online Menu'} onClick={onClickMenu}/>
            </div>
        </div>
    )
}

export default Hightlights;
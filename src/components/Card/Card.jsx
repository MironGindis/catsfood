import React from 'react';
import './Card.css';
import Catphoto from './../../assets/images/Photo1.png';

let Card = (props) => {
    return <div className='Card-wrapper' >
    <div className={(props.isDisabled)? "Card-border disabled":((props.isActive)?"Card-border active" :"Card-border")} onClick={()=> { if (!props.isDisabled) props.toggleActiveMode(props.id)}}>
        <div className='Card-background'>
            <div className="Card" >
                <div className='Card_mainInfo'>
                    <div className='Card_preheader'>
                        Cказачное заморское яство
                    </div>
                    <div className='Card_header'>
                        Нямушка 
                    </div>
                    <div className='Card_postheader'>
                        с {props.taste}
                    </div>
                    <div className='Card_description'>
                        {props.description.map( item => {
                            return <div >{item}</div>
                        })}
                    </div>
                </div>
                              
            </div>
            <div className='Card_image'>
                    <img src={Catphoto} alt='cat'/>
                </div> 
            <div className='Card_circle'>
                    <div className='Circle_content'>
                    {props.weight}<span>кг</span>
                    </div>
            </div>
        </div>   
    </div>
    <div className={(props.isDisabled)? 'UnderCard_content__disabled' : 'UnderCard_content'}>
    {(props.isDisabled)? `Печалька, с ${props.taste} закончился` :((!props.isActive)? <>Чего сидишь? Порадуй котэ, <span onClick={()=> {props.toggleActiveMode(props.id)}}>купи</span><span>.</span></> : props.underCardInfo) }
    </div>
</div>
}

export default Card;

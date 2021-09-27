import React from "react";
import './LavhalarCard.css';

function LavhalarCard(props) {
    return (            
        <div uk-lightbox="animation: fade uk-lightbox-style" className="lavhalar-card-style" 
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
        >
                <a class="uk-inline lavhalar-show-style"
                    href={props.img} data-caption="Darslardan lavhalar"> <a href={props.img} uk-icon="icon: plus; ratio: 3" className="zoom-photos"></a>
                    <img className="img-fluid lavhalar-image-style" src={props.img} alt="" />
                </a>
            </div>  
    )
}

export default LavhalarCard;
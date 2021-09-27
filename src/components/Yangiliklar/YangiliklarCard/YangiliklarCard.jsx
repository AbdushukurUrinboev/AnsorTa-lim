import React from "react";
import './YangiliklarCard.css'

function YangiliklarCard(props) {
    return (
        <div className="col-4">
            <div className="card news-card"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
            >
                <img src={props.img} className="card-img-top yangiliklar-card-img" alt="..." />
                <div className="card-img-overlay">
                    <p className="card-text card-text-data">{props.date}</p>
                    <h5 className="card-title card-text-title">{props.title}</h5>
                </div>
                <div className="card-body">
                    <p className="card-text card-text-definition">{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default YangiliklarCard;
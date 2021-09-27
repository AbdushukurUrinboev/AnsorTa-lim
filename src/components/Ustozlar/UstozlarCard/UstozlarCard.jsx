import React from "react";
import './UstozlarCard.css'

function UstozlarCard(props) {
    return (
        <div class="card ustozlar-card-style"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
        >
            <img src={props.img} class="card-img-top ustozlar-card-img" alt="..." />
            <div class="card-body ustozlar-body">
                <h5 class="card-title ustozlar-title">{props.name}</h5>
                <h5 class="card-title ustozlar-fani">{props.title}</h5>
                <p class="card-text ustozlar-text-define">{props.definition}</p>
            </div>
        </div>
    )
}

export default UstozlarCard;
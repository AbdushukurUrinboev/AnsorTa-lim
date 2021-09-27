import React from "react";
import SotibOlish from "../SotibOlish/SotibOlish";


function KurslarCard(props) {
    return (
        <div class="col">            
            <div class="card kurs-card-style">
                <img src={props.img} class="card-img-top kurs-card-img" alt="..." />
                <div class="card-body kurs-body">
                    <h5 class="card-title kurslar-title">{props.title}</h5>
                    <div className="kurs-author">
                        <img src={props.authorPhoto} alt="" />
                        <span>{props.author}</span>
                    </div>
                    <p class="card-text kurs-text-define">{props.description}</p>
                    <h5 class="card-title kurslar-price">{props.price}</h5>
                    
                    <div><SotibOlish /></div>
                    <a href="#" class="btn btn-danger kurs-btn" data-bs-toggle="modal" data-bs-target="#exampleModal"
                        data-bs-whatever="@mdo" >Sotib olish</a>
                </div>
            </div>
        </div>
    )
}

export default KurslarCard;
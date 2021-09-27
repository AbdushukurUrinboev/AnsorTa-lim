import React from "react";
import './Boglanish.css'
import YandexMap from "../YandexMap/YandexMap";

function Boglanish() {
    return(
        <div id="boglanish" className="container-fluid boglanish-container">
            <div class="row"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
            >
                <div class="col boglanish-text-style">
                    <h2>Biz bilan bog'lanish</h2>
                    <div className="row">
                        <div className="col boglanish-icons">
                            <div className="boglanish-location"><span uk-icon="location"></span></div>
                            <div className="boglanish-receiver"><span uk-icon="receiver"></span></div>
                            <div className="boglanish-mail"><span uk-icon="mail"></span></div>
                        </div>
                        <div className="col">
                            <p className="adress-boglanish">Toshkent shaxri, Yunusobod tumani Shota Rustaveli ko‘chasi, 23-a uy</p>
                            <p>+998 90 123 45 67</p>
                            <p>ansortalim@gmail.com</p>
                            <p>Bizning ijtimoiy tarmoqlar</p>
                            <div className="boglanish-ijtim-tarmoq">
                                <span uk-icon="facebook"></span>
                                <span uk-icon="instagram"></span>
                                <span uk-icon="youtube"></span>
                            </div>
                            
                        </div>
                    </div>
                    
                    
                </div>
                <div class="col ">
                    <YandexMap />
                </div>
            </div>
        </div>
        
    )
}

export default Boglanish
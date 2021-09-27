import React, { useState, useEffect } from "react";
import './Izohlar.css';
import { IzohlarSlider } from "../SlickCarousel/Carousel";

function Izohlar() {
    return(
        <div id="izohlar" class="container izohlar-container">
            <div class="col izohlar-main-text">
                Izohlar
            </div>
            <div>
                <IzohlarSlider />
            </div>
        </div>
    )
}

export default Izohlar;
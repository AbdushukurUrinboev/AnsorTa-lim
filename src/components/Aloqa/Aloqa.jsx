import axios from "axios";
import React, { useState } from "react";
import './Aloqa.css';
import MuvaffaqiyatliJunatildi from "../MuvaffaqiyatliJunatildi/MuvaffaqiyatluJunatildi";

function Aloqa() {
    const [ismsharif, setIsmsharif] = useState("")
    const [tell, setTell] = useState("")

    function handleInput(elem){
        const {name, value} = elem.target;
        if(name === "ism") setIsmsharif(value);    
        if(name === "tell") setTell(value);    
    }

    function send() {
        axios.post("http://localhost:4000/aloqa",{fullName: ismsharif, phoneNumber: tell})
        .then(res => {            
            // alert("Muvaffaqiyatli Junatildi")
            setIsmsharif("")
            setTell("")
        })
        .catch(err => {
            alert("Jo'natishda xatolik sodir bo'ldi")
        })
    }
    return(
        <div id="aloqa" className="aloqa-bg-color">
        <div className="container aloqa-container">
            <h2 className="aloqa-main-text">Aloqa</h2>
            <div class="row g-3">
                <div class="col aloqa-col">
                    <label for="inputEmail4" class="form-label aloqa-label">Ism va Familiyangizni kiriting: F.I.O.</label>
                    <input name="ism" value={ismsharif} type="text" class="form-control" onChange={handleInput} placeholder="Bu yerga yozing" aria-label="First name" />
                </div>
                <div class="col aloqa-col">
                    <label for="inputEmail4" class="form-label aloqa-label">Telefon nomer yoki Emailingizni kiriting</label>
                    <input name="tell" value={tell} type="text" class="form-control" onChange={handleInput} placeholder="Telefon / Email" aria-label="Last name" />
                </div>                
            </div>
            <div class="col"> 
            <div><MuvaffaqiyatliJunatildi /></div>                   
                    <button type="submit" class="btn btn-danger aloqa-button-style" onClick={send} data-bs-toggle="modal" data-bs-target="#aloqaYuborish">Yuborish</button>
            </div>
        </div>
        </div>
    )
}

export default Aloqa;
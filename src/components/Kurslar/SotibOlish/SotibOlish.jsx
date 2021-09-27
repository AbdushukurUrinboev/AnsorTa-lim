import React, {useState} from "react";
import "./SotibOlish.css"
import axios from "axios";
import MuvaffaqiyatliJunatildi from "../../MuvaffaqiyatliJunatildi/MuvaffaqiyatluJunatildi";

function SotibOlish() {
    const [ismsharif, setIsmsharif] = useState("")
    const [tell, setTell] = useState("")

    function handleInput(elem) {
        const { name, value } = elem.target;
        if (name === "ism") setIsmsharif(value);
        if (name === "tell") setTell(value);
    }
    function send() {
        axios.post("http://localhost:4000/sotibOlish", { fullName: ismsharif, phoneNumber: tell })
            .then(res => {          
                // <MuvaffaqiyatliJunatildi />        
                // alert("Muvofaqqiyatli jo'natildi")
                setIsmsharif("")
                setTell("")                
            })
            .catch(err => {
                alert("Jo'natishda xatolik sodir bo'ldi")
            })
    }

return (
<div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Sotib Olish bo'limi</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3 sotib-olish-style">
                            <label for="recipient-name" class="col-form-label sotib-olish-head-style">Ism va Familiyangizni kiriting: F.I.O.:</label>
                                <input name="ism" type="text" class="form-control sotib-olish-placeholder-style" id="recipient-name" placeholder="Bu yerga yozing" value={ismsharif} onChange={handleInput} aria-label="First name" />
                        </div>
                            <div class="mb-3 sotib-olish-style">
                                <label for="recipient-name" class="col-form-label sotib-olish-head-style">Telefon nomer yoki e-mailingizni kiriting</label>
                                <input name="tell" value={tell} type="text" class="form-control sotib-olish-placeholder-style" id="recipient-name" placeholder="Bu yerga yozing" onChange={handleInput} aria-label="Last name" />
                        </div>
                    </form>
                </div>
                <div class="modal-footer"> 
                    <button type="button" class="btn btn-secondary sotib-olish-close-button" data-bs-dismiss="modal">Close</button>                                                                                            
                    <button type="submit" class="btn btn-danger sotib-olish-button" onClick={send} 
                        data-bs-target="#aloqaYuborish"
                        data-bs-toggle="modal"
                        data-bs-dismiss="modal"
                        >Sotib Olish</button>
                </div>
            </div>
        </div>
    </div>
</div>
)
}

export default SotibOlish;
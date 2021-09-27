import React, {useContext} from "react";
import './Footer.css'
import Logo from './img/logo.png'
import { TestContext } from "../Main-cont";
import { useHistory} from 'react-router-dom';

function Footer() {

    const [kurs, setKurs] = useContext(TestContext)
    const history = useHistory();
    function handleJump(elem) {
        if (kurs) {
            const { name } = elem.target;
            // console.log(name);
            history.push(`/#${name}`)
            setKurs(false)
        }
    }

    return (
        <div className="container-fluid footer-container">
            <div class="container">
                <div class="row"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                >
                    <div class="col footer-main">
                        <div className="footer-main-text"> <a href="/">
                            <img src={Logo} alt="" />
                            ansor ta'lim </a>
                        </div>
                        <p>Dolor viverra in id bibendum sollicitudin viverra quam enim. Id lacus, dolor, turpis</p>
                    </div>
                    <div class="col">
                        <div className="footer-menu footer-menu-first"><a name="yangiliklar" onClick={handleJump} aria-current="page" href="#yangiliklar">Yangiliklar</a></div>
                        <div className="footer-menu"><a name="kurslar" onClick={handleJump} href="#kurs">Kurslar</a></div>
                        <div className="footer-menu"><a name="ustozlar" onClick={handleJump} href="#ustozlar">Ustozlar</a></div>
                    </div>
                    <div class="col">
                        <div className="footer-menu footer-menu-first"><a href="#izohlar" name="izohlar" onClick={handleJump}>Izohlar</a></div>
                        <div className="footer-menu"><a href="#darsdanLavhalar" name="lavha" onClick={handleJump}>Darsdan lavhalar</a></div>
                        <div className="footer-menu"><a href="#aloqa" name="aloqa" onClick={handleJump}>Aloqa</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
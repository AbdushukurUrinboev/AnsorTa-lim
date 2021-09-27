import react, { useContext, useRef } from "react";
import './Header.css';
import Logo from "./image/logo.png";
import { Link } from 'react-router-dom';
import { TestContext } from "../Main-cont";
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';



function Header() {
    const [kurs, setKurs] = useContext(TestContext)
    const history = useHistory();
    function handleJump(elem) {
        if(kurs) {
            const { name } = elem.target;
            // console.log(name);
            history.push(`/#${name}`)
            setKurs(false)
        }
    }
return (
    <header>
        <div className="header-bg"></div>
        <div className="header-text">
            <div className="header-main-text"><h1>Abiturientlikdan studentlik tomon</h1></div>
            <div className="header-pText"><p>Uyda qoling, online ta’lim oling. At massa at dictumst odio sapien vulputate tortor auctor sollicitudin. </p></div>
            <div className="header-button"><button type="button" class="btn btn-danger batafsil-text-style">Batafsil</button></div>
            
        </div>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid container-manual-header">
                <a className="navbar-brand ansor" href="/">
                    <img src={Logo} alt="" />
                    Ansor ta'lim</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navbar-collapse-man-header" id="navbarNav">
                    <ul className="navbar-nav header-menu-manual">
                        <li className="nav-item">
                            {/* <a className="nav-link active" aria-current="page" href="/yangiliklar">Yangiliklar</a> */}
                            <a className="nav-link active"  name="yangiliklar" onClick={handleJump} aria-current="page" href="#yangiliklar">Yangiliklar</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" name="kurslar" onClick={handleJump} href="#kurs">Kurslar</a>
                            {/* <a className="nav-link" href="#" onClick={handleBackClick} ref={kurslar}>Kurslar</a> */}
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="/ustozlar">Ustozlar</a> */}
                            <a className="nav-link" name="ustozlar" onClick={handleJump} href="#ustozlar">Ustozlar</a>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="/izohlar">Izohlar</a> */}
                            <a className="nav-link" name="izohlar" onClick={handleJump} href="#izohlar">Izohlar</a>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="/darsdanLavhalar">Darslardan lavhalar</a> */}
                            <a className="nav-link" name="lavha" onClick={handleJump} href="#darsdanLavhalar">Darslardan lavhalar</a>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="/aloqa">Aloqa</a> */}
                            <a className="nav-link" name="aloqa" onClick={handleJump} href="#aloqa">Aloqa</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
        
        {/* Navbar */}
    </header>
)


}

export default Header;
import React, {useState, useEffect, useContext} from "react";
import './Kurslar.css';
import KurslarCard from "./KurslarCard/KurslarCard";
import axios from "axios";
import { Link } from "react-router-dom";
import { TestContext } from "../Main-cont";

function Kurslar () {
    const [kurs, setKurs] = useContext(TestContext)

    
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/kurslar')
            .then(res => {
                if(kurs) {
                    setPosts(res.data)
                } else {
                    let posts = res.data.slice(0, 3)
                    // console.log(res);
                    setPosts(posts)
                }
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
return (
<div id="kurs" className="container my-kurslar-container">
    {/* Grid-heading-text */}
    <div class="row kurslar-row-news"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
    >
        <div class="col kurslar-main-text">
            Kurslar
        </div>
        <div class="col barcha-kurslar">
            <a className="barcha-kurslar"> <Link to="kurslar" onClick={() => {
                                setKurs(true)
                            }}> Barcha kurslar</Link></a>
        </div>
    </div>
    {/* Grid-cards */}
    <div class="container">
        <div class="row">
                {posts.map(post => <KurslarCard 
                title = {post.title}
                authorPhoto={post.authorPhoto}
                author = {post.author}
                description = {post.description.slice(0,115) + "..."}
                price = {post.price}
                img = {post.img}
                />)}
        </div>
    </div>
</div>
)
}
export default Kurslar;
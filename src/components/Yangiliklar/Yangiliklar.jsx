import React, {useEffect, useState, useContext} from "react";
import './Yangiliklar.css';
import axios from "axios";
import YangiliklarCard from "./YangiliklarCard/YangiliklarCard";
import { Link } from "react-router-dom";
import { TestContext } from "../Main-cont";



function Yangiliklar() {
    const [yangiliklar, setYangiliklar] = useContext(TestContext)

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/yangiliklar')
            .then(res => {
                if(yangiliklar) {
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
// Grid-heading-text
<div id="yangiliklar" class="container my-news-container">
    <div class="row manual-row-news">
        <div class="col yangiliklar-main-text">
            Yangiliklar
        </div>
        <div class="col barcha-yangiliklar">
                <a href="#" className="barcha-yangiliklar"> <Link to="yangiliklar"onClick={()=> {
                    setYangiliklar(true)
                }}> Barcha yangiliklar </Link> </a>
        </div>
    </div>
        <div class="container">
            <div class="row">
                {posts.map(post => <YangiliklarCard
                img={post.img}
                date={post.date}
                title={post.title}
                description={post.description.slice(0,85) + "..."}
                />)}  
            </div>
        </div>
</div>

)
}

export default Yangiliklar;
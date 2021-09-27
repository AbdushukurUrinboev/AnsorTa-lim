import React, { useEffect, useState } from "react";
import './DarsdanLavhalar.css';
import Slider from "react-slick";
import axios from "axios";
import LavhalarCard from "./LavhalarCard/LavhalarCard";

function DarsdanLavhalar() {

        const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/fotoreportaj')
            .then(res => {
            // console.log(res);
            setPosts(res.data)
            })
            .catch(err => {
            console.log(err);

            })
    }, [])


        const settings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "2px",
        slidesToShow: 3,
        speed: 500,
        rows: 1,
        slidesPerRow: 2
        };

return (
<div id="darsdanLavhalar" className="container">
    <h2 className="lavhalar-main-text">Darsdan lavhalar</h2>
    <Slider {...settings}>        
        {posts.map(post =>
        <LavhalarCard img={post.img} />)}        
    </Slider>
</div>
);
}

export default DarsdanLavhalar;
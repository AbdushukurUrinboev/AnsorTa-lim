import React, { useState, useEffect } from "react";
import './Carousel.css';
import Slider from "react-slick";
import UstozlarCard from "../Ustozlar/UstozlarCard/UstozlarCard";
import IzohlarCard from "../Izohlar/IzohlarCard/IzohlarCard";
import axios from "axios";

function SimpleSlider() {

    const[posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/ustozlar')
            .then(res => {
                let posts = res.data;                
                // console.log(res);
                setPosts(posts)
            })
            .catch(err => {
                console.log(err);

            })
    }, [])


const settings = {    
dots: true,
infinite: true,
speed: 500,
slidesToShow: 3,
slidesToScroll: 1
};
return (
<Slider {...settings}>
    {posts.map(post => <UstozlarCard 
    name = {post.name}
    title = {post.title}
    definition = {post.definition}
    img = {post.img}
    />)}  
</Slider>
);
}

function IzohlarSlider() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/izohlar')
            .then(res => {
                let posts = res.data;
                // console.log(res);
                setPosts(posts)
            })
            .catch(err => {
                console.log(err);

            })
    }, [])


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            {posts.map(post => <IzohlarCard
                name={post.name}
                title={post.title}
                definition={post.definition}
                img={post.img}
            />)}
        </Slider>
    );
}

export { SimpleSlider, IzohlarSlider };
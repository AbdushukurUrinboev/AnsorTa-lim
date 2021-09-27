import React from "react";
import './MainPage.css'
import Yangiliklar from "../Yangiliklar/Yangiliklar";
import Kurslar from "../Kurslar/Kurslar";
import Ustozlar from "../Ustozlar/Ustozlar";
import DarsdanLavhalar from "../DarsdanLavhalar/DarsdanLavhalar";
import Aloqa from "../Aloqa/Aloqa";
import Boglanish from "../Boglanish/Boglanish";
import Izohlar from "../Izohlar/Izohlar";


function MainPage() {
    return (
        <div>            
            <Yangiliklar />
            <Kurslar />
            <Ustozlar />
            <Izohlar />
            <DarsdanLavhalar />
            <Aloqa />
            <Boglanish />
        </div>
    )
}

export default MainPage;
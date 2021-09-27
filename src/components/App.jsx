import React, { useEffect } from "react";
import Header from "./Header/Header";
import Yangiliklar from "./Yangiliklar/Yangiliklar";
import Kurslar from "./Kurslar/Kurslar";
import Ustozlar from "./Ustozlar/Ustozlar";
import DarsdanLavhalar from "./DarsdanLavhalar/DarsdanLavhalar";
import Aloqa from "./Aloqa/Aloqa";
import Boglanish from "./Boglanish/Boglanish";
import Footer from "./Footer/Footer";
import Izohlar from "./Izohlar/Izohlar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from "./MainPage/MainPage";
import { TestContext, TestProvider } from "./Main-cont";
import AOS from 'aos';
import "aos/dist/aos.css";

function App() {
    useEffect (() => {
        AOS.init();
    }, [])

    return(
        <div>
            <BrowserRouter>
            {/* <TestContext> */}
                <TestProvider>

                
                <Header />
                <Switch>
                    <Route exact path="/">
                        <MainPage />
                    </Route>
                    <Route exact path="/yangiliklar">
                            <Yangiliklar />
                    </Route>
                    <Route exact path="/kurslar">
                        <Kurslar />
                    </Route>
                    <Route exact path="/ustozlar">
                            <Ustozlar />
                    </Route>
                    <Route exact path="/izohlar">
                        <Izohlar />
                    </Route>
                    <Route exact path="/darsdanLavhalar">
                        <DarsdanLavhalar />
                    </Route>
                    <Route exact path="/aloqa">
                        <Aloqa />
                    </Route>
                    <Route exact path="/boglanish">
                        <Boglanish />
                    </Route>                    
                </Switch>                
                <Footer />
                </TestProvider>
                {/* </TestContext> */}
            </BrowserRouter>
        </div>
    )
}

export default App;
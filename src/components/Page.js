import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Home from "./homepage/Home";
import {MainContainer} from "./styled_elements/MainContainer";
import NavBar from "./navbar/NavBar";
import Footer from "./Footer";

const Page = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <MainContainer data-testid="main-container">
                    <NavBar/>
                    <Switch>
                        <Route
                            path="/"
                            render={(props) => <Home {...props}/>}
                            exact
                        />
                    </Switch>
                    <Footer/>
                </MainContainer>

            </BrowserRouter>
        </React.Fragment>
    );
};

export default Page;
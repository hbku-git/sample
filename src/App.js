import React from "react";

import Container from "./components/Container";

import {Route, Routes} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import buildStore from "./store/store";
import ThemePage from "./pages/ThemePage";
import HomePage from "./pages/HomePage";
import CTABlock from "./blocks/CTABlock";
import Footer from "./components/Footer";
import SearchPage from "./pages/SearchPage";

const {store, persistor} = buildStore();
const App = () => {

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Container>
{/*
                    <ScrollToTop/>
*/}
                    <Routes>
                        <Route exact path="/old-front" element={<HomePage/>}/>
                        <Route exact path="/" element={<SearchPage/>}/>
                    </Routes>

                    <Footer/>
                </Container>
            </PersistGate>
        </Provider>
    );
}

export default App;

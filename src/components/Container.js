import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import {Link} from "react-router-dom";
import MailingListBlock from "../blocks/MailingListBlock";
import {generalSelector} from "../store/reducers/generalReducer";
import {useSelector} from 'react-redux';
import Header from "./Header";
import MainBannerBlock from "../blocks/MainBannerBlock";
import ThemesBlock from "../blocks/ThemesBlock";


const Container = (props) => {
    const fontSize24 = {
        fontSize: 24
    }

    const {title} = useSelector(generalSelector);
    return (
        <>
        <Header />
            {props.children}
        </>
    )


};


export default Container;

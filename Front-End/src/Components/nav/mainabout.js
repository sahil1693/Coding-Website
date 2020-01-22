import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./navbar";
import About from "./about";
import Footer from './footer';
export default class Mabout extends Component {
    render() {
        return <>
            <Navbar></Navbar>
            <About></About>
            <Footer></Footer>
        </>
    }
}
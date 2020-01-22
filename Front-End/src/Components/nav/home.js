import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./contentfirst.css";
import Navbar from "./navbar";
import Contentfirst from "./content-first"
import Footer from './footer';
export default class Home extends Component {
    render() {
        return <>
            <div className="background12">
                <Navbar></Navbar>
                <Contentfirst></Contentfirst>
            </div>
            <Footer></Footer>
        </>
    }
}
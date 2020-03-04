import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"
import "./contentfirst.css";
export default class Contentfirst extends Component {
    render() {
        return <><div className="back">
            <span className="title1">RoyalCoding</span>
            <span className="title2">For those who love technology</span>
            <span className="title2">For Codding and Test signup</span>
            <Link to='/signup'>
                <button className="register">
                    Sign UP
        </button></Link>
        </div>
        </>
    }
}
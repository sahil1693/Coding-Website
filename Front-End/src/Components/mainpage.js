import React, { Component } from 'react';
import Signup from './loginsignup/signup';
import Login from './loginsignup/Login';
import { Route, Switch } from 'react-router-dom';
import Home from './nav/home';
import Feedback from './loginsignup/feedback';
import forgot from './loginsignup/forgot';
import Mabout from './nav/mainabout';
import Sample from './nav/sample';
import Sample1 from './nav/sample1';
import Mcq from './nav/mcq';
import User from "./User/user";
import Logout from './User/logout';
import Profile from './User/profile';
import UserDetail from "./User/UserDetail";
import StudentDetail from "./User/StudentDetail";
import Question from './User/Question';
import QuestionSolve from './User/QuestionSolve'
import createTest from "./test/createTest";
import showtest from "./User/showtest";
import showquestion from "./User/showquestion"
export default class MainPage extends Component {
    render() {
        return <div>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path="/Feedback" component={Feedback}></Route>
                <Route exact path="/about" component={Mabout}></Route>
                <Route exact path="/sample" component={Sample}></Route>
                <Route exact path="/mcq" component={Mcq}></Route>
                <Route exact path="/sample1/:varable1" component={Sample1}></Route>
                <Route exact path="/forgot" component={forgot}></Route>
                <Route exact path="/Signup" component={Signup}></Route>
                <Route exact path="/Login" component={Login}></Route>
                <Route exact path="/User" component={User}></Route>
                <Route exact path="/logout" component={Logout}></Route>
                <Route exact path="/Profile" component={Profile}></Route>
                <Route exact path="/UserDetail" component={UserDetail}></Route>
                <Route exact path="/StudentDetail" component={StudentDetail}></Route>
                <Route exact path="/Question" component={Question}></Route>
                <Route exact path="/QuestionSolve/:varable1" component={QuestionSolve}></Route>
                <Route exact path="/createTest" component={createTest}></Route>
                <Route exact path="/test" component={showtest}/>
                <Route exact path="/testSolve/:contestName/:passcode" component={showquestion}/>
            </Switch>
        </div>
    }
}

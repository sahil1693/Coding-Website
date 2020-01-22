import React,{Component} from "react";
import Axios from "axios";
import { Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../nav/footer";
import Nav from "../User/navbar";
export default class StudentDetail extends Component
{
    constructor()
    {
        super();
        const token = sessionStorage.getItem("token");
        let l = true
        if (token == null) {
          l = false
        }
        this.state={
            dat:[],
            l
        }
        const auth={authorization:'bearer '+sessionStorage.getItem("token1")}
        Axios.post("http://localhost:5000/userDetail",{headers:auth},"ss")
        .then((res)=>{
               this.setState({dat:res.data});
               console.log(this.state.dat);
        })
        .catch((res)=>{
                console.log('unauthorised');
        })
        this.change=this.change.bind(this);
    }
    change(a){
        const auth={authorization:'bearer '+sessionStorage.getItem("token1")}
    Axios.post('http://localhost:5000/userDetail/deleteuser',{headers:auth,sss:a})
    .then(res=>{
       alert('user deleted');
       window.location="/StudentDetail";
    })
    .catch(res=>{
    alert('user not deleted');
    })
    }
    render()
    {
        if (this.state.l === false) {
            return <Redirect to="/"></Redirect>
          }
        return <>
        <Nav></Nav>
         <center><h1>User Details</h1></center>
            <table className="table table-bordered table-dark">
                                <tr>
                                    <td><b>UserName</b></td>
                                    <td><b>Email</b></td>
                                    <td><b>Delete User</b></td>
                                </tr>
                                {
                                   this.state.dat.map(a=>{
                                      return a.isUser?<tr><td>{a.name}</td><td>{a.email}</td><td>
                                      <button onClick={()=>this.change(a._id)}>
                                          Delete
                                      </button>
                                      </td></tr>:<span></span>
                                   })
                                }
                            </table>
                            <Footer></Footer>
        </>
    }
}


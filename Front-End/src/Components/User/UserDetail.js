import React,{Component} from "react";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../nav/footer";
import Nav from "../User/navbar";
import { Redirect } from "react-router-dom";
var b=0;
export default class StudentDetail extends Component
{
    constructor()
    {
        super();
        b=0;
        const token = sessionStorage.getItem("token");
    let l = true
    if (token == null) {
      l = false
    }
        this.state={
            dat:[],l
        }
        const auth={authorization:'bearer '+sessionStorage.getItem("token1")}
        Axios.post("http://localhost:5000/userDetail",{headers:auth},"ss")
        .then((res)=>{
               this.setState({dat:res.data});
        })
        .catch((res)=>{
                alert('unauthorised');
        })
        this.change=this.change.bind(this);
        this.change1=this.change1.bind(this);
        this.change2=this.change2.bind(this);
    }
    change(a){
        const auth={authorization:'bearer '+sessionStorage.getItem("token1")}
    Axios.post('http://localhost:5000/userDetail/deleteuser',{headers:auth,sss:a})
    .then(res=>{
       alert('user deleted');
      window.location="/UserDetail"
    })
    .catch(res=>{
    alert('user not deleted');
    })
    }
    change1(a){
        const auth={authorization:'bearer '+sessionStorage.getItem("token1")}
        Axios.post('http://localhost:5000/userDetail/admin',{headers:auth,sss:a})
        .then(res=>{
           alert('admin added');
        })
        .catch(res=>{
        alert('admin not added');
        })
        }
        change2(a){
            const auth={authorization:'bearer '+sessionStorage.getItem("token1")}
            Axios.post('http://localhost:5000/userDetail/radmin',{headers:auth,sss:a})
            .then(res=>{
               alert('admin deleted');
            })
            .catch(res=>{
            alert('admin not deleted');
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
            <table className="table">
            <thead className="table-dark">
                                <tr>
                                {/* eslint-disable-next-line */}
                                    <td scope="col"><b>Sr.No</b></td>
                                    {/* eslint-disable-next-line */}
                                    <td scope="col"><b>UserName</b></td>
                                    {/* eslint-disable-next-line */}
                                    <td scope="col"><b>Email</b></td>
                                    {/* eslint-disable-next-line */}
                                    <td scope="col"><b>Delete User</b></td>
                                    {/* eslint-disable-next-line */}
                                    <td scope="col"><b>Add Admin</b></td>
                                    {/* eslint-disable-next-line */}
                                    <td scope="col"><b>Remove Admin</b></td>
                                </tr>
            </thead>
        {
         this.state.dat.map(a=>{
         return a.isUser||a.isAdmin?<tr><td>{b=b+1}</td><td>{a.name}</td><td>{a.email}</td>
        <td>
        <button onClick={()=>this.change(a._id)}>
         Delete
         </button>
        </td>
        <td>
         <button onClick={()=>this.change1(a._id)}>Add Admin</button>
        </td>
        <td>
        <button onClick={()=>this.change2(a._id)}>Remove Admin</button>
        </td></tr>:<span></span>})}
        </table>
        <Footer></Footer>
        </>
    }
}


import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewallFriend = () => {
    const[data,changeData]=useState([])
    const fetchData=()=>{
        axios.get(" https://friendsapi-re5a.onrender.com/view ").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch().finally()
    }
        useEffect(()=>{fetchData()},[]) 
    

           
   
    return (
        <div><br></br>
            <NavBar/>
            <br></br><h4><u><center>VIEWALL FRIENDS</center></u></h4><br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table table-bordered border-primary">
                            
                                <thead>
                                    <tr>
                                    <th scope="col">SNO</th>
                                        <th scope="col">NAME</th>
                                        <th scope="col">FriendName</th>
                                        <th scope="col">FriendNickName</th>
                                        <th scope="col">DescribeYourFriend</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   {data.map(
                                    (value,index)=>{
                                        return<tr>
                                        
                                            <td>{index+1}</td>
                                            <td>{value.name}</td>
                                            <td>{value.friendName}</td>
                                            <td>{value.friendNickName}</td>
                                            <td>{value.DescribeYourFriend}</td>
                                        </tr>
                                    }
                                   )}
                                   
                                </tbody>
                            </table>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewallFriend
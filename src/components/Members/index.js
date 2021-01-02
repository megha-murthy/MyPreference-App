import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
// import axios from 'axios';
// import './style.css';
import {Redirect, useHistory} from 'react-router-dom';

function Members (){
    const { logout } = useAuth0();

    // let [loc,setProfile] =useState({
    //     redir:null
    // });
    let [state, aravind]= useState('');
    // let redir=state.redir
    // let history = useHistory();

    // let redir=state.redir;

    function handleProfile(){
        console.log("reached!");
        aravind('/profile')
        // let redir=state.redir
        console.log("hhhh",state)
        // return (<Redirect to={{ pathname: '/profile' }}/>)
        // setState(abc=>console.log("handle change",abc))
        // // redir=true;
        // setProfile('/profile')
        // callProf();
        // console.log("after",redir)
    }
    // console.log("outside",state);
    //     // console.log("reached!")
    //     // // redir=true;
    //     // setProfile('/profile')
    //     // console.log(redir)

    //     // return callProf();
    //     // console.log("location is: ",loc)
    //     // setProfile({
    //     //     redir:'/profile'
    //     // });
    //     // console.log('new loc is ',loc)
    // }
    // function callProf(){
    // // //     console.log("R",redir)

    // // //     // history.push(redir);
    //     if(state){
    //         console.log("Yes",state)
    //     return <Redirect to={{ pathname: state }} />
    //     }
    // }

        return(
            <div>
            <h5>You have reached members page</h5>
            <button onClick={() => logout({ returnTo: window.location.origin })}>Logout </button>
            {/* <button className="profile" onClick={()=>{setProfile({...redir,redir:'/profile'})}}>Profile</button>  */}
            {/* <button className="profile" onClick={handleProfile}>Profile</button>  */}
            <button className="profile" onClick={handleProfile}>Profile</button> 
            {state?<Redirect to={{ pathname: state }}/>:''}
            
        </div>
        )
    
}

export default Members;
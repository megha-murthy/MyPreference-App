import React from 'react';
// import { useAuth0 } from "@auth0/auth0-react";
import { Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import DropdownButton from 'react-bootstrap/DropdownButton'
// import axios from 'axios';

class Sports extends React.Component{
    state={
        redirectTo:null
    }
    constructor(){
        super()
        this.handleSubmit=this.handleSubmit.bind(this)
    } 
    handleSubmit(){
        console.log("Sub")
        this.setState({
            redirectTo:'/members'
        })
        // axios.post('/continue',(req,res)=>{

        // })
        // this.setState({
        //     redirectTo: 'https://meghamurthy.us.auth0.com/continue?state=g6Fo2SBCX3MwYjIzbm1NVnhRUGhlUnYzRnYyVFlKUGNmaU5sR6N0aWTZIFFjbjY0eHM1MWh6a1JUMXllNUVXTHAtLVNlOTRSc2l4o2NpZNkgNk0zQ2R0bGE4eFdRbnNIOGl1WUZFeERBWFFDTVRmWlQ'
        // },()=>{console.log("callback",this.state.redirectTo)})
    }
    render(){
        console.log("redirect",this.context)
        if (this.state.redirectTo) {
                return <Redirect to={{ pathname: this.state.redirectTo }} />
            }
            else{
        return(
            <div>
                <h1>Choose Match</h1>
                <div className="checks1">
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Past
                    </label>
                    </div>
                    <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Current Match
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Coming Up!
                    </label>
                </div>
                </div>

                 <button type="submit" onClick={this.handleSubmit.bind(this)}>SUBMIT</button>
            </div>
            
        )
        }
    }
}

export default Sports;

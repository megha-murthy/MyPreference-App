import React from 'react';
// import { useAuth0 } from "@auth0/auth0-react";
import { Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import  Radio  from '../Radio.js';
// import DropdownButton from 'react-bootstrap/DropdownButton'
// import axios from 'axios';

class Sports extends React.Component{
    state={
        redirectTo:null,
        category: [
            {id: 1, value: "Past Matches", isChecked: false},
            {id: 2, value: "Current Match", isChecked: false},
            {id: 3, value: "Coming Up", isChecked: false},
            {id: 4, value: "All Matches", isChecked: false}
        ],

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

    handleCheckChildElement = (event) => {
        // console.log("@@@@",event.target.checked)
        console.log("CAT",this.state.category)
        let category = this.state.category
        category.forEach(ele=>{
            if(ele.value===event.target.value){
                console.log("val",ele.value)
                ele.isChecked =  event.target.checked
            }else{
                ele.isChecked =  false
            }
        })
        this.setState({category: category})
       
    //     let category = this.state.category
    //     category.forEach(ele => {
    //         if (ele.value === event.target.value)
    //         ele.isChecked =  event.target.checked
    //   })
    //   this.setState({category: category})
    //   console.log("@@@@"+event.target.value)
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

                {/* <div className="form-check">
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
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        All Matches
                    </label>
                </div> */}

                {this.state.category.map((cat,index)=>{
                    return (<Radio className = "category" key={index} handleCheckChildElement={this.handleCheckChildElement}  {...cat} />)
                }

                )}


                </div>

                 <button type="submit" onClick={this.handleSubmit.bind(this)}>SUBMIT</button>
            </div>
            
        )
        }
    }
}

export default Sports;

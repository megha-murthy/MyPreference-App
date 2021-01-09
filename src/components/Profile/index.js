import React from 'react';
import { Link} from "react-router-dom";

import '../../App.css'

class Profile extends React.Component{
    constructor(){
        super()
        this.handleNext=this.handleNext.bind(this)
        
    } 

    handleChange(event){
        console.log("hi",event.target.value);
    }

    
    handleNext(){
        console.log("Reached here")
        this.setState({
            redirectTo: '/sports'
        },()=>{console.log(this.state.redirectTo)})
    }
    render(){
        // console.log("redir",this.state.redirectTo)
        // if (this.state.redirectTo) {
        //     return <Redirect to={{ pathname: this.state.redirectTo }} />
        // }
        // else{
        return(
            <div>
                <h2>Profile page</h2>
                <div>
                    <h5 className="profileHead">Please enter your due dates:</h5>
                <form>
                    <div className="mb-3 date1">
                        <label htmlFor="internet" className="form-label ">Xfinity</label>
                        <input type="date" className="form-control internet" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.handleChange.bind(this)}/>
                    </div>
                    <div className="mb-3 date2">
                        <label htmlFor="electricity" className="form-label">Puget Sound Energy</label>
                        <input type="date" className="form-control electricity" id="exampleInputPassword1"onChange={this.handleChange.bind(this)} />
                    </div>
                    <div className="mb-3 date3">
                        <label htmlFor="rent" className="form-label">Rent</label>
                        <input type="date" className="form-control electricity" id="exampleInputPassword1" onChange={this.handleChange.bind(this)}/>
                    </div>
                    <div className="mb-3 date4">
                        <label htmlFor="dmv" className="form-label">DMV License Renewal</label>
                        <input type="date" className="form-control electricity" id="exampleInputPassword1" onChange={this.handleChange.bind(this)}/>
                    </div>
                </form>
                </div>
                <button className="next"> <Link to ='/sports' className = "sportsLink">Next</Link></button>
                 {/* <button type="submit" onClick={()=>this.handleNext}>Next</button> */}
            </div>
            
        )
    }
    

}

export default Profile;
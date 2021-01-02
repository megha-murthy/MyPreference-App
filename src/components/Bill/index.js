import React from 'react';
// import { useAuth0 } from "@auth0/auth0-react";
import { Link} from "react-router-dom";

class Bill extends React.Component{
    // state={
    //     redirectTo:true
    // }
    constructor(){
        super()
        this.handleNext=this.handleNext.bind(this)
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
                <h1>Bill Page</h1>
                <button> <Link to ='/sports' className = "sportsLink">Next</Link></button>
                 {/* <button type="submit" onClick={()=>this.handleNext}>Next</button> */}
            </div>
            
        )
        }
    // }
}

export default Bill;

import React, {Component} from "react";
import './LeftBody.css';
import profile from "../images/profile.png"



class AppBody extends Component {
    render(){
        return(
            
            
                <div class = "left-menu">
                    <figure>
                        <div class = "picture">
                            <img class = "profile"
                                src={profile}
                            /> 
                            <br></br>
                            Yesid Velasquez
                        </div>
                    </figure>
                    
                    <a class = "botton" href="CLASS"><b><br></br>DashBoard</b></a>&nbsp;
                    <a class = "second-botton" href="CLASS"><b><br></br>User</b></a>&nbsp; 
                </div>
                
            
                    
            
            
        );
    }}

export default AppBody;

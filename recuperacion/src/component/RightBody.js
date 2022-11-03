import React, {Component} from "react";
import './RightBody.css';
import profile from "../images/profile.png"
import galaxy from "../images/galaxia.jpg"
import galaxy2 from "../images/galaxia2.jpg"
import video from "../images/movimiento.mp4"
import america from "../images/america.png"


class AppHeader extends Component {
    render(){
        return(

            <div class = "right-menu">
                    <div class = "title">
                        Galaxy
                    </div>
                    
                    <img class = "images" src={profile}/> 
                    
                    
                    <div class = "first-frame">

                        <img class = "galaxy" src={galaxy}/> 

                    </div>

                    <div class = "second-frame"> 
                        <img class = "galaxy2" src={galaxy2}/> 
                    </div>
                    

                    <div class = "fourh-frame"> 
                        <video class = "video" src={video } autoplay="true" muted="true" loop="true"  />
                    </div>

                    <img class = "america" src={america}/> 
                   

            </div>
                    
            
        
        );
    }

}   

export default AppHeader;


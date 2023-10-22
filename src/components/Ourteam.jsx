import React from 'react';
import {ImageContents} from "./PrincipleData";
import OurteamImages from "./OurteamImages";

function GetImages(ImageContents) {
    return (
        <OurteamImages.OurteamImages
            className={ImageContents.className}
            src={ImageContents.src}
            alt={ImageContents.alt}
        />
    );
}
                                                                                                                                                                                                                                                                                                                                            

function Ourteam(){
  return(
    <div className="div0">
        <div className="pattern2"><OurteamImages.Pattern/></div>
        
        <h3 className="ourteam-h3">OUR TEAM</h3>
        <h2 className="ourteam-h2">Building is in our DNA</h2>
        <p>We are fully remote of 6 digital marketers, engineers, product manager, designer, you name it, spanned across 4 timezones. We're driven by our goal to revolutionize interview and we build towards that goal every day.</p>
       <div className="pics">{ImageContents.map(GetImages)}</div>   
        <div className="pattern1"><OurteamImages.Pattern/></div>
        
    </div>
  )
}
function Always(){
    return(
        <div class="div">
        <h3 className="ourteam-h3">ALWAYS LISTEN</h3>
        <h2 className="ourteam-h2">Want to leave us some feedback
            or say what is up?</h2>
            <form>
                <div>
                    <label for="name">YOUR NAME*</label><br/>
                    <input type="text"/><br/>
                </div>
                <div>
                    <label for="name">YOUR EMAIL*</label><br/>
                <input type="text"/><br/>

                </div>
                
                <div>
                    <label for="name">YOUR MESSAGE*</label><br/>
                    <input type="text"/><br/>
                </div>
               <div>
                <button className="send-button">Send message</button>
               </div>
                
            </form>
    </div>
    )
}


export default {Ourteam ,  Always};
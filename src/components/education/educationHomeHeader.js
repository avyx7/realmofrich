import { auth } from '../../App';
import React, { useState, useEffect} from 'react';
import ProfileMenu from '../../layouts/profileMenu';
import ShopButton from './shopButton';

function EducationHomeHeader(props) {
    const [pulse, setpulse] = useState(true);
    const { uid, photoURL } = auth.currentUser;

    const togglepulse= ()=>{
        setpulse(!pulse);
    }


    return (
        <>
            <div className="educationhomeheader"
                            onMouseEnter={togglepulse}
                            onMouseLeave={togglepulse}
            >


                <div className="wrapper">
                    <div class="searchBar">
                        <input id="searchQueryInput" type="text" name="searchQueryInput" placeholder="Search for People, Group, Services" value="" />
                        <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">
                        <svg className="searchicon" viewBox="0 0 24 24"><path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                        </svg>
                        </button>
                    </div>
                </div>
                <div className="profilecontainer">
                    <div className="profilegrid">
                        <div className="vip"><img src = "../icons/002-coin.png" alt = "vip icon" onClick = {()=>props.toggleopenclose()}/></div>
                        
                        <div className="shoppingcart">
                        <i className= "fi fi-rr-shopping-cart carticon"></i>
                        </div>

                        <div className="profile"><img className = {"profilepic "+(pulse ? "pulse-button":'')}
                        src = {photoURL || "../icons/profilepic-min.png"} alt = "profile pic"
                        onClick = {()=>props.setprofilemenu()}
                        /></div>
                    </div>
                    <div className='profilemenucontainer'>
                        <ProfileMenu
                            profilemenu = {props.profilemenu}
                            onClick = {()=> props.setprofilemenu}
                            toggleopenclose = {props.toggleopenclose}

                            setlogout = {()=>SignOut }
                        />
                    </div>
                    
                </div>
                
            </div>

            <div className="educationsubheader" onClick = {()=>props.openeducationShop()}>
                
                <ShopButton/>
            </div>
        </>
    );

}

function SignOut() {
    
        if (auth.currentUser){
            //auth.signOut();
        }
      

  }


export default EducationHomeHeader;
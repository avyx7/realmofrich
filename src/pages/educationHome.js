import React, { useEffect, useState} from 'react';
import EducationHomeHeader from "../components/education/educationHomeHeader";
import EducationCarousel from "../components/education/educationCarousel";
import '../assets/educationHome.css';
import '../assets/group.css';
import '../assets/chat.css';
import DogAnimated from "../features/dogAnimated";
import ChatModule from "../features/chat/chatmodule";
import UpgradeVIP from "../components/upgradeVIP";
import Modal from 'react-modal';
import close from "../assets/icons/close.png";
import firebase from "firebase/app";
import 'firebase/firestore';
import EducationShop from '../components/education/educationShop';
import Vimeo from '../services/vimeo';

import img1 from "../assets/icons/001-medal.png";import img2 from "../assets/icons/001-podium.png";import img3 from "../assets/icons/mygroups.png";
import img4 from "../assets/icons/group-min.png";import img5 from "../assets/icons/notification-min.png";import img6 from "../assets/icons/mail-min.png";
import img7 from "../assets/icons/029-gift-box-min.png";
import shopFront from "../assets/education/shop_front_curved2.png";import megasale from "../assets/education/mega_sale.png";

import Achievementmodal, { MyGuilds, Friends, Alerts, Mail } from '../components/education/flowermenumodals';import {Leaderboard} from '../components/education/flowermenumodals';
import {CreateGuild} from '../components/education/flowermenumodals';

const educationShopStyles = {
    content: {
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        border: 'none',
        padding:'0',
        background: 'none',
    },
  };
const customStyles = {
    content: {
        top: '10vh',
        right: '23vw',
        bottom: '10vh',
        left: '23vw',
        border: 'none',
        padding:'0',
        background: 'none',
    },
  };
  

function EducationHome() {
    const [chatOpen, setchatOpen] = useState(true);
    const [profilemenu, setprofilemenu] = useState(false);
    const [upgradeVIP, setupgradeVIP] = useState(false);
    const [educationShopIsOpen, seteducationShopIsOpen] = useState(false);
    const [flowermenuIsOpen, setflowermenuIsOpen] = useState(false);
    const [FlowermodalIsOpen, setFlowermodalIsOpen] = useState(false);
    const [FlowermodalOption, setFlowermodalOption] = useState('');
    const [flowermenuAchievement, setflowermenuAchievement] = useState('');
    const [flowermenuAchievementAlert, setflowermenuAchievementAlert] = useState(0);
    const [flowermenuLeaderboard, setflowermenuLeaderboard] = useState('');
    const [flowermenuLeaderboardAlert, setflowermenuLeaderboardAlert] = useState(0);
    const [flowermenuCreateGroup, setflowermenuCreateGroup] = useState('');

    const [flowermenuFriends, setflowermenuFriends] = useState('');
    const [flowermenuFriendsAlert, setflowermenuFriendsAlert] = useState(0);
    const [flowermenuMygroups, setflowermenuMygroups] = useState('');

    const [flowermenuAlerts, setflowermenuAlerts] = useState('');
    const [flowermenuAlertsAlert, setflowermenuAlertsAlert] = useState(0);
    const [flowermenuMail, setflowermenuMail] = useState('');
    const [flowermenuMailAlert, setflowermenuMailAlert] = useState(0);
    const [flowermenuGiftbox, setflowermenuGiftbox] = useState('');
    const [flowermenuGiftboxAlert, setflowermenuGiftboxAlert] = useState(0);

    let unsubscribe;

    const togglechatOpen = ()=> {
        setchatOpen(!chatOpen);
    }
    const toggleprofilemenu = ()=> {
        setprofilemenu(!profilemenu);
    }
    const toggleupgradeVIP = ()=> {
        setupgradeVIP(!upgradeVIP);
    }
    const toggleflowermenu = ()=> {
        setflowermenuIsOpen(!flowermenuIsOpen);
    }
    function openeducationShop() {
        seteducationShopIsOpen(true);
    }
    function closeeducationShop() {
        seteducationShopIsOpen(false);
    }

    //<-----------------------------Flower Menu -------------------------------->
    function openFlowerModal(option) {
        setFlowermodalOption(option);
        setFlowermodalIsOpen(true);
    }
    /*
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }
    */
    function closeFlowerModal() {
        setFlowermodalIsOpen(false);
    }
    
    /*
    function readFlowermenu(){
        const dataref = firestore.collection('flowermenu/doc/achievement/');
        if (flowermenuAchievement == null){
            unsubscribe = dataref.onSnapshot((querySnapshot) => {
                // Respond to data
                console.log (querySnapshot);

              })
        }
    }
    */
    //<--------------------------End of Flower Menu ----------------------------->
    useEffect(()=>{

        //attching Snapshot Listener
        const dataref = firebase.firestore().collection("flowermenu/doc/achievement/");
        if (flowermenuAchievement == ''){
            setflowermenuAchievement('false');
            console.log('flowermenuAchievement');
            unsubscribe = dataref.onSnapshot((querySnapshot) => {
                // Respond to data
                var cities = [];
                querySnapshot.forEach((doc) => {
                    cities.push(doc.data().heading);
                });
                console.log("Current cities in CA: ", cities.join(", "));
                setflowermenuAchievementAlert(flowermenuAchievementAlert+1);
            })
        }


        //Adding External Javascript script files here
            const script = document.createElement('script');
            script.src = "/jsfiles/addons.js";
            script.async = true;
            document.body.appendChild(script);
        return function cleanup(){
            // Stop listening to changes
            unsubscribe();
        };
    },[])
        /*if (this.state.upgradeVIP) {
            return (<UpgradeVIP
                setupgradeVIP = {()=>this.setupgradeVIP}
                 />)
        }else
        */
     return (
        <>
                {/*---------------------------------Education Shop------------------------------------ */}
                <div className={educationShopIsOpen? 'educationmodalcontainer' : 'not-active'}>
                    <div className='educationmodalhead'>
                        <div className='educationmodalheadcontainer'>
                            <div className='educationmodalheadtext'>
                                <img className='educationshopfront' src = {shopFront} />
                                <img className='megasale' src = {megasale} />
                            </div>
                            <div className='educationmodalclosebutton' >
                                <img src = {close} onClick={closeeducationShop}/>
                            </div>
                        </div>
                    </div>
                    <div className='educationmodalcontent' id = "educationmodalcontentid">
                        
                        <EducationShop/>
                    </div>
                </div>

                {/*---------------------------------Pricing page------------------------------------ */}
                <div className={upgradeVIP? '' : 'not-active'}>
                <UpgradeVIP
                toggleopenclose = {toggleupgradeVIP}
                 />
                </div>

                {/*---------------------------------Flower menu Modals------------------------------ */}


                <div className={flowermenuIsOpen? 'flowermodaloverlay' : 'not-active'}>       
                <div className='flowermodal' id = 'flowermodal'>
                <div className='modalcontainer'>
                        <div className='modalhead'>
                            <div className='modalheadcontainer'>
                                <div className='modalheadtext'>
                                </div>
                                <div className='modalclosebutton' >
                                <img src = {close} onClick={toggleflowermenu}/>
                                </div>
                            </div>
                        </div>
                        <div className='modalcontent'>

                    <div className='flowermenu'>
                        <div className='flowermenu_achievement' onClick={()=> openFlowerModal('achievement')}></div>
                        <div className='flowermenu_leaderboard' onClick={()=> openFlowerModal('leaderboard')}></div>
                        <div className='flowermenu_creategroup' onClick={()=> openFlowerModal('creategroup')}></div>
                        <div className='flowermenu_friends' onClick={()=> openFlowerModal('friends')}></div>
                        <div className='flowermenu_mygroups' onClick={()=> openFlowerModal('mygroups')}></div>
                        <div className='flowermenu_alerts' onClick={()=> openFlowerModal('alerts')}></div>
                        <div className='flowermenu_mail' onClick={()=> openFlowerModal('mail')}></div>
                        <div className='flowermenu_giftbox' onClick={()=> openFlowerModal('giftbox')}></div>
                    </div>
                </div>
                </div>
                </div>
                </div>

            <div className={FlowermodalIsOpen? 'flowermodaloverlay' : 'not-active'}>       
                <div className='flowermodal'>
                    <div className='modalcontainer'>
                        <div className='modalhead'>
                            <div className='modalheadcontainer'>
                                <div className='modalheadtext'>
                                {FlowermodalOption == 'achievement'? 'Achievement': FlowermodalOption == 'leaderboard' ? 'Leaderboard' : 
                                FlowermodalOption == 'creategroup' ? 'Create Guild' : FlowermodalOption == 'friends' ? 'Friends' :
                                FlowermodalOption == 'mygroups' ? 'My Guilds' : FlowermodalOption == 'alerts' ? 'Alerts' :
                                FlowermodalOption == 'mail' ? 'Mail' : FlowermodalOption == 'giftbox' ? 'Giftbox' : "Else"
                                }
                                </div>
                                <div className='modalclosebutton' >
                                <img src = {close} onClick={closeFlowerModal}/>
                                </div>
                            </div>
                        </div>
                        <div className='modalcontent' id = {FlowermodalOption == 'creategroup' ? 'modalcontent':''}>
                                {FlowermodalOption == 'achievement'? <Achievementmodal/>: FlowermodalOption == 'leaderboard' ? <Leaderboard/> : 
                                FlowermodalOption == 'creategroup' ? <CreateGuild/> : FlowermodalOption == 'friends' ? <Friends/> :
                                FlowermodalOption == 'mygroups' ? <MyGuilds/> : FlowermodalOption == 'alerts' ? <Alerts/> :
                                FlowermodalOption == 'mail' ? <Mail/> : FlowermodalOption == 'giftbox' ? 'Giftbox' : "Else"
                                }
                        </div>
                    </div>
                </div>
            </div>
                {/*---------------------------------end of Flower menu Modals------------------------------ */}
                {/*---------------------------------Cart------------------------------ */}
            {/*<div className={FlowermodalIsOpen? 'flowermodaloverlay' : 'not-active'} onClick={closeFlowerModal}>       
                <div className='flowermodal'>
                    <div className='modalcontainer'>
                        <div className='modalhead'>
                            <div className='modalheadcontainer'>
                                <div className='modalheadtext'>
                                {FlowermodalOption == 'achievement'? 'Achievement': FlowermodalOption == 'leaderboard' ? 'Leaderboard' : 
                                FlowermodalOption == 'creategroup' ? 'Create Guild' : FlowermodalOption == 'friends' ? 'Friends' :
                                FlowermodalOption == 'mygroups' ? 'My groups' : FlowermodalOption == 'alerts' ? 'Alerts' :
                                FlowermodalOption == 'mail' ? 'Mail' : FlowermodalOption == 'giftbox' ? 'Giftbox' : "Else"
                                }
                                </div>
                                <div className='modalclosebutton' >
                                <img src = {close} onClick={closeFlowerModal}/>
                                </div>
                            </div>
                        </div>
                        <div className='modalcontent'>
                                {FlowermodalOption == 'achievement'? <Achievementmodal/>: FlowermodalOption == 'leaderboard' ? <Leaderboard/> : 
                                FlowermodalOption == 'creategroup' ? <CreateGuild/> : FlowermodalOption == 'friends' ? 'Friends' :
                                FlowermodalOption == 'mygroups' ? 'My groups' : FlowermodalOption == 'alerts' ? 'Alerts' :
                                FlowermodalOption == 'mail' ? 'Mail' : FlowermodalOption == 'giftbox' ? 'Giftbox' : "Else"
                                }
                        </div>
                    </div>
                </div>
                            </div>*/}
                {/*---------------------------------end of Cart------------------------------ */}
            <EducationHomeHeader
            profilemenu = {profilemenu}
            setprofilemenu = {toggleprofilemenu}
            toggleopenclose = {toggleupgradeVIP}
            openeducationShop = {openeducationShop}
            //setlogout = {setlogout}
            />
            <div id="main">
            <EducationCarousel/>
            <div className='mainContent'>
                <div className='Main_achievement' onClick={()=> openFlowerModal('achievement')}>
                    Achievement
                    <img src={img1} />
                </div>
                <div className='Main_leadersboard' onClick={()=> openFlowerModal('leaderboard')}>
                    Leaderboard
                    <img src={img2} />
                </div>
                <div className='Main_mygroups' onClick={()=> openFlowerModal('mygroups')}>
                    My groups
                    <img src={img3} />
                </div>
                <div className='Main_searchgroup' onClick={()=> openFlowerModal('creategroup')}>
                    Create Guild
                    <img src={img4} />
                </div>
                <div className='Main_friend' onClick={()=> openFlowerModal('friends')}>
                    Friends
                </div>
                <div className='Main_alerts' onClick={()=> openFlowerModal('alerts')}>
                    Alerts
                    <img src={img5} />
                </div>
                <div className='Main_mail' onClick={()=> openFlowerModal('mail')}>
                    Mail
                    <img src={img6} />
                </div>
                <div className='Main_gifts' onClick={()=> openFlowerModal('giftbox')}>
                    Gifts
                    <img src={img7} />
                </div>
            </div>

            <div className='videoTabs'>
                <button class="videoTab1">Premium</button>
                <button class="videoTab2">Not Premium</button>
            </div>
            
                {/*<Vimeo/>*/}
            
            

            <Chat 
                chatOpen= {chatOpen}
                setchatOpen = {togglechatOpen}
                toggleflowermenu = {toggleflowermenu}
                flowermenuOpen = {openFlowerModal}
                flowermenuAchievementAlert = {flowermenuAchievementAlert}
                flowermenuLeaderboardAlert = {flowermenuLeaderboardAlert}

                flowermenuFriendsAlert = {flowermenuFriendsAlert}
                flowermenuAlertsAlert = {flowermenuAlertsAlert}
                flowermenuMailAlert = {flowermenuMailAlert}
                flowermenuGiftboxAlert = {flowermenuGiftboxAlert}
            />

            </div>

        </>


    );

}

    function Chat(props) {
        /*
        const [addmargin, setaddmargin] = useState(false);
        const toggleaddmargin = ()=>{
            setaddmargin(!addmargin);
        }
        */

            return(
            <div className={"sticktobottom"+(props.chatOpen ? "":' sticktobottom-inactive')/*+(addmargin ? ' addmargintochat' :'')*/}>
            <DogAnimated/>
            
            <ChatModule 
            chatOpen ={props.chatOpen}
            onClick = {()=> props.setchatOpen}
            toggleflowermenu = {props.toggleflowermenu}
            flowermenuOpen = {props.flowermenuOpen}
            flowermenuAchievementAlert = {props.flowermenuAchievementAlert}
            flowermenuLeaderboardAlert = {props.flowermenuLeaderboardAlert}

            flowermenuFriendsAlert = {props.flowermenuFriendsAlert}
            flowermenuAlertsAlert = {props.flowermenuAlertsAlert}
            flowermenuMailAlert = {props.flowermenuMailAlert}
            flowermenuGiftboxAlert = {props.flowermenuGiftboxAlert}
            /*addmargin = {toggleaddmargin}*/
            />
            </div>
            );
    }
    
export default EducationHome;
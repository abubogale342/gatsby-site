import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
     
    }

    render() {
        return (
            <div className="wrapper">
                <nav id="sidebar" >
                    <div className="sidebar-header" style={{display: 'block'}}>
                        <div className="sideList">
                            <ul>
                                <Link to='/'> <li>Questions</li> </Link>
                                <Link to='/aboutUs'> <li>About Us</li> </Link>
                            </ul>                            
                        </div>
                        <div style={{display: "inline-block", marginTop: "10px"}}> 
                            <div style={{marginLeft:'50px'}}>
                            <Link to='/' ><img className="vorailLogo" src={require('../../images/icon100.png')} alt='Vorail logo' style={{display: "inline-block" , float: "left"}} /></Link>
                            </div> 
                            <div className="titleWrapper">
                                <a href="https://itunes.apple.com/us/app/vorail/id1050527832?ls=1&amp;mt=8" title="Download Vorail from the App Store" target="_blank"> <img src="https://www.vorail.com/appStore.png" width="100" height="30" alt="" /> </a>
                                <a href="https://play.google.com/store/apps/details?id=com.vorail.vorailonandroid" title="Download Vorail from the Google Play" target="_blank"> <img src="https://www.vorail.com/android.png" width="100" height="30" alt="" /> </a>
                            </div>
                        </div>
                        <div>
                            <p style={{fontWeight:'700'}}><b>Everyone deserves the chance to be loved for who they are. Join and start conversations in Voice.</b></p>
                        </div>
                        <div>
                            <audio style={{width:'30%'}} src={"https://www.vorail.com/Vorail-ad-190726.mp3" } controls preload="none" />
                        </div>
                    </div>
                   
                </nav>
            </div>
          

        )
    }
}

export default Header;

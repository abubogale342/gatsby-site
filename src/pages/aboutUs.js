import React from 'react';
import '../components/App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer'

const AboutUs = () =>{
    return(
        <React.Fragment>
            <Header />
                <div className="App" >We are Vorail</div>
            <Footer />
        </React.Fragment>
    )
}

export default AboutUs;
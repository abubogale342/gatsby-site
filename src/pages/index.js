import React from "react";
import Header from '../components/Header/Header'
import { Route, HashRouter as Router, Switch} from "react-router-dom";
import AboutUs from './aboutUs'
import App from '../components/questions/QuestionList'
import Answer from './answers'
import Footer from '../components/Footer/Footer'


export default function Home() {
  return (
    <Router basename="/">
            <React.Fragment>
                <Header />
                    <Switch>
                    
                    <Route path='/answer/:key' exact component={Answer} />
                    <Route path='/aboutUs' exact component={AboutUs} ></Route>
                    <Route path="/" exact component={App} />
                    </Switch>
                <Footer />
            </React.Fragment>
        </Router>
  )
}

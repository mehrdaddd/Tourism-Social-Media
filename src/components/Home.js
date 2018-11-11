import React, {Component} from 'react';
import 'antd/dist/antd.css';
import './App.css';
import Ad from "./Ad";
import {Layout} from 'antd';
import MediaQuery from 'react-responsive';
import {BrowserRouter as Router} from 'react-router-dom';
import Multifunctionall from './organizations/Multifunctionall';
import Accommodation from './organizations/Accommodation';
import Flights from './organizations/Flights';
import Information from './organizations/Information';
import Restaurants from './organizations/Restaurants';
import Social from './organizations/Social medias';
import Taxi from './organizations/Taxi and rental car';
import Tools from './organizations/Tools';
import Tours from './organizations/Tours';
import Train from './organizations/Train tickets';

const {Content, Sider} = Layout;

class Home extends Component {

    render() {


        return (
            <Router>
                <div className="App">

                    <div className="container">



                        <h1 className="page">
                            The Best Tourism Companies
                        </h1>
                    </div>

                    <Layout>

                        <MediaQuery minWidth={800}>
                            <Sider className="sider" width={300}>
                                <Ad/>
                                <Ad/>
                                <Ad/>
                            </Sider>
                        </MediaQuery>

                        <Content className="contentt">

                            <Multifunctionall/>
                            <Accommodation/>
                            <Flights/>
                            <Train/>
                            <Taxi/>
                            <Restaurants/>
                            <Tours/>
                            <Information/>
                            <Tools/>
                            <Social/>

                        </Content>

                    </Layout>

                </div>

            </Router>

    );
    }
    }


    export default Home;

import React, {Component} from 'react';
import 'antd/dist/antd.css';
import './App.css';
import {Panel, ListGroup, ListGroupItem} from 'react-bootstrap';
import Star from './Star';
import Commentt from "./Commentt";
import Ad from "./Ad";
import {Layout} from 'antd';
import MediaQuery from 'react-responsive';
import {BrowserRouter as Router} from 'react-router-dom';

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
                        <Panel className="table">
                            <Panel.Heading><h1>Multifunctional </h1></Panel.Heading>
                            <Panel.Body>Introduce websites that has provided variety of services</Panel.Body>
                            <ListGroup>
                                <ListGroupItem> <a className="items" href="https://www.expedia.com"> Expedia </a>

                                    <p>Expedia is a travel booking website owned by Expedia Group. The website can be
                                        used
                                        to book airline tickets, hotel reservations, car rentals, cruises and vacation
                                        packages.</p>
                                    <Star/>
                                    <Commentt/>
                                </ListGroupItem>


                                <ListGroupItem> <a className="items" href="https://www.Booking.com"> Booking </a>
                                    <p>Booking is a travel meta search engine for lodging reservations for
                                        Accommodation, Flight, Taxi and Restaurant. </p>
                                    <Star/>


                                    <Commentt/>
                                </ListGroupItem>


                                <ListGroupItem> <a className="items"
                                                   href="https://www.tripadvisor.com"> Tripadvisor </a>
                                    <p>TripAdvisor is a we travel website company providing hotel and restaurant
                                        reviews,
                                        accommodation bookings and other travel-related content. It also includes
                                        interactive travel forums.</p>
                                    <Star/>
                                    <Commentt/>
                                </ListGroupItem>
                                <ListGroupItem> <a className="items" href="https://www.kayak.com/"> Kayak</a>
                                    <p> Search hundreds of travel sites at once. </p>
                                    <Star/>
                                    <Commentt/>
                                </ListGroupItem>
                                <ListGroupItem>&hellip;</ListGroupItem>
                            </ListGroup>
                        </Panel>
                        <Panel className="table">
                            <Panel.Heading><h1>Booking Accommodation </h1></Panel.Heading>
                            <Panel.Body></Panel.Body>
                            <ListGroup>
                                <ListGroupItem> <a className="items" href="https://www.hotels.com/">Hotels</a>

                                    <p>Hotels.com is a website for booking hotel rooms online and by telephone. The
                                        company has 85 websites in 34 languages,
                                        and lists over 325,000 hotels in approximately 19,000 locations.</p>
                                    <Star/>
                                    <Commentt/>
                                </ListGroupItem>

                                <ListGroupItem> <a className="items" href="https://www.airbnb.com"> Airbnb</a>
                                    <p>Airbnb is a company which operates an online marketplace and hospitality service
                                        for people to lease or
                                        rent short-term lodging including holiday cottages, apartments, homestays,
                                        hostel beds, or hotel rooms,
                                        to participate in or facilitate experiences related to tourism such as walking
                                        tours,
                                        and to make reservations at restaurants. </p>
                                    <Star / >
                                    <Commentt/>
                                </ListGroupItem>

                                <ListGroupItem> <a className="items" href="https://www.trivago.com/"> trivago </a>
                                    <p>Trivago's hotel search engine has websites in 50+ countries, Trivago's search
                                        tool scans hotel booking sites for prices, availability, images and reviews
                                        within seconds.
                                        When users choose a hotel, they are redirected to a partner website to complete
                                        the booking.</p>
                                    <Star/>
                                    <Commentt/>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <a className="items" href="https://www.homeaway.com/"> Homeaway </a>
                                    <p>HomeAway, is a vacation rental marketplace with more than 2,000,000 vacation
                                        rentals in 190 countries.
                                        It operates through 50 websites in 23 languages. The company offers a
                                        comprehensive selection of rentals
                                        for families and groups to find accommodations such as cabins, condos, castles,
                                        villas, barns and farm houses.</p>
                                    <Star/>
                                    <Commentt/>
                                </ListGroupItem>

                                <ListGroupItem>&hellip;</ListGroupItem>
                            </ListGroup>
                        </Panel>

                        <Panel className="table">
                            <Panel.Heading><h1>Booking flights </h1></Panel.Heading>
                            <Panel.Body></Panel.Body>
                            <ListGroup>

                                <ListGroupItem> <a className="items"
                                                   href="https://matrix.itasoftware.com/">Itasoftware</a>
                                    <p>ITA Software is a travel industry software division of Google, that provides
                                        services like search by airport code, city and
                                        explore date ranges and lowest fares.</p>
                                    <Star/>
                                    <Commentt/>
                                </ListGroupItem>

                                <ListGroupItem> <a className="items" href="https://adioso.com/"> Adioso</a>
                                    <p> A website that provides services to find cheapest and best ticket's flights.</p>
                                    <Star/>
                                    <Commentt/>
                                </ListGroupItem>

                                <ListGroupItem>&hellip;</ListGroupItem>
                            </ListGroup>
                        </Panel>

                        <Panel className="table">
                            <Panel.Heading><h1>Booking Train Tickets </h1></Panel.Heading>
                            <Panel.Body></Panel.Body>
                            <ListGroup>

                                <ListGroupItem> <a className="items" href="https://seat61.com/">Seat61</a>
                                    <p>The website focuses almost exclusively on train-based travel, with occasional
                                        ferry recommendations</p>
                                    <Star/>
                                    <Commentt/>
                                </ListGroupItem>
                                <ListGroupItem>&hellip;</ListGroupItem>
                            </ListGroup>
                        </Panel>

                        <Panel className="table">
                            <Panel.Heading><h1>Taxi And rental Car</h1></Panel.Heading>
                            <Panel.Body></Panel.Body>
                            <ListGroup>

                                <ListGroupItem> <a className="items" href="https://www.rentalcars.com//">Rentalcars</a>

                                    <p>A car rental, hire car, or car hire agency is a company that rents automobiles
                                        for short periods of time,
                                        generally ranging from a few hours to a few weeks.
                                        Clients search, book and pay for hire cars on Rentalcars.com, and the bookings
                                        are fulfilled by car rental companies. </p>
                                    <Star/>
                                    <Commentt/>
                                </ListGroupItem>

                                <ListGroupItem> <a className="items" href="http://www.easytaxi.com/"> Easytaxi</a>
                                    <p> Easy Taxi is a mobile E-hailing application available in 30 countries.
                                        The app allows users to book a taxi and track it in real time</p>
                                    <Star/>
                                    <Commentt/>
                                </ListGroupItem>

                                <ListGroupItem> <a className="items"
                                                   href="https://www.skyparksecure.com/"> Skyparksecure</a>
                                    <p> Excellent secure airport parking at unbeatable prices, with unrivalled customer
                                        service</p>
                                    <Star/>
                                    <Commentt/>
                                </ListGroupItem>
                                <ListGroupItem>&hellip;</ListGroupItem>
                            </ListGroup>
                        </Panel>

                        <Panel className="table">
                            <Panel.Heading><h1>Restaurants </h1></Panel.Heading>
                            <Panel.Body></Panel.Body>


                            <ListGroupItem> <a className="items" href="https://www.opentable.com">Opentable</a>
                                <p>OpenTable is an online restaurant-reservation service.
                                    The service allows users to search for restaurants and reservations based on such
                                    parameters as dates, times, cuisine, and price range. </p>
                                The service provides restaurant owners with comprehensive reservation management.
                                <Star/>
                                <Commentt/>
                            </ListGroupItem>

                            <ListGroup>
                                <ListGroupItem> <a className="items" href="https://www.yelp.com">Yelp</a>
                                    <p>Yelp's website, is a crowd-sourced local business review and social networking
                                        site.
                                        Its user community is primarily active in major metropolitan areas.
                                        The site has pages devoted to individual locations, such as restaurants or
                                        schools,
                                        where Yelp users can submit a review of their products or services using a one
                                        to five star rating system.</p>
                                    <Star/>
                                    <Commentt/>
                                </ListGroupItem>

                                <ListGroupItem>&hellip;</ListGroupItem>
                            </ListGroup>
                        </Panel>

                        <Panel className="table">
                            <Panel.Heading><h1>Tours</h1></Panel.Heading>
                            <Panel.Body></Panel.Body>
                            <ListGroup>
                                <ListGroupItem> <a className="items" href="https://www.gadventures.com/">Gadventures</a>
                                    <p>G Adventures has defined small group travel for over 25 years.
                                        Travelling with us is the very best way to get up close and personal with your
                                        planet in a way you’d never manage on your own.</p>
                                    <Star/>
                                    <Commentt/>
                                </ListGroupItem>

                                <ListGroupItem> <a className="items"
                                                   href="https://www.getyourguide.com">Getyourguide </a>
                                    <p> GetYourGuide is a website where tourists can book activities such as tours and
                                        excursions,
                                        and buy tickets to numerous other tourist attractions.</p>
                                    <Star/>
                                    <Commentt/>
                                </ListGroupItem>

                                <ListGroupItem> <a className="items"
                                                   href="https://www.toursbylocals.com/"> ToursByLocals </a>
                                    <p>ToursByLocals was one of the originators of the "peer to peer" travel model. The
                                        company initially
                                        focused on the basic function of connecting travellers
                                        with local guides via an online platform, relying on peer reviews to establish
                                        quality control measures</p>
                                    <Star/>
                                    <Commentt/>
                                </ListGroupItem>

                                <ListGroupItem> <a className="items" href="https://www.tourradar.com/"> Tourradar</a>
                                    <p>TourRadar is a travel website where travellers and tourists can schedule a group
                                        tour,
                                        as well as featuring user-generated reviews of individual tours and of the Tour
                                        Operators.</p>
                                    <Star/>
                                    <Commentt/>
                                </ListGroupItem>

                                <ListGroupItem> <a className="items"
                                                   href="https://www.contexttravel.com/"> Contexttravel </a>
                                    <p> Small Group & Private Tours
                                        Expert-led walking tours in over 47 cities worldwide.
                                    </p>
                                    <Star/>
                                    <Commentt/>
                                </ListGroupItem>
                                <ListGroupItem>&hellip;</ListGroupItem>
                            </ListGroup>
                        </Panel>


                        <Panel className="table">
                            <Panel.Heading><h1> Information </h1></Panel.Heading>
                            <Panel.Body></Panel.Body>
                            <ListGroup>
                                <ListGroupItem> <a className="items" href="https://www.wikivoyage.org/">Wikivoyage</a>
                                    <p>Wikivoyage is a free web-based travel guide for travel destinations and travel
                                        topics written by volunteer authors.
                                        It is a sister project of Wikipedia and supported and hosted by the same
                                        non-profit Wikimedia Foundation.</p>
                                    <Star/>
                                    <Commentt/>
                                </ListGroupItem>

                                <ListGroupItem> <a className="items"
                                                   href="https://www.travellerspoint.com/">Travellerspoint </a>
                                    <p> Travellerspoint is a social networking site for people who want to learn from or
                                        share experiences
                                        with other travellers. Members of the site participate through forums, blogs,
                                        photo galleries and a
                                        wiki travel guide, similar to Wikivoyage.</p>
                                    <Star/>
                                    <Commentt/>
                                </ListGroupItem>

                                <ListGroupItem> <a className="items"
                                                   href="https://www.101holidays.co.uk"> 101holidays</a>
                                    <p>More than 4 million people a year visit our sites to research their holidays,
                                        using the expertise of our team of award-winning travel writers.</p>
                                    <Star/>
                                    <Commentt/>
                                </ListGroupItem>

                                <ListGroupItem>&hellip;</ListGroupItem>
                            </ListGroup>
                        </Panel>

                        <Panel className="table">
                            <Panel.Heading><h1>Tools </h1></Panel.Heading>
                            <Panel.Body></Panel.Body>
                            <ListGroup>
                                <ListGroupItem> <a className="items" href="https://www.tripit.com/">Tripit</a>
                                    <p>All your travel plans, in one place
                                        Get a master itinerary for every trip.</p>
                                    <Star/>
                                    <Commentt/>
                                </ListGroupItem>

                                <ListGroupItem> <a className="items" href="https://www.rome2rio.com/"> Rome2rio</a>
                                    <p>Discover how to get anywhere by plane, train, bus, ferry and automobile </p>
                                    <Star/>
                                    <Commentt/>
                                </ListGroupItem>

                                <ListGroupItem> <a className="items"
                                                   href="https://www.weather2travel.com/">Weather2travel </a>
                                    <p>Find the best holiday weather
                                        Where to go on holiday plus how to save with exclusive discounts</p>
                                    <Star/>
                                    <Commentt/>
                                </ListGroupItem>

                                <ListGroupItem> <a className="items" href="https://wwwnc.cdc.gov/travel"> Centers for
                                    Disease Control and Prevention</a>
                                    <p>The CDC collects and publishes health information for travelers in a
                                        comprehensive book,
                                        CDC Health Information for International Travel, which is commonly known as the
                                        "yellow book."
                                        The book is available online and in print as a new edition every other year and
                                        includes current travel health guidelines, vaccine recommendations,
                                        and information on specific travel destinations. The CDC also issues travel
                                        health notices on its website,</p>
                                    <Star/>
                                    <Commentt/>
                                </ListGroupItem>
                                <ListGroupItem>&hellip;</ListGroupItem>
                            </ListGroup>
                        </Panel>

                        <Panel className="table">
                            <Panel.Heading><h1>Social Media </h1></Panel.Heading>
                            <Panel.Body></Panel.Body>
                            <ListGroup>
                                <ListGroupItem> <a className="items"
                                                   href="http://www.spottedbylocals.com/">Spottedbylocals</a>
                                    <p>City guides with insider tips by locals in 71 cities!</p>
                                    <Star/>
                                    <Commentt/>
                                </ListGroupItem>


                                <ListGroupItem>&hellip;</ListGroupItem>
                            </ListGroup>
                        </Panel>
                    </Content>

                </Layout>


            </div>
            </Router>

    );
    }
    }


    export default Home;

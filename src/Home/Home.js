import React from 'react';
import axios from 'axios';
import './Home.css';
import HeroBG from './hero-bg.jpg';
import Logo from './exhaust-icon.png';
import { MdKeyboardArrowDown, MdClose } from 'react-icons/md';
import JPGCrew from './jpg-crew.jpg';
import BigMufflerBG from './big-muffler-bg.jpg';
import Popup from './Popup';

class Home extends React.Component {
  constructor() {
    super();
    this.home = React.createRef();
    this.aboutUs = React.createRef();
    this.getAQuote = React.createRef();
    this.contactUs = React.createRef();

    this.state = {
      quoteFormName: '',
      quoteFormEmail: '',
      quoteFormMessage: '',
      emailValid: undefined,
      emailSent: false,
      popupIsOpen: false,
      infoMessageClosed: false,
      openSaturdays: true,
    }
  }
  componentWillMount() {
    const date = new Date();
    const month = date.getMonth();
    if (month > 5 && month < 9) {
      this.setState({ openSaturdays: false })
    }
  }
  scrollToSection = (currentRef) => {
    window.scrollTo({
      top: currentRef.current.offsetTop, 
      behavior: "smooth",
    })
  }
  updateName = (e) => {
    this.setState({ quoteFormName: e.target.value });
  }
  updateEmail = (e) => {
    this.setState({ quoteFormEmail: e.target.value }, () => {
      this.checkEmailValid(this.state.quoteFormEmail);
    });
  }
  checkEmailValid = (email) => {
    this.setState({
      emailValid: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
    })
  }
  updateMessage = (e) => {
    this.setState({ quoteFormMessage: e.target.value });
  }
  sendEmail = () => {
    if (!this.state.emailValid) return false;

    let url = 'https://api.emailjs.com/api/v1.0/email/send';
    
    const params = {
      name: this.state.quoteFormName,
      email: this.state.quoteFormEmail,
      message: this.state.quoteFormMessage,
    }

    const data = {
      service_id: 'mailgun',
      template_id: 'jpg_quotes',
      user_id: 'user_f2gjJL54RwbaztEGui1T9',
      template_params: params,
    }

    axios.post(url, data);

    this.setState({
      emailSent: true,
      quoteFormEmail: '',
      quoteFormMessage: '',
      quoteFormName: '',
      popupIsOpen: true,
    });
  }
  closePopup = () => {
    this.setState({
      emailSent: false,
      popupIsOpen: false,
    });
  }
  closeInfoMessage = () => {
    this.setState({ infoMessageClosed: true });
  }
  render() {
    return (
      <div className='Home' ref={this.home}>
        {/*
        <div className='info-message' style={{ backgroundColor: '#ef820d', fontWeight: 'bold' }}>
          Starting Monday January 25th JPG Exhaust will only be open until 4:30pm Monday to Friday. Please call <a href="tel:905-339-0317" style={{ textDecoration: 'underline', opacity: 1 }}>905-339-0317</a> to book an appointment.
        </div>
        */}
        {
          !this.state.infoMessageClosed && (
            <div onClick={this.closeInfoMessage} className='info-message'>
              JPG Exhaust will not be accepting Saturday appoints for the summer. Saturday appoints will resume after Labour Day, September 5, 2022.
              <button className='close'>
                <MdClose />
              </button>
            </div>
          )
        }
        {
          /* Hero */
        }
        <div className='Hero'>
          <img src={HeroBG} className='background' alt='jpg exhaust background exhaust' />
          <div className='links'>
            <ul>
              <li>
                <button onClick={() => this.scrollToSection(this.aboutUs)}>ABOUT US</button>
              </li>
              <li>
                <button onClick={() => this.scrollToSection(this.getAQuote)}>GET A QUOTE</button>
              </li>
              <li>
                <button onClick={() => this.scrollToSection(this.contactUs)}>CONTACT</button>
              </li>
            </ul>
          </div>
          <div className='content'>
            <img src={Logo} className='logo' alt='jpg exhaust logo' />
            <h1>JPG Exhaust</h1>
            <span>all of your exhaust needs</span>
          </div>
          <button onClick={() => this.scrollToSection(this.getAQuote)} className='get-a-quote-btn'>
            GET A QUOTE
            <MdKeyboardArrowDown />
          </button>
        </div>
        {
          /* About Us */
        }
        <div className='AboutUs' id='aboutus' ref={this.aboutUs}>
          <h2>About Us</h2>
          <div className='content'>
            <div className='description'>
              <p>JPG Exhaust is a locally owned muffler shop in Oakville. We opened our first and only location in 1997 and plan to stay a local muffler shop. We did this so that we can maintain our quality of customer service and low prices. We’ll always do our best to go above and beyond. And you’ll never get any surprise charges. We are upfront about our prices and we are confident that you won’t find anything lower.</p>
            </div>
            <div className='img-wrap'>
              <img src={JPGCrew} alt='JPG Exhaust employees' />
            </div>
          </div>
          <div className='blurb'>
            <p>
            After 17 years in the muffler business we consider ourselves Performance Professionals. Let us help you give your car more power, a better sound, and an awesome look. We even have a special hoist just for lowered cars, so you don’t need to worry about your car being damaged. <a href='mailto:info@jpgexhaust.com'>Ask us</a> how we can give your car the performance you desire.
            </p>
            <img src={BigMufflerBG} alt='big muffler background' />
          </div>
        </div>
        {
          /* Get A Quote  */
        }
        <div className='GetAQuote' ref={this.getAQuote}>
          <h2>GET A QUOTE</h2>
          <p>Need a quote or have a question? Send us a message and we'll be glad to get back to you via text or email.</p>
          <div className='input-container'>
            <input
              placeholder='Name' 
              value={this.state.quoteFormName} 
              onChange={this.updateName} 
            />
            <input 
              placeholder='Email' 
              value={this.state.quoteFormEmail} 
              onChange={this.updateEmail} 
              onBlur={(e) => this.checkEmailValid(e.target.value)}
              className={'email' + (this.state.emailValid === false ? ' invalid' : '')}
            />
            <textarea 
              placeholder='Question' 
              value={this.state.quoteFormMessage} 
              onChange={this.updateMessage}
            />
            <button className='submit' onClick={this.sendEmail} disabled={!this.state.emailValid}>
              Send Message
            </button>
          </div>
          <Popup
            popupIsOpen={this.state.popupIsOpen}
            closePopup={this.closePopup}
          />
        </div>
        {
          /* Map */
        }
        <div className='Map'>
          <iframe 
            title='google map'
            src="https://maps.google.com/maps?q=jpg%20exhaust%20oakville&t=&z=13&ie=UTF8&iwloc=&output=embed" 
            frameBorder="0" 
            scrolling="no" 
            marginHeight="0" 
            marginWidth="0">
          </iframe>
        </div>
        {
          /* Footer */
        }
        <div className='Footer' ref={this.contactUs}>
          <div className='tile-container'>
            <div>
              <h3>Contact Us</h3>
              <span>Phone: <a href='tel:905-339-0317'>905-339-0317</a></span>
              <span>Email: <a href='mailto:info@jpgexhaust.com'>info@jpgexhaust.com</a></span>
            </div>
            <div>
              <h3>Address</h3>
              <span>1015 Industry Street, Oakville ON L6K 2G1</span>
            </div>
            <div>
              <h3>Hours</h3>
              <span>Monday to Friday 8:30am - 5:00pm</span>
              <span>Saturday and Sunday Closed</span>
            </div>
          </div>
          <div className='copyright'>
            <p>© 1997-2019 JPG Exhaust Inc.</p>
            <p>Website lovingly designed/developed by <a href='https://www.geoffreychan.com/' title='Geoff Chan website' target='_'>Geoff Chan</a></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;

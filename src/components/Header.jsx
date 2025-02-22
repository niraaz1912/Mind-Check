// src/components/Header.jsx
import React from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min';
import '../styles/header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.vantaRef = React.createRef();
  }
  
  componentDidMount() {
    this.vantaEffect = BIRDS({
      el: this.vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00
    });
  }
  
  componentWillUnmount() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  }
  
  render() {
    return (
      <header id="header-background" ref={this.vantaRef}>
        <div className="header-content">
          <div className='header-text'>MindCheck</div>
          <div className='description'>Your gateway to effective mental health support and crisis intervention</div>
        </div>
      </header>
    );
  }
}

export default Header;

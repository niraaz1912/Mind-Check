import React from 'react'
import { Link } from 'react-router-dom'
import BIRDS from 'vanta/dist/vanta.birds.min';
import '../styles/header.css'

class StrategyHeader extends React.Component {
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
        <header id="header-strategies" ref={this.vantaRef}>
          <div className="header-strategies">
            <button className="site-logo">MindCheck</button>
          </div>
        </header>
      );
    }
  }
  
  export default StrategyHeader
  

// function StrategyHeader() {
//   return (
//       <header className='header-strategies'> 
//           {/*<Link className="site-logo" to='/' >
//               MindCheck
//           </Link>8*/}
//           <button className="site-logo">MindCheck</button>
//       </header>
//     )
// }

// export default StrategyHeader
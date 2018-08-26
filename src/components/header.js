import React from 'react'
import Link from 'gatsby-link'
import logo from '../images/logo-designcode.svg';
import './header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
  	window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
	    this.setState({ hasScrolled: true })
    } else {
	    this.setState({ hasScrolled: false })
    }
  }

  render() {
	  return (
	    <div className={ this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header' }>
        <div className="HeaderGroup">
          <Link to="/"><b>GoodCar.rent</b></Link>
          <span />
          <Link to="/#autos">Autos</Link>
          <Link to="/#buy"><button>Rent!</button></Link>
        </div>
      </div>
    )
  }

}

export default Header


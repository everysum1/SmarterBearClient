const React = require('react')
const { Link } = require('react-router')
import { browserHistory } from 'react-router';
import SearchBar from './scripts/components/SearchComponents/SearchBar'
import './css/Header.css'
const { connector } = require('./Store')

var Header = React.createClass({

  handleSearchTermEvent (event) {
    event.preventDefault()
    this.props.setSearchTerm(this.refs.searchTerm.value)
    browserHistory.push('/search')
  },


  render: function() {
    return(
      <header className="HeaderBar header">
          <Link to='/' className='brand-link'>
            <img src='/smarter-bear-logo.png' alt="bear-logo" className="header-logo"/>
            <div className="logo-title">Smarter Bear</div>
          </Link>
        <form onSubmit={this.handleSearchTermEvent.bind(this)}>
          <input type='text' className='searchBar' placeholder='Search by company or ticker' ref="searchTerm"   />
        </form>
      </header>
    )
  }
})

export default connector(Header)

import React from 'react'
import _ from 'lodash'
import $ from 'jquery'
import '../../../css/TopInsiders.css'

var TopInsiders = React.createClass({
  getInitialState: function() {
    return {data:[]}
  },
  componentWillMount: function() {
    $.ajax({
      url: "https://insiderapi.herokuapp.com/companies",
      dataType: "json",
      success: function(data) {
        console.log(data.top_5_insiders)
        this.setState({data: data

                    })
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this, status, err.toString())
      }.bind(this)
    })
  },
  render: function() {
    var i = 1
    var insiders = _.map(this.state.data.top_5_insiders, (insider) => {
      i ++
    return(
      <li className="insider-card" key={i}>
        <div>

          <div className="stats-container">
          <div className="logo">
            <img src='/smarter-bear-logo.png' alt="bear-logo" className="logo"/>
          </div>
          <div className="stats">
            <h2>{insider.name}</h2>
            <p>Company: <strong>{insider.company}</strong></p>
            <p>Position: <strong>{insider.position}</strong></p>
            <p>Trades this quarter: <strong>{insider.total_trades}</strong></p>
            <p>Total value this quarter: <strong>{insider.total_trade_value}</strong></p>
          </div>
          </div>
        </div>
      </li>
    )
  })

    return (
      <div className="top-insiders">
        <h1>Top Insiders</h1>
        <ul>{insiders}</ul>
      </div>
    )
  }
})

export default TopInsiders
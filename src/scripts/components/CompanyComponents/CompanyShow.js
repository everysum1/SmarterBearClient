  var React = require ('react')
import CompanyHeader from './CompanyHeader'
import CompanyBubbleChart from './CompanyBubbleChart'
import Header from '../../../Header'
import NewsFeed from './NewsFeed'
import InfoBar from './InfoBar'
import Layout from '../../../Layout'
import $ from 'jquery'

var CompanyShow = React.createClass({
  getInitialState: function() {
    return {companyName: "", data:[], sells: [], buys:[]}
  },
  componentWillMount: function() {
    $.ajax({
      url: "https://insiderapi.herokuapp.com/companies/" + this.props.params.companyName,
      dataType: "json",
      success: function(data) {
        console.log(data)
        this.setState({data: data,
           confidenceRating: data[0].confidence_rating,
                 totalTrans: data[3].transactions_total,
                   insiders: data[3].insider_count,
                companyName: data[0].name,
                       buys: data[1],
                      sells: data[2]
                    })
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this, status, err.toString())
      }.bind(this)
    })
  },
  render: function() {
    return(
      <Layout>
        <div className="companyShow cluster-chart">
          <CompanyHeader companyName={this.state.companyName}/>
          <CompanyBubbleChart buys={this.state.buys} sells={this.state.sells}/>
        <div className="info-bar-bg-companies-pg">
          <InfoBar confidenceRating={this.state.confidenceRating} insiders={this.state.insiders} totalTrans={this.state.totalTrans}/>
        </div>
          <NewsFeed companyName={this.props.params.companyName} />
        </div>
      </Layout>
    )
  }
})

export default CompanyShow
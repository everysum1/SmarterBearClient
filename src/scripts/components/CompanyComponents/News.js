import React from 'react'
import Request from 'superagent'
import _ from 'lodash'
import '../../../css/news.css'
import config from '../../../../config.json'

const News = React.createClass({
  getInitialState: function() {
      return { }
  },

  searchArticles: function(query = this.props.companyName) {
    var url = `https://webhose.io/search?token=${config.WEBHOSE_TOKEN}&format=json&q=thread.title%3A(${query})%20language%3A(english)%20site_category%3Afinance%20organization%3A%22${query}%22%20(site_type%3Anews%20OR%20site_type%3Ablogs)&ts=1476079876068`
    console.log(url)
    Request.get(url).then((response) => {
      this.setState({
        articles: response.body.posts.slice(0, 5)
      })
    })
  },

  componentWillMount: function() {
    this.searchArticles()
  },

  render: function() {
    var articles = _.map(this.state.articles, (article) => {
      console.log(article.thread.main_image)
      return (
        <li key={article.thread.uuid}>


          <a href={article.thread.url}>
            <img className='news-img' src={`http://lorempixel.com/900/700/technics/?t=${Math.random()}`} alt='main-img' />
          </a>

          <div className="news-text">

          <h3>
            <a href={article.thread.url} >{article.title}</a>
          </h3>

          <p><span>{article.published}</span></p>
          <p>{article.text.split('.').slice(0,2).join(' ')}</p>
          </div>
        </li>
      )
    })

    return (
      <div className="news-story">

        <ul>{articles}</ul>
      </div>
    )
  }
})

export default News
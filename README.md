# Smarter Bear Client

Ever wanted to see at a glance what the top insiders from the hottest companies are doing with their shares of company stock?

This React front end application renders data and visualizations from our Rails API's JSON responses so you can see quickly and easily what's going on with each company's insider transactions along with related news.  

API repo can be found [here](https://www.github.com/everysum1/insiderAPI), and does all the back end work of requesting insider transactions from SEC servers, scrapeing FTP servers for corresponding XML files, parsing files into database objects using [Nokogiri](https://www.nokogiri.org), and serving up JSON-formatted information to the front end. 

You can check out the live version [here] (https://yourinsider.herokuapp.com). 

![homepage] (https://github.com/everysum1/insiderAPI/blob/development/app/assets/images/SmarterBearHomepage.png)

![company-page] (https://github.com/everysum1/insiderAPI/blob/development/app/assets/images/SmarterBearCompany.png)
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

```
ruby 2.3.1
bundler 1.12.5
rails 5.0.0
```

### Installing
From the command terminal, clone the repository to your local directory...
```
$ git clone https://www.gihub.com/everysum1/insiderAPI.git
$ cd insiderAPI
```

Then run bundle command to install all dependencies and run the server.  

```
$ bundle install
$ rails server
```


## Running ALL the tests

```
bundle exec rspec spec
```

## Deployment

You must have Heroku CLI installed and be logged in to Heroku in order to deploy live via Heroku servers
(Please see the [documentation](https://devcenter.heroku.com) to get set up with Heroku)

Then, after installation and login, via the command line...
```
$ heroku create
$ git push heroku master
$ heroku open
```
## Built With

* [Ruby on Rails](http://api.rubyonrails.org/) - Backend API framework used
* [React](https://facebook.github.io/react) - Front end UI framework used
* [Highcharts](https://www.highcharts.com) - Data visualization library
* [Redux](https://www.reduxjs.org) - Predictable state container used in front end application
* [Nokogiri](https://nokogiri.org) - XML parser used
* [PostgreSQL](https://www.postgresql.org/docs/) - Database used
* [HTTParty](https://github.com/jnunemaker/httparty) - Library used for making HTTP requests

## Authors

* **Israel Matos** - [Github](https://github.com/everysum1)
* **Kim Stephenson** - [Github](https://github.com/kimstephenson)
* **Sam Parker** - [Github](https://github.com/samuelparker)
* **Youna Yang** - [Github](https://github.com/y0una)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

Thank you for all your help!!
* Jeff Tchang
* Dave Cheng
* Sally Park
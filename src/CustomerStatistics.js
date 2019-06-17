import React, { Component } from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie';
import {Chart} from 'react-google-charts';

class CustomerStatistics extends Component {
	constructor (id) {
		super()
		this.state = {
			query: '',
			value: '',
			operator: ':',
			data: [],
			accoundId: id
		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleChange (event) {
		this.setState( {[event.target.name]: event.target.value} )
	}

	handleClick (e) {
		e.preventDefault();
		var parent = this;
		var url = `https://localhost:8443/Customer/Transactions?accountId=${this.state.accountId}`;
		if(this.state.query != null && this.state.value != null){
			url += this.state.query+this.state.operator+this.state.value;
		}

      	const cookies = new Cookies(); 
		axios.get(url,
		{
			headers:{
				"Authorization": cookies.get('token').token,
				'Accept' : 'application/json',
				'Content-Type': 'application/json'
			}
		}
		)
		.then(function(response){
			parent.setState({data: response.data});
			console.log(response.data);
		})
		;
	}



	render () {
    return (
      <div className='stat_container'>
		<h2>Look at all these staaats!</h2>
    	<Chart
    	width={'800px'}
    	height={'500px'}
    	chartType="Bar"
    	loader={<div>Loading Chart</div>}
    	data={[
    		['date', 'living', 'entertainment', 'food', 'transport', 'saving', 'other'],
    		['2014', 1000, 400, 200,1030, 540, 350],
    		['2015', 1170, 460, 250,1030, 540, 350],
    		['2016', 660, 1120, 300,1030, 540, 350],
    		['2017', 1030, 540, 350,1030, 540, 350],
    		]}
		options={{
    // Material design options
		    chart: {
		    	title: 'Company Performance',
		    	subtitle: 'Sales, Expenses, and Profit: 2014-2017',
		    },
		}}
		  // For tests
	  rootProps={{ 'data-testid': '2' }}
	  />
		  <form id="search_window" className="search_form" name="search" onSubmit={this.handleClick}>
		      <input type="text" id="query" title="query"  name="query" 
		      onChange={event => this.handleChange(event)} placeholder="query" />
		      <input type="text" id="value" title="value"  name="value" 
		      onChange={event => this.handleChange(event)} placeholder="value" />
		      <button type="submit" className="run" name="run">Search!</button>
		  </form>
      </div>
      )
  }
}
export default CustomerStatistics

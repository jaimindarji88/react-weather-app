import React from 'react'
import {Link, IndexLink} from 'react-router'
import {
	TopBar, TopBarLeft, TopBarRight, Menu, MenuItem, MenuText
} from 'react-foundation'

var Nav = React.createClass({
	onSearch: function(e){
		e.preventDefault();
		var location = this.refs.location.value;
		var encodedLoc = encodeURIComponent(location);

		if (location.length > 0){
			this.refs.location.value = "";
			window.location.hash = "#/?location=" + encodedLoc;
		}
	},
	render:function(){
		return (
			<TopBar>
				<TopBarLeft>
					<Menu>
						<MenuText>React Weather App</MenuText>
						<MenuItem>
							<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:"Bold"}}>Weather</IndexLink>
						</MenuItem>
						<MenuItem>
							<Link to="/about" activeClassName="active" activeStyle={{fontWeight:"Bold"}}>About</Link>
						</MenuItem>
						<MenuItem>
							<Link to="/examples" activeClassName="active" activeStyle={{fontWeight:"Bold"}}>Examples</Link>
						</MenuItem>
					</Menu>
				</TopBarLeft>
			    <TopBarRight>
					<form onSubmit={this.onSearch}>
						<Menu>
							<MenuItem>
								<input type="search" placeholder="Enter City" ref='location'/>
							</MenuItem>
							<MenuItem>
								<input className="button" type="submit" value="Get Weather"/>
							</MenuItem>
						</Menu>
					</form>
				</TopBarRight>
			</TopBar>
		)
	}
});

module.exports = Nav;
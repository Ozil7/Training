import React from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import '/home/user/my-app/src/react-tabs.css';
import $ from 'jquery';

var UserList = React.createClass({
  getInitialState: function() {
    return {
    username: [],
    lastUrl:'',
    source: ''
  };
  },

  handleChange: function(e) {
    var check = e.target.value;
    var link = check.split(',');
    this.setState({source:"https://api.github.com/search/repositories?q="+link[0]+"&sort="+link[1]+"&order="+link[2] })
  },

  handleClick: function() {
    console.log(this.state.source);

    $.get(this.state.source,function(result) {
      var lastGist = result;
      console.log(lastGist);
      var assign = lastGist.items;

      if (this.isMounted()) {
        this.setState({
          username: assign
        });
      }
    }.bind(this));
  },

  render: function() {
    return (
      <div>


            <div>
                <input type="text"  onChange={this.handleChange} />
                <input type="button" value="search" onClick={this.handleClick} />

                  <table >
                  <tr>
                    <th>Name</th>
                    <th>Owner</th>
                    <th>Stars</th>
                    <th>forks</th>
                  </tr>
                  { this.state.username.map( ( item, index )=> (
                    <tr key={index}>
                      <td>
                        { item.name }
                      </td>
                      <td>
                        { item.owner.login }
                      </td>
                      <td>
                        { item.stargazers_count }
                      </td>
                      <td>
                        { item.forks }
                      </td>
                    </tr>
                  )) }
                </table>


      </div>
    </div>
    );
  }
  });



export default UserList;
ReactDOM.render(
<UserList />,
  document.getElementById('root')
);

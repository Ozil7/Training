import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './react-tabs.css';
import './index.css';
import $ from 'jquery'; 
import Pagination from "react-js-pagination"




var Repo = React.createClass({

  getInitialState: function() {
    return {
      userList: [],
      key:1,
      sourceLink:'',
      allPullRequests: [],
      openPullRequests: [],
      mergedPullRequests: [],
      pull:[],
      _isMounted: "false",
      activePage: 1
      
    };
  },

  handlePageChange: function(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
    var pageLink = this.state.sourceLink+ "&per_page=30&page=" + pageNumber + ">; rel='next'";
    console.log(pageLink);
    $.get(pageLink, function(data) {
      console.log(data);

        this.setState({
        userList: data.items,
          
      })
      
      
    }.bind(this));
  },

  componentDidMount: function() {
    this.setState({_isMounted: "true"});
  },


  componentWillUnmount: function() {
    this.setState({_isMounted: "false"});
  },


  handleChange: function(e) {
    var check = e.target.value;
    var set = check.split(',');
    console.log(set);
    const sourceLink = this.state.sourceLink.slice();
    this.setState({ sourceLink: "https://api.github.com/search/repositories?q="+set[0]+"&sort="+set[1]+"&order="+set[2]+ "&per_page=30&page=" + this.pageNumber + ">; rel='next'"  });
    console.log(sourceLink);
    
  },


  handleClick: function() {

    $.get(this.state.sourceLink, function(data) {
     console.log(data);
      if (this.state._isMounted == "true") {
        this.setState({
        userList: data.items,
          
      });
    }
      
     
    }.bind(this));
 },
    
    showPullRequest: function(getPull) {

      console.log(getPull);
       $.get(getPull, function(data) {
        var request = data;
        console.log(request);

     if (this.isMounted()) {
        const pull = this.state.pull.slice();
        this.setState({
          pull: request,
          
                  });
       }this.pullRequests();
    }.bind(this));
       
      

    },
    pullRequests: function(){
      var open = []; 
      var merged = [];
      var all = [];
      console.log(this.state.pull);
      this.state.pull.map(function(user,i){
        all.push(user.url);
        if(user.state == "open"){
          open.push(user.url);
        }else{
          merged.push(user.url);
        }
      })
      if(merged.length === 0){
        merged.push("No merged pull requests")
        console.log(merged);
      }  
      if(open.length === 0){
        open.push("No open pull requests")
        console.log(open);
      }  
      if(all.length === 0){
        all.push("No pull requests")
        console.log(all);
      }

      const allPullRequests = this.state.allPullRequests.slice();
      const openPullRequests = this.state.openPullRequests.slice();
      const mergedPullRequests = this.state.mergedPullRequests.slice();
      this.setState({
          allPullRequests: all,
          openPullRequests: open,
          mergedPullRequests: merged
          
      });


      

    },
render: function() {
  console.log(this);

    return (
    <div>
      <Tabs id="Tab1" forceRenderTabPanel={true} ref="sm" >
        <TabList>
          <Tab> Repositories </Tab>
          <Tab>Pull Requests</Tab>
        </TabList>
        <TabPanel>
          <div>
              <input type="text"  onChange={this.handleChange} />
              <input type="button" value="search" onClick={this.handleClick.bind(this)} />
                <table id="Table1" >
                <tbody>
                <tr>
                  <th>Name</th>
                  <th>Owner</th>
                  <th>No.of Stars</th>
                  <th>No.of forks</th>
                  <th>Pull Request</th>
                </tr>
                { this.state.userList.map( ( item, index ) => (

                  <tr key={index}>
                    <td>
                      <a href={item.html_url} target="_blank">{ item.name }</a>
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
                    <td>
                      <button  onClick={this.showPullRequest.bind(this,item.pulls_url.slice(0, item.pulls_url.indexOf('{/')) )}>Show</button>
                      
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>


          <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={20}
            totalItemsCount={450}
            onChange={this.handlePageChange.bind(this)}
          />
                 
          </div>   
        </TabPanel>
        <TabPanel>
          <Tabs>
            <TabList>
              <Tab id="All" >All Pull Requests</Tab>
              <Tab id="Open" >Open  Pull Requests</Tab>
              <Tab id="Merged">Merged Pull Requests</Tab>
            </TabList>
            <TabPanel>
              <ol>
              { this.state.allPullRequests.map( ( item, index ) => (
                <li key={index}><a href={item} target="_blank" >{item}</a></li>
                ))}
              </ol>
            </TabPanel>
            <TabPanel>
               <ol>
              { this.state.openPullRequests.map( ( item, index ) => (
                <li key={index}><a href={item} target="_blank" >{item}</a></li>
                ))}
              </ol>
            </TabPanel>
            <TabPanel>
               <ol>
              { this.state.mergedPullRequests.map( ( item, index ) => (
                <a href={item} key={index} target="_blank">{item}</a>
                ))}
              </ol>
            </TabPanel>
          </Tabs>
          
        </TabPanel>
      </Tabs>

     
      
    </div>
  );
}
});

export default Repo;
ReactDOM.render(
<Repo  />,
document.getElementById('root')
)


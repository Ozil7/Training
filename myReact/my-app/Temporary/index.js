import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './react-tabs.css';
import './index.css';
import $ from 'jquery'; 



class App extends React.Component{
	constructor(props) {
		super(props);
		this.state = {userList: []};
		this.state = {key: 1};
		this.state = {sourceLink: ''};
		this.state = {all: []};
		this.state = {open: []};
		this.state = {merged: []};
		this.state = {pull: []};
	}


	handleChange(e)
	{
	  this.inputText = e.target.value;
    this.link = this.inputText.split(',');
      console.log(this.link);
      this.setState({ sourceLink: "https://api.github.com/search/repositories?q="+this.link[0]+"&sort="+this.link[1]+"&order="+this.  link[2] });
	}


	handleClick()
	{
	  $.get(this.state.sourceLink, function(result) {
        console.log(result);
        if (this.isMounted()) {
      
          this.setState({
          userList: result.items,
        });
    }
      
     
    }.bind(this));
	}

	showPullRequest(getPull)
	{
		console.log(getPull);
       $.get(getPull, function(result) {
        var request = result;
        console.log(request);

       if (this.isMounted()) {
      
        this.setState({
          pull: request,
          
                  });
       }this.pullRequests();
     }.bind(this));
       
	}


	pullRequests()
	{
		var openPullRequests = []; 
      var closedPullRequests = [];
      var allPullRequests = [];
      console.log(this.state.pull);
      this.state.pull.map(function(user,i){
        allPullRequests.push(user.url);
        if(user.state == "open"){
          openPullRequests.push(user.url);
        }else{
          closedPullRequests.push(user.url);
        }
      })
      if(closedPullRequests.length === 0){
        closedPullRequests.push("No merged pull requests")
        console.log(closedPullRequests);
      }  
      if(openPullRequests.length === 0){
        openPullRequests.push("No open pull requests")
        console.log(openPullRequests);
      }  
      if(allPullRequests.length === 0){
        allPullRequests.push("No pull requests")
        console.log(allPullRequests);
      }
      this.setState({
          all: allPullRequests,
          open: openPullRequests,
          merged: closedPullRequests
          
      });
	}




	render()
	{
		return(
			<div>
      <Tabs id="Tab1" forceRenderTabPanel={true} ref="sm" >
        <TabList>
          <Tab> Repositories </Tab>
          <Tab>Pull Requests</Tab>
        </TabList>
        <TabPanel>
          <div>
              <input type="text"  onChange={this.handleChange.bind(this)} />
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
              { this.state.all.map( ( item, index ) => (
                <li key={index}><a href={item} target="_blank" >{item}</a></li>
                ))}
              </ol>
            </TabPanel>
            <TabPanel>
               <ol>
              { this.state.open.map( ( item, index ) => (
                <li key={index}><a href={item} target="_blank" >{item}</a></li>
                ))}
              </ol>
            </TabPanel>
            <TabPanel>
               <ol>
              { this.state.merged.map( ( item, index ) => (
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
}


export default App;
ReactDOM.render(
<App />,
document.getElementById('root')
);
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import '/home/user/my-app/src/react-tabs.css';
// import $ from 'jquery'; 

// var App = React.createClass({
//   getInitialState: function() {
//     return {
//       username: [],
//       lastGistUrl: '',
//       source:'',
//       key:1,
//       all:[],
//       open:[],
//       merged:[],
//       pull:[]
      
//     };
//   },
//   handleChange: function(e) {
//     var check = e.target.value;
//     var link = check.split(',');
//     this.setState({ source: "https://api.github.com/search/repositories?q="+link[0]+"&sort="+link[1]+"&order="+link[2] });
//   },
//   handleClick: function() {
//     console.log(this.state.source);

  
//     $.get(this.state.source, function(result) {
//       var lastGist = result;
     
//       var assign = lastGist.items;
//       console.log(assign);
//       var url = lastGist.items.pulls_url;
//       if (this.isMounted()) {
      
//         this.setState({
//           username: assign,
          
//                   });
//        }
      
     
//     }.bind(this));

 
//     },
//     showPullRequest: function(i) {

//       console.log(i);
//        $.get(i, function(result) {
//         console.log(result);
//       var request = result;
//      if (this.isMounted()) {
      
//         this.setState({
//           pull: request,
          
//                   });
//        }this.random();
//     }.bind(this));
       
      

//     },
//     random: function(){
//       var opened = []; 
//       var closed = [];
//       var every = [];
//       console.log(this.state.pull);
//       this.state.pull.map(function(user,i){
//         every.push(user.url);
//         if(user.state == "open"){
//           opened.push(user.url);
//         }else{
//           closed.push(user.url);
//         }
//       })
//       if(closed.length === 0){
//         closed.push("Noting To show")
//         console.log(closed);
//       }  
//       if(opened.length === 0){
//         opened.push("Noting To show")
//       }  
//       if(every.length === 0){
//         every.push("Noting To show")
//       }
//       this.setState({
//           all: every,
//           open:opened,
//           merged:closed
          
//                   });
      

//     },
// render: function() {
//     return (
//     <div>
//       <Tabs id="foo" forceRenderTabPanel={true} ref="sm" >
//         <TabList>
//           <Tab> Repositories </Tab>
//           <Tab>Pull Request</Tab>
//         </TabList>
//         <TabPanel>
//           <div>
//               <input type="text"  onChange={this.handleChange} />
//               <input type="button" value="search" onClick={this.handleClick} />
//                 <table >
//                 <tbody>
//                 <tr>
//                   <th>Name</th>
//                   <th>Owner</th>
//                   <th>No.of Stars</th>
//                   <th>No.of forks</th>
//                   <th>Pull Request</th>
//                 </tr>
//                 { this.state.username.map( ( item, index ) => (

//                   <tr key={index}>
//                     <td>
//                       <a href={item.html_url} target="_blank">{ item.name }</a>
//                     </td>
//                     <td>
//                       { item.owner.login }
//                     </td>
//                     <td>
//                       { item.stargazers_count }
//                     </td>
//                     <td>
//                       { item.forks }
//                     </td>
//                     <td>
//                       <button  onClick={this.showPullRequest.bind(null,item.pulls_url.slice(0, item.pulls_url.indexOf('{/')) )}>Show</button>
                      
//                     </td>
//                   </tr>
//                 ))}
//                 </tbody>
//               </table>
                 
//           </div>   
//         </TabPanel>
//         <TabPanel>
//           <Tabs>
//             <TabList>
//               <Tab id="all" >All</Tab>
//               <Tab id="open" >Open</Tab>
//               <Tab id="merged">Merged</Tab>
//             </TabList>
//             <TabPanel>
//               <ol>
//               { this.state.all.map( ( item, index ) => (
//                 <li key={index}><a href={item} target="_blank" >{item}</a></li>
//                 ))}
//               </ol>
//             </TabPanel>
//             <TabPanel>
//                <ol>
//               { this.state.open.map( ( item, index ) => (
//                 <li key={index}><a href={item} target="_blank" >{item}</a></li>
//                 ))}
//               </ol>
//             </TabPanel>
//             <TabPanel>
//                <ol>
//               { this.state.merged.map( ( item, index ) => (
//                 <a href={item} key={index} target="_blank">{item}</a>
//                 ))}
//               </ol>
//             </TabPanel>
//           </Tabs>
          
//         </TabPanel>
//       </Tabs>

     
      
//     </div>
//   );
// }
// });

// export default App;
// ReactDOM.render(
// <App  />,
// document.getElementById('root')
// )


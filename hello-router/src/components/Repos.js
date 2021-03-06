 import React,{Component} from 'react'
 import MyLink from './MyLink'
 export default class Repos extends Component{
     constructor(props){
         super(props)
         this.state = {
             repos:[
                 {username:'facebook',repoName:'react'},
                 {username:'yahu',repoName:'react-router'},
                 {username:'taobao',repoName:'angular'},
                 {username:'antdd',repoName:'unit'},
             ]
         }
     }
     render(){

         const lis = this.state.repos.map((repo,index)=>(
             <li key={index}><MyLink to={`/repos/${repo.username}/${repo.repoName}`}>{repo.repoName}</MyLink></li>
         ))
         return(
             <div>
                 <h3>Repos</h3>
                 <ul>
                     {lis}
                 </ul>
                 {this.props.children}
             </div>
         )
     }
 }
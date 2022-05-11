import  './Usertable.css';
import { Component } from "react"         
import Users from './Users';

class Usertable extends Component{
  state={
      Users:Users
  }
    render(){
        return(
        <>
        <table className='customers'>
            <thead>
            <tr>
                <td>id</td>
                <td>name</td>
                <td>lastName</td>
                <td>career</td>
            </tr>
            </thead>
            <tbody>
                {Users.map((user, index)=>(
                    <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.lastName}</td>
                    <td>{user.career}</td>
                    </tr>
                    
               ))}
                
            </tbody>
        </table>
        </>)
    }
}
  
//   class Usertable extends Component{
//       state = {
//           users:users
//       }
//       handleDeleteUser = (id)=>{
//           this.setState({users : this.state.users.filter(user=>
//             user.id!==id)})
//       }
//       handleAddUser = () => {
//           const name = prompt("enter user name")
//           const status = prompt("enter user status")
//           const email = prompt("enter user email")
//           this.setState({users:[...this.state.users,{id:Math.round(Math.random()*1000), name, status, email}]})
//       }
//       handleUpdateUser = (olduser)=>{
//         const name = prompt("enter user name",olduser.name)
//         const status = prompt("enter user status", olduser.status)
//         const email = prompt("enter user email", olduser.email) 
//         this.setState({users: this.state.users.map(user=>
//         user.id===olduser.id ?
//         {...olduser, name, status, email}
//         :user)})
//       }
//       render(){
//           return(
//               <div>
//               <table className='customers'>
//                   <thead>
//                       <tr>
//                           <td>id</td>
//                           <td>name</td>
//                           <td>status</td>
//                           <td>email</td>
//                           <td>
//                   <button onClick={this.handleAddUser}>Add</button>
//                           </td>
//                       </tr>
//                   </thead>
//                   <tbody>
//                       {this.state.users.map(user => (
//                           <tr key={user.id}>
//                               <td>{user.id}</td>
//                               <td>{user.name}</td>
//                               <td>{user.status}</td>
//                               <td>{user.email}</td>
//                               <td>
//                                   <button onClick={()=>this.handleUpdateUser(user)}>update</button>
//                                   <button onClick={()=>this.handleDeleteUser(user.id)}>{"delete"}</button>
//                               </td>
//                           </tr>
//                       ))}
//                   </tbody>
//               </table>
//               </div>
//           )
//       }
//   }

export default Usertable;       
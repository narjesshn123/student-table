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
                <td>
                <button onClick={this.handleAdd}>add</button>
                </td>
            </tr>
            </thead>
            <tbody>
                {this.state.Users.map((user,index)=>(
                    <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.lastName}</td>
                    <td>{user.career}</td>
                    <td>
                <button onClick={()=>this.handleDelete(user.id)}>delete</button>
                <button onClick={()=>this.handleUpdate(user)}>update</button>
                </td>
                    </tr>
                    
               ))}
                
            </tbody>
        </table>
        </>)
    }

    handleUpdate = (olduser)=>{
        const name = prompt("enter user name",olduser.name)
        const lastName = prompt("enter user status", olduser.lastName)
        const career = prompt("enter user email", olduser.career) 
        this.setState({Users: this.state.Users.map((user)=>
        user.id === olduser.id ?
        {...olduser, name, lastName, career}
        :user)})
      }


      handleDelete = (id)=>{
          this.setState({Users: this.state.Users.filter(user=>
              user.id !==id
          )})
      }


      handleAdd=()=>{
          const name = prompt("please enter your name")
          const lastName = prompt("please enter your lastName")
          const career = prompt("please enter your career")
          this.setState({Users: [...this.state.Users, {id:Math.floor(Math.random()*20), name, lastName, career}]})
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
    //   handleUpdateUser = (olduser)=>{
    //     const name = prompt("enter user name",olduser.name)
    //     const status = prompt("enter user status", olduser.status)
    //     const email = prompt("enter user email", olduser.email) 
    //     this.setState({users: this.state.users.map(user=>
    //     user.id===olduser.id ?
    //     {...olduser, name, status, email}
    //     :user)})
    //   }
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
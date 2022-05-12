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
                <button onClick={this.handleAdd}>add
                </button>
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


export default Usertable;       
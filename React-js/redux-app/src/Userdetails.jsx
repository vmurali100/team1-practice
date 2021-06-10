import React, { Component } from 'react'
import { connect } from 'react-redux'

 class userdetails extends Component {
   
    render() {
        return (
            <div className="container">

                <table class="table">
                    <thead>
                        <tr>
                            
                            <th>First</th>
                            <th>Last</th>                           
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.map((user)=>{
                            return <tr>                          
                            
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                            <td><button type="button" class="btn btn-primary">Edit</button></td>
                            <td><button type="button" class="btn btn-danger">Delete</button></td>

                        </tr>
                        })}
                       
                       
                    </tbody>
                </table>
            </div>
        )
    }
}
function mapstatetoprops(state) {
    return{
        users:state
    }
    
}
export default connect(mapstatetoprops)(userdetails)

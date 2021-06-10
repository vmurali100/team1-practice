import React, { Component } from 'react'
import { connect } from 'react-redux'

 class Usersdetails extends Component {
   

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
                        {this.props.persons.map((user) => {
                            return <tr>


                                <td>{user.fname}</td>
                                <td>{user.lname}</td>
                                <td><button type="button" class="btn btn-primary">Edit</button></td>
                                <td><button type="button" class="btn btn-warning">Delete</button></td>
                            </tr>
                        })}


                    </tbody>
                </table>
            </div>
        )
    }
}
function mapstateToprops(state) {
    return{
        persons:state
    }
    
}
export default connect(mapstateToprops)(Usersdetails)

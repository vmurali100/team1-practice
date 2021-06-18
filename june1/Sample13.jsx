import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';

export const Userdetails = () => {
    const [users, setusers] = useState([])
    useEffect(() => {
        getallusers()
    }, [])

    const getallusers=()=>{
        axios.get("http://localhost:3000/users").then((res)=>{
            setusers(res.data)
        })
    }
   
    return (
        <div>
            <h1>User Details</h1>
            <table border="1">
                <thead>
                    <tr>
                    <th>STATUS</th>
                        <th>SHAPE</th>
                        <th>COL</th>
                        <th>CLR</th>
                        <th>CUT</th>
                        <th>POL</th>
                        <th>SYM </th>
                        <th>FLOURSENCE</th>
                        <th>NATTS</th>
                        <th>COL-SHADE</th>
                        <th>MILKY</th>
                        <th>EYE_CLEAN</th>
                        <th>DIA_MN</th>
                        <th>DIA_MX</th>
                        <th>DPL</th>
                        <th>TBL</th>
                        <th>HT</th>
                        <th>LW</th>
                        <th>TYPE2A_NAME</th>
                        <th>HEART AND ARROW</th>
                        <th>MEASUREMENT</th>
                        <th>GRIDLE</th>
                        <th>LN</th>
                        <th>WD</th>
                        <th>CA</th>
                        <th>CH</th>
                        <th>PA</th>
                        <th>PD</th>
                        <th>KTSVIEW</th>
                        <th>COMMENT</th>
                        <th>LOC</th>
                        <th>INS</th>
                        <th>EFCM</th>
                        <th>CULET</th>
                        <th>ORIGIN</th>
                        <th>CATEGORY</th>

                    </tr>
                </thead>
                <tbody>
                    {users.map((val,i)=>{
                        return <tr key={i}>
                            {Object.values(val).map((val1, j)=>{
                                return <td key={j}>{val1}</td>
                            })}
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default Userdetails;
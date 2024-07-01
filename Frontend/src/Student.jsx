import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
function Student() {

    const [student, setStudent]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8081/')
        .then(res=>{
            setStudent(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
  return (
    <div>
      <Link to="/Create">Add+</Link>
      <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>           
        </thead>
        <tbody>
            {student.map((data,i)=>(
                <tr key={i}>
                    <td>{data.Name}</td>
                    <td>{data.Email}</td>
                    <td>
                        <button>Update</button>
                        <button>Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Student

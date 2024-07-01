import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Update() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    

    function handleSubmit(e) {
        e.preventDefault();
        axios.put('http://localhost:8081/Update/' + id, { name, email })
            .then(res => {
                console.log(res);
                navigate('/');
            }).catch(err => console.log(err));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Update</h2>
                <div>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id="name"
                        value={name}
                        placeholder="Name"
                        onChange={e => setName(e.target.value)} 
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email"
                        value={email}
                        placeholder="Email" 
                        onChange={e => setEmail(e.target.value)} 
                    />
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default Update;

import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Create() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:8081/create', { name, email })
            .then(res => {
                console.log(res);
                navigate('/');
            }).catch(err => console.log(err));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Add</h2>
                <div>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id="name"
                        placeholder="Name"
                        onChange={e => setName(e.target.value)} 
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email"
                        placeholder="Email" 
                        onChange={e => setEmail(e.target.value)} 
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Create;

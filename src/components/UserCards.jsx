import React, { use } from 'react'
import { useState, useEffect } from 'react'
import '../css/UserCards.css'


const UserCards = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

  return (
    <>
    <h1>User Cards</h1>
    <div className="container">
        <div className="user-cards">
            {users.map(user => (
                <div key={user.id} className="user-card">
                    <div className="card-header">
                        <h2>{user.name}</h2>
                    </div>

                    <div className="card-body">
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Phone:</strong> {user.phone}</p>
                        <p><strong>Website:</strong> {user.website}</p>
                    </div>
                    
                </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default UserCards
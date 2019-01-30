import React from 'react';

const MyDetails = (props) => (
    <div>
        <div>
            <input label="name" placeholder="name" />
            <input placeholder="full name" /><br />
            <input label="email" placeholder="email"/> 
            <input placeholder="email" /><br />
            <input label="password" placeholder="password"/> 
            <input placeholder="password" />
        </div>

        <h3>Volunteers</h3>
            <div>
                <input placeholder="full name" />
                <input placeholder="email" />
                <input placeholder="phone" />
                <input placeholder="relationship" />
            </div>
            <div>
                <input placeholder="full name" />
                <input placeholder="email" />
                <input placeholder="phone" />
                <input placeholder="relationship" />
            </div>

            <h3>Children</h3>
            <div>
                <input placeholder="full name" />
                <input placeholder="grade" />
                <input placeholder="teacher" />
                <input placeholder="class days" />
            </div>
            <div>
                <input placeholder="full name" />
                <input placeholder="grade" />
                <input placeholder="teacher" />
                <input placeholder="class days" />
            </div>
    </div>
)
        
        
export default MyDetails; 
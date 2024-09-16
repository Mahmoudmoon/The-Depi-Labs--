import React from 'react';

const BioComponent = ({ name, age, profession, location, hobbies, skills, children }) => {
    return (
        <div>
            <h1>Bio</h1>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Age:</strong> {age}</p>
            <p><strong>Profession:</strong> {profession}</p>
            <p><strong>Location:</strong> {location}</p>
            <p><strong>Hobbies:</strong> {hobbies}</p>
            
            <h2>Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
            
            <div>
                {children}
            </div>
        </div>
    );
};

export default BioComponent;

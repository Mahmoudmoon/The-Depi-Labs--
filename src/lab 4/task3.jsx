import React, { useState, useEffect } from 'react';
import './Comments.css'; // Add your CSS file for styling

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(data => setComments(data))
            .catch(error => console.error('Error fetching comments:', error));
    }, []);

    return (
        <div className="comments-container">
            {comments.map(comment => (
                <div key={comment.id} className="comment-card">
                    <h3>{comment.name}</h3>
                    <p><strong>Email:</strong> {comment.email}</p>
                    <p>{comment.body}</p>
                </div>
            ))}
        </div>
    );
};

export default Comments;

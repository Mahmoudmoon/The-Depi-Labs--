import React, { useState } from 'react';

const PostComment = () => {
    // State to hold form data
    const [formData, setFormData] = useState({
        postId: '',
        name: '',
        email: '',
        body: '',
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Post data to API
        fetch('https://jsonplaceholder.typicode.com/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            // Log posted data to the console
            console.log('Posted data:', data);
            // Optionally clear the form or show a success message
            setFormData({
                postId: '',
                name: '',
                email: '',
                body: '',
            });
        })
        .catch(error => console.error('Error posting data:', error));
    };

    return (
        <div>
            <h2>Post a Comment</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    name="postId"
                    placeholder="Post ID"
                    value={formData.postId}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="body"
                    placeholder="Comment Body"
                    value={formData.body}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Post Comment</button>
            </form>
        </div>
    );
};

export default PostComment;

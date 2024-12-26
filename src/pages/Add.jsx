import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'; 
import Footer from './Footer'; 
import './Add.css';

const Add = () => {
    const [book, setBook] = useState({
        title: "",
        author: "",
        description: "",
    });
    const [errors, setErrors] = useState({
        title: false,
        author: false,
        description: false,
        image: false,
    });
    const [image, setImage] = useState(null); 
    const navigate = useNavigate();

    const handleChange = (e) => {
        setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        setErrors((prev) => ({ ...prev, [e.target.name]: false }));  // Clear error when user starts typing
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
        setErrors((prev) => ({ ...prev, image: false }));  // Clear image error when user selects a file
    };

    const handleClick = async (e) => {
        e.preventDefault();

        // Validation check
        const newErrors = {
            title: !book.title,
            author: !book.author,
            description: !book.description,
            image: !image,
        };

        setErrors(newErrors);

        // If any field is invalid, don't proceed
        if (Object.values(newErrors).includes(true)) {
            alert("All fields, including the image, are mandatory!");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("title", book.title);
            formData.append("author", book.author);
            formData.append("description", book.description);
            formData.append("image", image);

            const response = await axios.post("http://localhost:8800/books", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            alert("Book added successfully!");
            await new Promise((resolve) => setTimeout(resolve, 500)); 
            navigate('/AllCollection');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="bk">
            <div className="form">
                <h1>Add New Book</h1>

                <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    onChange={handleChange}
                    className={errors.title ? 'error' : ''}
                />
                {errors.title && <span className="error-text">Field is mandatory</span>}

                <input
                    type="text"
                    placeholder="Author"
                    name="author"
                    onChange={handleChange}
                    className={errors.author ? 'error' : ''}
                />
                {errors.author && <span className="error-text">Field is mandatory</span>}

                <input
                    type="text"
                    placeholder="Description"
                    name="description"
                    onChange={handleChange}
                    className={errors.description ? 'error' : ''}
                />
                {errors.description && <span className="error-text">Field is mandatory</span>}

                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className={errors.image ? 'error' : ''}
                />
                {errors.image && <span className="error-text">Field is mandatory</span>}

                <button onClick={handleClick}>Add</button>
            </div>
            </div>
            <Footer />
        </div>
    );
};

export default Add;

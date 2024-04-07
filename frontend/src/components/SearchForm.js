import React, { useState } from 'react';
import axios from 'axios';

const SearchForm = ({ onSearch }) => {
    const [name, setName] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        try {

            const response = await axios.get(`http://localhost:5000/search/?title=${name.replace(/ /g, "+")}`);
            onSearch(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search by name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchForm;

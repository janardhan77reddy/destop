import React, { useState } from "react";





const SearchForm = ({ searchImages }) => {
    const [query, setQuery] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        searchImages(query);
        setQuery('');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"  value={query} onChange={(e) => setQuery(e.target.value)} placeholder="search for images" required /> <button type="submit">Search</button>
            </form>

        </div>
    )
   


};













export default SearchForm;



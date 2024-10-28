import React, { useState } from 'react';

interface SearchBarProps {
    onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [term, setTerm] = useState('');

    const handleSearch = () => {
        onSearch(term);
    };

    return (
        <div>
            <input
                type="text"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder="Search products..."
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default SearchBar;

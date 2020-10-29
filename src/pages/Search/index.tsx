import Button from 'core/components/Button';
import React, { useState } from 'react';
import { makeRequest } from 'core/utils/request';
import "./styles.css";

const Search = () => {

    const [search, setSearch] = useState('');

    const handleOnChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        
        makeRequest({url:`/${search}`});
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="search-container">
                <h1 className="title-text">Encontre um perfil Github</h1>
                <input 
                    value={search}
                    onChange={handleOnChange}
                    name="search"
                    className="input-user" 
                    type="text" 
                    placeholder="Usuário Github"
                />
                <div className="btn-encontar">
                    <Button text="Encontrar" />
                </div>
            </div>
        </form>
    );
}

export default Search;
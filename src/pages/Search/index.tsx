import React, { useState } from 'react';
import { makeRequest } from 'core/utils/request';
import Button from 'core/components/Button';
import { User } from 'core/types/User';
import { toast } from 'react-toastify';
import UserInfo from '../UserInfo';
import "./styles.css";
import Loading from './components/Load/Loading';

const Search = () => {

    const [search, setSearch] = useState('');
    const [userData, setUserData] = useState<User>();
    const [isLoading, setIsLoading] = useState(false);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        setIsLoading(true);
        event.preventDefault();

        makeRequest({ url: `/${search}` })
            .then(response => setUserData(response.data))
            .catch(() => { toast.error('Usuário não encontrado!') })
            .finally(() => setIsLoading(false));
    }

    return (
        <>
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

            {isLoading ? (
                <Loading />
            ) : (
                userData && (
                    <UserInfo user={userData} />
                )
            )}
            
            
            

        </>
    );
}

export default Search;
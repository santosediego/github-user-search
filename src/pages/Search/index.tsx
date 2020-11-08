import React, { useState } from 'react';
import { makeRequest } from 'core/utils/request';
import Button from 'core/components/Button';
import { User } from 'core/types/User'
//import ImageLoader from './components/ImageLoader';
//import InfoLoader from './components/InfoLoader';
import "./styles.css";

const Search = () => {

    const [search, setSearch] = useState('');
    const [userData, setUserData] = useState<User>();
    //const [isLoading, setIsLoading] = useState(false);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        //setIsLoading(true);
        event.preventDefault();

        makeRequest({ url: `/${search}` })
            .then(response => setUserData(response.data))
            //.finally(() => setIsLoading(false));
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

            {userData && (
                <div className="box">
                    <div className="box-content">
                        <img className="image-perfil" src={userData?.avatar_url} alt={userData?.login} />
                        <div className="box-information">
                            <div className="contadores">
                                <div className="box-contador">Repositórios públicos: {userData?.public_repos}</div>
                                <div className="box-contador">Seguidores: {userData?.followers}</div>
                                <div className="box-contador">Seguindo: {userData?.following}</div>
                            </div>
                            <div className="informations">
                                <h3
                                    className="information-title">Informações
                                </h3>
                                <p className="description-info">
                                    <strong>Empresa: </strong> {userData?.company}
                                </p>
                                <p className="description-info">
                                    <strong>Website/Blog:</strong> {userData?.blog}
                                </p>
                                <p className="description-info">
                                    <strong>Localidade:</strong> {userData?.location}
                                </p>
                                <p className="description-info">
                                    <strong>Membro desde:</strong> {userData?.created_at}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="btn-perfil">
                        <a href={userData?.html_url} target="_new">
                            <Button text="Ver perfil" />
                        </a>

                    </div>
                </div>
            )}

        </>
    );
}

export default Search;
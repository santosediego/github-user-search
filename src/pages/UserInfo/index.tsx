import React from 'react';
import { User } from 'core/types/User';
import Button from 'core/components/Button';
import dayjs from 'dayjs';
import "./styles.css";

type Props = {
    user: User;
}

const UserInfo = ({ user }: Props) => {
    return (
        <div className="box-user-info" >
            <div className="box-content">
                <img className="image-perfil" src={user?.avatar_url} alt={user.login} />
                <div className="box-information">
                    <div className="contadores">
                        <div className="box-contador">Repositórios públicos: {user?.public_repos}</div>
                        <div className="box-contador">Seguidores: {user?.followers}</div>
                        <div className="box-contador">Seguindo: {user?.following}</div>
                    </div>
                    <div className="informations">
                        <h3
                            className="information-title">Informações
                        </h3>
                        <p className="description-info">
                            <strong>Empresa: </strong> {user?.company}
                        </p>
                        <p className="description-info">
                            <strong>Website/Blog:</strong> {user?.blog}
                        </p>
                        <p className="description-info">
                            <strong>Localidade:</strong> {user?.location}
                        </p>
                        <p className="description-info">
                            <strong>Membro desde: </strong>
                            {dayjs(user?.created_at).format('DD/MM/YYYY')}
                        </p>
                    </div>
                </div>
            </div>
            <div className="btn-perfil">
                <a href={user?.html_url} target="_new">
                    <Button text="Ver perfil" />
                </a>

            </div>
        </div>
    );
}

export default UserInfo;
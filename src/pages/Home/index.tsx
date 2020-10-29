import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'core/components/Button';
import "./styles.css";

const Home = () => (
    <div className="home-container">
        <h1 className="text-title">Desafio do Capítulo 3,<br /> Bootcamp DevSuperior</h1>
        <p className="text-description">
            Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.
        </p>
        <p className="text-description">
            Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.
        </p>
        <p className="text-description">
            Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki: <span className="text-email">antforfigma@gmail.com</span>
        </p>
        <Link to="/search">
            <div className="btn-comecar">
                <Button text="Começar" />
            </div>
        </Link>
    </div>
)

export default Home;
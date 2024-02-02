import React from "react";
import './MovieCart.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from '../../assets/endgame.png';

export const MovieCart = ({movie}) => {

    const { title, id, overview, vote_average, backdrop_path } = movie;
    const imageUrl = `https://image.tmdb.org/t/p/w500${backdrop_path}`;
    const overViewWords = overview.split(' ').slice(0,15).join(' ');

    return (
        <div className="card-container">
            <div className="car-imgcontainer">
                <img className="card-img" src={imageUrl} alt="movie" />
            </div>
            <div className="card-details">
                <div>
                    <span className="title">{title}</span>
                </div>
                <div>
                    <span className="genere">Genre: {overViewWords}</span>
                </div>
                <div className="ratings">
                    <span>Rating: {vote_average}</span>
                    <span>160 mins</span>
                </div>
            </div>
        </div>
    );
}

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Nav from '../components/nav';

const ShowInformation = () => {
    const {
        query: {
            id = '',
        } = {},
    } = useRouter();
    const apiKey = '55cfee44';
    const [loading, setLoading] = useState(false);
    const [showInformation, setShowInformation] = useState({});
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        setLoading(true);
        setErrorMessage(null);
        fetch(`https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`)
            .then(response => response.json())
            .then((response = {}) => {
                console.log(response);
                if (response.Response === "True") {
                    setShowInformation(response);
                } else {
                    setErrorMessage(response.Error);
                }
                setLoading(false);
            });
        }, [id]);

    const {
        Director = '',
        Genre = '',
        imdbRating = '',
        Plot = '',
        Poster = '',
        Production = '',
        Rated = '',
        Ratings = [],
        Released = '',
        Runtime = '',
        Title = '',
    } = showInformation;

    return (
        <>
            <Nav />
            <hr />
            <h1 className="title">Show Information</h1>
            <div className="showInfo">
            {
                loading
                && <span>Loading. . .</span>
            }
            {
                errorMessage
                && <span className="error">{errorMessage}</span>
            }
            {
                !loading
                && !errorMessage
                && (
                    <>
                        <div style={{ maxWidth: '75%' }}>
                            <h2 style={{ textAlign: 'center' }}>
                                {Title}&nbsp;
                                <span className="imdbRating">
                                    {imdbRating}/10
                                </span>
                            </h2>
                            <strong>Director: </strong>{Director}
                            <br />
                            <strong>Production: </strong>{Production}
                            <br />
                            <strong>Genre: </strong>{Genre}
                            <br />
                            <strong>Rated: </strong>{Rated}
                            <br />
                            <strong>Released: </strong>{Released}
                            <br />
                            <strong>Runtime: </strong>{Runtime}
                            <br />
                            <br />
                            <em>{Plot}</em>
                        </div>
                        <img 
                            src={Poster} 
                            alt={Title} 
                        />
                    </>
                )
            }
            </div>

            <style jsx>
            {`
                .title {
                    margin: 0;
                    width: 100%;
                    line-height: 1.15;
                    font-size: 48px;
                    text-align: center;
                }
                .showInfo {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    flex-direction: row;
                    margin: 10px;
                }
                .imdbRating {
                    background-color: #000;
                    border-radius: 50%;
                    color: lightgreen;
                    margin: 5px;
                    padding: 5px;
                }
                .error {
                    margin: auto;
                    font-weight: bold;
                    color: rgb(161, 15, 15);
                }
            `}
            </style>
        </>
    );
};

export default ShowInformation;

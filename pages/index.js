import React, { useState } from 'react';
import Head from 'next/head';

import Search from './search';
import Show from './show';

const Home = () => {
  const apiKey = '55cfee44';
  const [loading, setLoading] = useState(false);
  const [shows, setShows] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const fetchShows = (searchText) => {
    setLoading(true);
    setErrorMessage(null);
    fetch(`https://www.omdbapi.com/?s=${searchText}&apikey=${apiKey}`)
      .then(response => response.json())
      .then(({ Error, Response, Search }) => {
        if (Response === "True") {
          setShows(Search);
        } else {
          setErrorMessage(Error);
        }
        setLoading(false);
      });
  };
    
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="app">
        <h1 className="title">OMDB Search</h1>
        <p className="description">
          To get started, search for any TV show or movie.
        </p>
        <Search fetchShows={fetchShows} />
        <div className="shows">
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
              shows.map((show, index) => (
                <Show key={`${index}-${show.Title}`} show={show} />
              ))
            )
          }
        </div>
      </div>

      <style jsx>
      {`
        .app {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title, .description {
          text-align: center;
        }
        .shows {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          flex-direction: row;
          margin-top: 10px;
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

export default Home;

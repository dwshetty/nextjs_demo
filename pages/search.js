import React, { useState } from 'react';
import { func } from 'prop-types';

const Search = ({ fetchShows }) => {
    const [searchText, setSearchText] = useState("");
    
    const handleChange = ({
      target: {
        value = '',
      } = {},
    } = {}) => {
      setSearchText(value);
    }
  
    const handlSubmit = (event) => {
      event.preventDefault();
      fetchShows(searchText);
    }

    return (
        <>
            <form className="search">
                <input
                    type="text"
                    value={searchText}
                    onChange={handleChange}
                />
                <input
                    type="submit"
                    value="Search"
                    onClick={handlSubmit}
                />
            </form>

            <style jsx>
            {`
                .search {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: center;
                    margin-top: 10px;
                    margin-bottom: 10px;
                }
                input[type="submit"] {
                    padding: 5px;
                    background-color: transparent;
                    color: black;
                    border: 1px solid black;
                    width: 80px;
                    margin-left: 5px;
                    cursor: pointer;
                }
                input[type="submit"]:hover {
                    background-color: #282c34;
                    color: antiquewhite;
                }
                .search > input[type="text"] {
                    width: 40%;
                    min-width: 170px;
                }
            `}
            </style>
        </>
    );
};

Search.propTypes = {
    fetchShows: func,
};

export default Search;

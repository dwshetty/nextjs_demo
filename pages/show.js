import React from 'react';
import Link from 'next/link';

const Show = ({
    show: {
        imdbID = '',
        Poster = '',
        Title = '',
        Year = '',
    } = {},
}) => (
    <>
        <div className="show">
            <figure>
                <img
                    alt={`Image not available for: ${Title}`}
                    src={Poster}
                />
                <figcaption>
                    <Link href='/[id]' as={`/${imdbID}`}>
                        <a>{Title} ({Year})</a>
                    </Link>
                </figcaption>
            </figure>
        </div>

        <style jsx>
        {`
            .show {
                padding: 5px 25px 10px;
                max-width: 200px;
            }
            .show img {
                max-height: 200px;
            }
            a {
                color: #000;
                font-weight: bold;
                text-decoration: none;
            }
        `}
        </style>
    </>
);

export default Show;

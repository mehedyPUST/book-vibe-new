import React from 'react';
import { CiStar } from 'react-icons/ci';
import { Link } from 'react-router';

const BookCard = ({ books }) => {
    console.log(books)
    return (
        <div className='grid grid-cols-3 gap-5 '>
            {
                books.map(book => {
                    return (

                        <Link key={book.bookId} to={`/bookDetails/${book.bookId}`} className="card bg-base-100  shadow-sm">
                            <figure className='p-5'>
                                <img className='rounded-xl h-62'
                                    src={book.image}
                                    alt={book.bookName} />
                            </figure>
                            <div className="card-body">
                                <div className='flex items-center gap-3'>
                                    {book.tags.map((tag, ind) => {
                                        return (
                                            <div key={ind} className="badge  bg-green-200 text-green-500 font-bold">{tag}</div>
                                        )
                                    })}
                                </div>

                                <h2 className="card-title mb-2"> {book.bookName}</h2>

                                <p >By: {book.author}</p>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <div className=" border-t border-dashed ">
                                    <div className='mt-4 flex justify-between'>
                                        <div className="font-bold">{book.category}</div>
                                        <div className="flex items-center gap-1 font-bold">{book.rating} <CiStar /> </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                    )
                })
            }
        </div>
    );
};

export default BookCard;
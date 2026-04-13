import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const { bookId } = useParams();
    console.log('params ', bookId)

    const books = useLoaderData()
    console.log(books, "hgdsdhgsga")
    const expectedBook = books.find(book => book.bookId == bookId);
    console.log(expectedBook)


    const handleMarkasReead = (bookId) => {
        console.log(bookId, "gddgd")
    }
    const { yearOfPublishing, publisher, tags, category, rating, totalPages, review, image, author, bookName } = expectedBook;
    return (
        // <div className="card lg:card-side bg-base-100 shadow-sm container mx-auto">
        <div className="w-5/8 grid grid-cols-1 md:grid-cols-2   mx-auto ">
            <figure className='   bg-gray-100  flex items-center justify-center p-10 '>
                <img className='w-6/8 '
                    src={image}
                    alt="Album" />
            </figure>


            <div className='flex items-center justify-center p-10'>
                <div className=" space-y-4 ">
                    <h2 className="font-bold text-2xl">{bookName}</h2>
                    <p>By: {author}</p>
                    <hr />
                    <p>{category}</p>
                    <hr />
                    <p className='text-justify'><span className='font-bold'>Review:</span>{review}</p>

                    <div className='flex items-center gap-3'>
                        {tags.map((tag, ind) => {
                            return (
                                <div key={ind} className="badge  bg-green-200 text-green-500 font-bold">{tag}</div>
                            )
                        })}
                    </div>
                    <hr />
                    <div>
                        <p className='flex items-center justify-between'>Number of Page : <span>{totalPages}</span></p>
                        <p className='flex items-center justify-between '>Publisher: <span>{publisher}</span></p>
                        <p className='flex items-center justify-between'>Publish Time : <span>{yearOfPublishing}</span></p>
                    </div>
                    <hr />

                    <div className="flex justify-between items-center">
                        <Link
                            to={"/"}
                            className=" inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                        >
                            ←
                        </Link>
                        <div className='flex items-center gap-4'>
                            <button onClick={() => handleMarkasReead(bookId)} className="btn btn-outline">Mark as Read</button>
                            <button className="btn btn-primary">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
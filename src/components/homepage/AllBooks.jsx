import React, { use } from 'react';

import BookCard from './BookCard';




const booksPromise = fetch('/booksData.json').then(res => res.json())




const AllBooks = () => {
    const books = use(booksPromise)
    console.log(books)

    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='text-4xl font-bold text-center mb-4 bg-green-500 p-2 text-white'>Books</h2>
            <BookCard books={books} key={books.id}></BookCard>
        </div>
    );
};

export default AllBooks;
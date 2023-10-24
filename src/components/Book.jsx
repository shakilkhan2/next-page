import React from "react";
import { useLoaderData } from "react-router-dom";

const Book = () => {
  const { books } = useLoaderData();
  console.log(books);
  return (
    <div className="my-container">
      <div className="grid gap-6 mb-8 sm:grid-cols-2 md:grid-cols-4">
        {books.map((book) => (
          <div key={book.isbn13} className="overflow-hidden">
            <img
              src={book.image}
              alt="book cover"
              className="object-cover w-full h-56 md:h-64 xl:h-80"
            />
            <div>
                <p>{book.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Book;

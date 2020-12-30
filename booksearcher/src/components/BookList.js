import React from "react";
import Book from "./Books";

const BookList = (props) => {
    console.log(props.books);
    
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        {
                            props.books.map((book, i) => {
                                return <Book data={book} key={i}/>;
                            })}
                    </div>
                </div>
            </div>
        );
    
};

export default BookList;
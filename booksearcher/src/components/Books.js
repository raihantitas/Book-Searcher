import react from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import {Link} from "react-router-dom";

const Books = (props) => {
    let ImageURL;
    if (props.data.volumeInfo.imageLinks == undefined) {
        ImageURL = null;
    } else {
        ImageURL = props.data.volumeInfo.imageLinks.thumbnail;
    }
    return (
        <div className="col s12 m3">
            <div className="card large" onClick={() => {
            }}>
                <div className="card-image">
                    {ImageURL == null ? (
                        <img
                            src="https://picsum.photos/200/300"
                            alt=""
                            style={{ width: "50", height: "75" }}
                        />
                    ) : (
                        <img
                            src={ImageURL}
                            alt=""
                            style={{ width: "50", height: "75" }}
                        />
                    )}
                </div>
                <div className="card-content">
                    <p><b>{props.data.volumeInfo.title} </b></p>
                    By {props.data.volumeInfo.authors}
                </div>
                <div className="card-action">
                    <Link to={{pathname:"/book/"+props.data.id, book_id:props.data.id}}>See details</Link>
                </div>
            </div>
        </div>
    );
};

export default Books;
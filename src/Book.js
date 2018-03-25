import React, {Component} from 'react';
import PropTypes from 'prop-types'
import ShelfChanger from './ChangeShelf'
import Table from 'react-bootstrap/lib/Table';
import Truncate from 'react-truncate';

class Book extends Component {

  state = {
    expanded: false,
    truncated: false,
    lines: 10
  }

  handleTruncate(truncated) {
    if (this.state.truncated !== truncated) {
      this.setState({truncated});
    }
  }

  toggleLines(event) {
    this.setState((prevState) => ({
      expanded: !this.state.expanded
    }));
  }

  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  render() {
    const {book, books, changeShelf, lines} = this.props
    const {expanded, truncated} = this.state;

    const rating = book.averageRating ? book.averageRating : "none"

    return (
      <Table striped bordered hover>
      <thead>
        <tr>
          <th className="book-header">Book</th>
          <th className="book-header">Author</th>
          <th className="book-header">Description</th>
          <th className="book-header">Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <li>
              <div className="BookShelfTable">
                <div className="book-top">
                  <div className="book-cover" style={{
                      backgroundImage: `url(${book.imageLinks.thumbnail})`
                    }}></div>
                  <ShelfChanger
                    book={book}
                    books={books}
                    changeShelf={changeShelf}/>
                </div>
                <div>
                  <h4>{book.title}</h4>
                  <h6>{book.subtitle}</h6>
                </div>
              </div>
            </li>
          </td>
          <td className="BookAuthor">
            {
              book.authors && book.authors.map((author, index) => (
                <div key={index}>{author}</div>
            ))
            }

          </td>
          <td className="BookDescription">
            <Truncate lines={!expanded && lines} ellipsis={(<span>...
                <a href='#' onClick={() => this.toggleLines()}>More</a>
              </span>)} onTruncate={() => this.handleTruncate()}>
              {book.description}
            </Truncate>
            {
              !truncated && expanded && (<span>
                <a href='#' onClick={() => this.toggleLines()}>Less</a>
              </span>)
            }
          </td>
          <td className="book">
            <p> <b> Average Rating:</b> {rating} </p>
            <p> <b> Page Count:</b> {book.pageCount} </p>
            <p> <b> Publish Date:</b> {book.publishedDate} </p>
          </td>
        </tr>
      </tbody>
    </Table>)
  }
}

export default Book

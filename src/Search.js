import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ReturnedBooks from './ReturnedBooks'
import * as BooksAPI from './BooksAPI'
import sortBy from 'sort-by';

class Search extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  state = {
    query: '',
    filteredBooks: [],
    searchResults: false
  }

  getBooks = (event) => {
    const query = event.target.value
    this.setState({ query: query })

    if (query) {
      BooksAPI.search(query).then((books) => {
        books.length > 0 ?  this.setState({filteredBooks: books, searchResults: false }) : this.setState({ filteredBooks: [], searchResults: true })
      })
    } else {
      this.setState({filteredBooks: [], searchResults: false })
    }
  }

  render() {

    const { query, filteredBooks, searchResults } = this.state
    const { books, changeShelf } = this.props
    filteredBooks.sort(sortBy('title'))
      return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search"  to="/">Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text"
                placeholder="Search by title or author"
                value={ query }
                onChange={ this.getBooks } />
            </div>
          </div>
          <div className="search-books-results">
            {(
              <div>
                <ol className="books-grid">
                  {filteredBooks.map((book) => (
                    <ReturnedBooks
                      book={ book }
                      books={ books }
                      key={ book.id }
                      changeShelf={ changeShelf }
                    />
                  ))}
                </ol>
              </div>
            )}
            { searchResults  && (<h3 className="searchResults">No results found!!</h3> )}
          </div>
        </div>
      )}
}
export default Search

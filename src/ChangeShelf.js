import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ShelfChanger extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired,
  }

  render() {
    const { book, books, changeShelf } = this.props

    let currentShelf = 'moveTo'

    for (let shelf of books ) {
      if (shelf.id === book.id)  {
          currentShelf = shelf.shelf
      }
    }

    return (
      <div className="book-shelf-changer">
        <select  onChange={(event) => changeShelf(book, event.target.value)}
          defaultValue={ currentShelf }>
          <option value="moveTo" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }

}

export default ShelfChanger

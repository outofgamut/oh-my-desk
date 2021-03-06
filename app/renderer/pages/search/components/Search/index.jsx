import React from 'react';
import SearchInputContainer from '../../containers/SearchInputContainer';
import SearchListContainer from '../../containers/SearchListContainer';
import SearchMenuContainer from '../../containers/SearchMenuContainer';
import './Search.scss';

class Search extends React.Component {
  render() {
    return (
      <div className="Search">
        <SearchMenuContainer />
        <div className="Search__content">
          <SearchInputContainer />
          <SearchListContainer />
        </div>
      </div>
    );
  }
}

export default Search;

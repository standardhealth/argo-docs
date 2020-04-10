import React from 'react';
import classnames from 'classnames';

const Search = props => {
  const inputRef = React.useRef();

  return (
    <div className="navbar__search" key="search-box">
      <span
        aria-label="expand searchbar"
        role="button"
        className={classnames('search-icon', {
          'search-icon-hidden': props.isSearchBarExpanded,
        })}
        tabIndex={0}
      />
    </div>
  );
};

export default Search;

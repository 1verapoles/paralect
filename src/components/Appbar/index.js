import { useState } from 'react';
import './appbar.css';


function Appbar({ fetchData }) {
  const [searchValue, setSearchValue] = useState('');

  const changeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const keydownHandler = (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      searchValue && searchValue.trim() && fetchData(searchValue.trim());
    }
  };

  return (
    <div className="appbar">
      <div className="container">
        <div className="inner">
          <div className="github" />
          <input value={searchValue} onChange={changeHandler} onKeyDown={keydownHandler} placeholder="Enter GitHub username" className="search" />
        </div>
      </div>
    </div>
  );
}

export default Appbar;

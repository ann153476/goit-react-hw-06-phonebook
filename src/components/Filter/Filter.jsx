import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { getfilter } from 'redux/contacts-slice';

const Filter = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const handleFilter = ({ target }) => {
    setFilter(target.value);
    dispatch(getfilter(target.value));
  };
  return (
    <div>
      <h2>Find contacts by name</h2>
      <label>
        <input value={filter} type="name" onChange={handleFilter} />
      </label>
    </div>
  );
};

export default Filter;

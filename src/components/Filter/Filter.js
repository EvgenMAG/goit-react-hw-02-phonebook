import React from 'react';
import s from './Filter.module.css';

const Filter = ({ search, onChangeInput }) => {
  return (
    <div className={s.filter__container}>
      <h3 className={s.filter__title}>Find contact by name</h3>
      <input
        className={s.filter__input}
        type="text"
        value={search}
        onChange={onChangeInput}
      />
    </div>
  );
};

export default Filter;

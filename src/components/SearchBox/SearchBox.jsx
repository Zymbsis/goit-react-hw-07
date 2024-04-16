import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const searchFieldId = useId();
  const dispatch = useDispatch();

  return (
    <div className={css.searchForm}>
      <label htmlFor={searchFieldId}>Find contacts by name</label>
      <input
        type="text"
        name="searchField"
        id={searchFieldId}
        onChange={e => dispatch(changeFilter(e.target.value))}
      ></input>
    </div>
  );
};
export default SearchBox;

import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedQuery = query.trim();

    if (trimmedQuery === '') {
      toast.error('Please enter a search term!');
      return;
    }

    onSubmit(trimmedQuery);
    setQuery('');
  };

  return (
    <header className={styles.header}>
     <form onSubmit={handleSubmit} className={styles.form}>
  <input
    type="text"
    autoComplete="off"
    autoFocus
    placeholder="Search images and photos"
    value={query}
    onChange={handleChange}
    className={styles.input}
  />
  <button type="submit" className={styles.button} title="Search">
    🔍
  </button>
</form>
      <Toaster position="top-right" />
    </header>
  );
};

export default SearchBar;

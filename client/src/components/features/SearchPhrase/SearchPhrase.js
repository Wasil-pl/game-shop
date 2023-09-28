import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SearchPhrase.module.scss';
import { Button, Form, FormControl } from 'react-bootstrap';

const SearchPhrase = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/products/search/${searchPhrase}`);
  };

  return (
    <Form className={styles.searchContainer} onSubmit={handleSubmit}>
      <FormControl
        onChange={(e) => setSearchPhrase(e.target.value)}
        value={searchPhrase}
        type="text"
        placeholder="Search"
        className="mr-sm-2"
      />
      <Button variant="success" type="submit">
        Search
      </Button>
    </Form>
  );
};

export default SearchPhrase;

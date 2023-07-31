import React, { useState } from 'react';
import { Form, Input, Select, Button } from 'antd';
import 'antd/dist/reset.css';
import './SearchForm.css';

const { Option } = Select;
// State to store search term and media type
const SearchForm = ({ onSearch }) => {
  const [term, setTerm] = useState('');
  const [mediaType, setMediaType] = useState('all');

// Function to handle search button click
  const handleSearch = () => {
     // Call the 'onSearch' prop function with search term and media type
    onSearch({ term, mediaType });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    // Search form component using Ant Design Form and Input components
    <Form className="search-form-container" layout="inline"  data-testid="search-form">
      <Form.Item>
        <Input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          onKeyUp={handleKeyPress}
          placeholder="Enter search term"
          data-testid="search-input"
        />
      </Form.Item>
      <Form.Item>
        <Select
          value={mediaType}
          onChange={(value) => setMediaType(value)}
          style={{ width: 120 }}
          data-testid="media-type-select"
        >
          <Option value="all">All</Option>
          <Option value="movie">Movie</Option>
          <Option value="podcast">Podcast</Option>
          <Option value="music">Music</Option>
          <Option value="musicVideo">Music Video</Option>
          <Option value="audiobook">Audiobook</Option>
          <Option value="shortFilm">Short Film</Option>
          <Option value="tvShow">TV Show</Option>
          <Option value="software">Software</Option>
          <Option value="ebook">eBook</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={handleSearch}>
          Search
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SearchForm;

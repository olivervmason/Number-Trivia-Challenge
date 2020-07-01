import React, {useState} from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import Number from './Number';

// 0. Import useState

// 1. Convert from class to function
const App = () => {
// Delete line:
  // state = { number: '' };

// 3. 
  const [number, setNumber] = useState('')

// 6. Change to const:
  const onSearchSubmit = async (numberSel, option) => {
    const response = await axios.get(
      `http://numbersapi.com/${numberSel}/${option}`
    );

// 4. Change this line:
    // this.setState({ number: response.data });
    setNumber(response.data)
  };

// 5. Get rid of render
  // render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        {/* Change this.onSearchSubmit */}
        <SearchBar onSubmit={onSearchSubmit} />
        {/* Change this.state.number */}
        <Number number={number} />
      </div>
    );
  // }
}

export default App;

//  0. Import useState
import React, {useState} from 'react';
import { Dropdown } from 'semantic-ui-react';

// 1.0 Change class to function:
const SearchBar = (props) => {

// 2. Delete state variable and replace with 2 consts:
  // state = { numberSel: '', option: '' };
  const [numberSel, setNumSel] = useState('')
  const [option, setOption] = useState('')

// 3. Convert to const, because it is inside of a function:
  const onFormSubmit = (event) => {
    event.preventDefault();

    if (event.keyCode === 13) {
// 4. this.state.numberSel and this.state.option changed
      props.onSubmit(numberSel, option);
    }
  };

// 5. Get rid of render method:
  // render() {
    const numberOptions = [
      {
        key: 'trivia',
        text: 'Trivia',
        value: 'trivia',
      },
      {
        key: 'year',
        text: 'Year',
        value: 'year',
      },
      {
        key: 'date',
        text: 'Date',
        value: 'date',
      },
      {
        key: 'math',
        text: 'Math',
        value: 'math',
      },
    ];
    return (
      <div className="ui segment">
{/* 6. this.onFormSubmit => onFormSubmit */}
        <div className="ui form" onSubmit={onFormSubmit}>
          <div className="field">
            <label>Search a number</label>
            <Dropdown
              placeholder="Select"
              fluid
              selection
              options={numberOptions}
              onChange={(e) =>
  // Replace:
                // this.setState({ option: e.target.innerText.toLowerCase() })
              setOption(e.target.innerText.toLowerCase())
              }
            />
            <input
              type="text"
  // Was this.state.numberSel
              value={numberSel}
  /* 7. this.setState({ numberSel: e.target.value }) becomes setNumber */
              onChange={(e) => setNumSel(e.target.value)}
  // Was this.onFormSubmit
              onKeyUp={onFormSubmit}
            />
          </div>
        </div>
      </div>
    );
  // }
}

export default SearchBar;

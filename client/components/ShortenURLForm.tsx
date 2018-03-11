import * as React from 'react';

// TODO: investigate why this doesn't work with ES6 import syntax
const urlRegex = require('url-regex');

interface IShortenURLFormProps {};
interface IShortenURLFormState {
  isButtonDisabled: boolean,
  url: string,
}

const inputStyles: React.CSSProperties = {
  fontSize: '16px',
  padding: '10px',
  width: '50%'
};

const buttonStyles: React.CSSProperties = {
  height: '42px'
};

class ShortenURLForm extends React.Component<IShortenURLFormProps, IShortenURLFormState> {
  constructor(props: IShortenURLFormProps) {
    super(props);

    this.state = {
      isButtonDisabled: true,
      url: ""
    };
  }

  onButtonClick = () => {
    console.log('Shorten Url:', this.state.url);
  }

  onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const isButtonDisabled = !urlRegex().test(value);

    this.setState({
      url: value,
      isButtonDisabled
    });
  }

  onInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !this.state.isButtonDisabled) {
      this.onButtonClick();
    }
  }

  render() {
    return (
      <div>
        <input
          style={inputStyles}
          type="text"
          onKeyPress={this.onInputKeyPress}
          onChange={this.onInputChange}
          value={this.state.url}
          placeholder="Enter a URL here" />
        <button
          style={buttonStyles}
          disabled={this.state.isButtonDisabled}
          onClick={this.onButtonClick}>Shorten!</button>
      </div>
    );
  }
}

export default ShortenURLForm;

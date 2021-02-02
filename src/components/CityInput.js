import React from 'react';
import './CityInput.css';

export default class CityInput extends React.Component {
  render(props) {
    const onClick = async i => {
      i.persist();
      const eventKey = i.which ? i.which : i.keyCode;
      const city = i.target.value;

      if (eventKey === 13) {
        if (/^[a-zA-ZäöüÄÖÜß ]+$/.test(city)) {
          i.target.classList.add('loading');

          if (await this.props.ApiCall(city)) i.target.placeholder = 'Enter a City:';
          else i.target.placeholder = 'City was not found, try again.';
        } 
        else i.target.placeholder = 'Please enter a valid city name.';
        i.target.classList.remove('loading');
        i.target.value = '';
      }
    };

    const style = {
      top: this.props.city ? '-380px' : '-20px',
      width: '800px',
      display: 'inline-block',
      padding: '10px 0px 10px 30px',
      lineHeight: '80%',
      position: 'relative',
      outline: 'none',
      fontSize: '20px',
      transition: 'all 0.5s ease-out'
    };

    return (
      <input
        className='city-input'
        style={style}
        type='text'
        placeholder='Enter a City:'
        onKeyPress={onClick}
      />
    );
  }
}

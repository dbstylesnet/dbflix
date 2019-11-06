import React from 'react';
import ReactDOM from 'react-dom';
import Kodflix from './Kodflix';

it('renders without crashing', () => {
  const div = document.createElement('section');
  ReactDOM.render(<Kodflix />, div);
  ReactDOM.unmountComponentAtNode(div);
});

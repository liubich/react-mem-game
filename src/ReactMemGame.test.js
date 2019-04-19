import React from 'react';
import ReactDOM from 'react-dom';
import ReactMemGame from './ReactMemGame';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReactMemGame />, div);
  ReactDOM.unmountComponentAtNode(div);
});

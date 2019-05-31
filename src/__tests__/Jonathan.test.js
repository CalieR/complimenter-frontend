import React from 'react';
import ReactDOM from 'react-dom';
import Jonathan from '../components/Jonathan';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Jonathan />, div);
  ReactDOM.unmountComponentAtNode(div);
});


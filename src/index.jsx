import React from 'react';
import ReactDom from 'react-dom';
import { RouterComponent} from './router.jsx';
// import { HomeComponent  } from './modules/home';

ReactDom.render(
  <RouterComponent />,
  document.getElementById('application')
)
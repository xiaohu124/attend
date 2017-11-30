import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/CommentBox.css';
import './styles/CommentTitle.css';
import './styles/CommentMain.css';
import './styles/CommentSubmit.css';
import CommentBox from './views/CommentBox'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CommentBox />, document.getElementById('root'));
registerServiceWorker();

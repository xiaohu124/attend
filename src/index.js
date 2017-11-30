import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/CommentBox.scss';
import './styles/CommentTitle.scss';
import './styles/CommentMain.scss';
import './styles/CommentSubmit.scss';
import CommentBox from './views/CommentBox'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CommentBox />, document.getElementById('root'));
registerServiceWorker();

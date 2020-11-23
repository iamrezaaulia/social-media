import { render } from 'react-dom';
import 'normalize.css';
import ApolloProvider from './ApolloProvider';
import reportWebVitals from './reportWebVitals';

render(ApolloProvider, document.getElementById('root'));

reportWebVitals();

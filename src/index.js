import ReactDom from 'react-dom';
import App from './App';
import store from './store/index';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

ReactDom.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById('root')
);

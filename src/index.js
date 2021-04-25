import ReactDom from 'react-dom';
import App from './App';
import store from './store/index';
import { Provider } from 'react-redux';


	ReactDom.render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('root')
	);


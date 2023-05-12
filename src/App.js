import { React } from 'react';
import './App.scss';
import MapWrapper from './components/MapWrapper';

const App = (context) =>
	<div className="App">
		<MapWrapper { ...context }/>
	</div>;

export default App;

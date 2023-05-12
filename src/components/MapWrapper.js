/* eslint-disable no-magic-numbers */
import { MapContainer, TileLayer } from 'react-leaflet';
import { React } from 'react';
import tileLayer from '../components/tileLayer';
import Location from './Location';

const center = [52.22977, 21.01178];

const MapWrapper = (context) =>
	<MapContainer center={ center } zoom={ 18 } scrollWheelZoom={ false }>
		<TileLayer { ...tileLayer }/>
		<Location/>
	</MapContainer>
  ;

export default MapWrapper;

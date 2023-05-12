/* eslint-disable max-len */
/* eslint-disable no-magic-numbers */
import { React, useEffect, useState } from 'react';
import { useMap, Marker, Popup, Circle }
	from 'react-leaflet';

const Location = () => {
	const map = useMap();
	const [position, setPosition] = useState(null);

	useEffect(() => {
		map.locate({
			setView: true,
		});
		map.on('locationfound', (event) => {
			setPosition(event.latlng);
		});
	}, [map]);

	return position
		? <><Circle center={ position } weight={ 2 } color="red" fillColor="red" sfillOpacity={ 0.1 } radius={ 500 }/>
			<Marker position={ position }>
				<Popup>You are here</Popup>
			</Marker>
		</>

		: null;
};

export default Location;

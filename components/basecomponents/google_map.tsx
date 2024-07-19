import React from 'react';
import { GoogleMap, useLoadScript, Marker, Circle } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
    width: '100vw',
    height: '100vh',
};

const center = {
    lat: -23.550520,
    lng: -46.633308,
};

const circleOptions = {
    fillColor: "#888888", // Bright purple
    fillOpacity: 0.5,    // Increase the opacity for brightness
    strokeColor: "#800080", // Bright purple
    strokeOpacity: 1,
    strokeWeight: 2,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 15000, // Adjust radius as needed
    zIndex: 1
};

const Map = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.GOOGLE_MAP_API_KEY,
        libraries,
    });

    if (loadError) {
        return <div>Error loading maps</div>
    }

    if (!isLoaded) {
        return <div>Loading maps</div>;
    }

    return (
        <div>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={12}
                center={center}
                options={{
                    disableDefaultUI: true,
                    styles: [{
                        featureType: 'all',
                        stylers: [
                            { saturation: -80 }
                        ]
                    }]
                }}               
            >
                <Marker position={center} />
                <Circle
                    center={center}
                    options={circleOptions}
                />
            </GoogleMap>
        </div>
    )
}

export default Map;

import React, {useEffect, useState} from 'react'
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

type Props = {
    center: {
        latitude: number
        longitude: number
    }
}

const GoogleMapComponent = ({center}: Props) => {
    type Location = {
        lat: number,
        lng: number
    }
    const [centerLocation, setSencerLocation] = useState<Location | undefined>()

    useEffect(() => {
        setSencerLocation({...centerLocation, lat: center.latitude, lng: center.longitude})
    }, [])

    const defaultProps = {
        center,
        zoom: 11
    }

    const containerStyle = {
        width: '100%',
        height: '30vh'
    };

    const centerL = {
        lat: -3.745,
        lng: -38.523
    };

    if(centerLocation === undefined) {
        return  <h1>Loading...</h1>
    }

    return (
        <div className='w-full col-span-3'>
            <LoadScript
                googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API as string}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={centerLocation}
                    zoom={15}
                >
                    <Marker position={centerLocation}></Marker>
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default GoogleMapComponent;
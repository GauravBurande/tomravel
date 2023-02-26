import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const Map = () => {

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(75.41);
    const [lat, setLat] = useState(18.16);
    const [zoom, setZoom] = useState(7.37);
    const [place, setPlace] = useState("");
    // const [search, setSearch] = useState(1);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });
        // eslint-disable-next-line
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    const getPlace = () => {
        fetch(`https://api.geoapify.com/v1/geocode/search?text=${place}&lang=en&limit=10&type=city&apiKey=${process.env.REACT_APP_GEOAPIFY_API_KEY}`)
            .then(response => response.json())
            .then(data => {
                console.log(data.features)
                // const coordinates = data.features[0].geometry.coordinates
                // setLng(coordinates[0])
                // setLat(coordinates[1])
                // setZoom(11)
                // setSearch(Math.random())
            })
    }

    return (
        <div>

            <div className='mt-8 relative'>
                <div className="bg-gray-500 text-gray-200 py-3 px-6 font-mono z-10 absolute top-0 left-0 m-3 rounded-md">
                    Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                </div>
                <div ref={mapContainer} className="h-[60vh]" />
            </div>

            <div className="flex justify-center items-center">
                <div className="mb-3 xl:w-96">
                    <div className="relative mb-4 flex w-full justify-center items-stretch">
                        <input
                            value={place}
                            onChange={(e) => { setPlace(e.target.value) }}
                            type="search"
                            className="relative m-0 block w-[1%] min-w-[50vw] flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-6 py-3 text-base font-normal outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                            placeholder="Search place"
                            aria-label="Search"
                            aria-describedby="button-addon2" />
                        <span
                            onClick={getPlace}
                            className="input-group-text flex cursor-pointer ml-3 hover:bg-gray-600 items-center whitespace-nowrap rounded px-4 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                            id="basic-addon2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                    clipRule="evenodd" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Map

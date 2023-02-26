import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const Map = () => {

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(75.41);
    const [lat, setLat] = useState(18.16);
    const [zoom, setZoom] = useState(7.37);
    const [searchInput, setInput] = useState("");
    const [searchData, setSearchData] = useState([]);
    const [category, setCategory] = useState("catering");

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });
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
        fetch(`https://api.geoapify.com/v2/places?categories=${category}&conditions=${searchInput}&bias=proximity:-122.426668552272488455,37.781137113907178104&limit=20&apiKey=${process.env.REACT_APP_GEOAPIFY_API_KEY}`)
            .then(response => response.json())
            .then(data => {
                setSearchData(data.features)
            })
    }

    const categories = ["public_transport.subway", "accommodation", "activity", "commercial", "production", "postal_code", "political", "low_emission_zone", "populated_place", "administrative", "public_transport", "sport", "building", "airport", "adult", "beach", "amenity", "camping", "tourism", "service", "rental", "pet", "parking", "office", "national_park", "natural", "leisure", "entertainment", "childcare", "catering"]

    const getNearby = (category = "catering") => {
        setCategory(category)
        fetch(`https://api.geoapify.com/v2/places?categories=${category}&bias=proximity:-122.426668552272488455,37.781137113907178104&limit=20&apiKey=${process.env.REACT_APP_GEOAPIFY_API_KEY}`)
            .then(response => response.json())
            .then(data => setSearchData(data.features))
    }

    // const featureData = {
    //     "address_line1": "Ella Hill Hutch Community Center",
    //     "address_line2": "Buchanan Street Mall, San Francisco, CA 95115, United States of America",
    //     "categories": ["address", "address_line", "address_line"],
    //     "city": "San Francisco",
    //     "country": "United States",
    //     "distance": 100,
    //     "housenumber": 56,
    //     "district": "Western Addition",
    //     "formatted": "Ella Hill Hutch Community Center, Buchanan Street Mall, San Francisco, CA 95115, United States of America",
    //     "name": "Ella Hill Hutch Community Center",
    //     "place_id": "51ad683d9c799b5ec059478a7ba7bfe34240f00102f9017c2c4b0f00000000920320456c6c612048696c6c20487574636820436f6d6d756e6974792043656e746572",
    //     "state": "California",
    //     "street": "Buchanan Street Mall",
    //     "state_code": "CA",
    //     "postcode": "95115"
    // }

    return (
        <div>

            <div className='mt-8 pb-10 relative'>
                <div className="bg-gray-500 text-gray-200 py-3 px-6 font-mono z-10 absolute top-0 left-0 m-3 rounded-md">
                    Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                </div>
                <div ref={mapContainer} className="h-[60vh]" />
            </div>

            <div className='pb-10'>
                <div className='flex items-center justify-between'>
                    <div>
                        <p className='px-20 text-xl font-bold'>search for nearby:</p>
                        <p className='px-20 text-sm'>or type conditions in the input box</p>
                    </div>

                    <div className='pr-20'>
                        <p onClick={() => { setSearchData([]) }} className='py-2 px-3 cursor-pointer hover:bg-blue-300 rounded-full bg-blue-200 text-black'>Clear</p>
                    </div>
                </div>

                <div className='flex gap-2 px-20 flex-wrap py-2'>
                    {categories.map((category, index) => {
                        return (
                            <div key={index}>
                                <p onClick={() => { getNearby(category) }} className='bg-white cursor-pointer hover:bg-gray-200 py-1 px-3 text-black rounded-full'>{category}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="flex justify-center items-center">
                <div className="mb-3 xl:w-96">
                    <div className="relative mb-4 flex w-full justify-center items-stretch">
                        <input
                            value={searchInput}
                            onChange={(e) => { setInput(e.target.value) }}
                            type="search"
                            className="relative m-0 block w-[1%] min-w-[50vw] flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-6 py-3 text-base font-normal outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                            placeholder="Search by conditions..."
                            aria-label="Search"
                            aria-describedby="button-addon2" />
                        <span
                            onClick={getPlace}
                            className="input-group-text flex cursor-pointer ml-3 hover:bg-gray-600 items-center whitespace-nowrap rounded px-4 text-center disabled:bg-red-500 text-base font-normal text-neutral-700 dark:text-neutral-200"
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

            <div>
                {
                    searchData.length > 0 ?
                        <div className='flex flex-wrap gap-8 justify-center items-start'>
                            {
                                searchData.map((place, i) => {
                                    return (
                                        <div key={i}>
                                            <div>
                                                <div className=' bg-gray-800 py-4 px-6 rounded-3xl'>
                                                    <h3 className='font-semibold text-lg pb-3'>{place.properties.name ? place.properties.name : place.properties.address_line1}</h3>
                                                    <p className='max-w-xs pb-2'>{place.properties.formatted}</p>
                                                    <p className='pb-2'>{place.properties.categories.map((ctg, i) => {
                                                        return (
                                                            <div className='flex flex-wrap gap-3' key={i}>
                                                                <div className='bg-blue-100 text-black my-1 py-1 px-2 rounded-md'>
                                                                    {ctg}
                                                                </div>
                                                            </div>
                                                        )
                                                    })}</p>
                                                    <p className='flex item-center'><p className='py-2 pr-1'>distance: </p><span className='bg-yellow-100 block text-black my-1 py-1 px-2 rounded-md'>
                                                        {place.properties.distance} m.
                                                    </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        : <div className='flex items-center justify-center py-8'>
                            <p className=''>Please search something first.</p>
                        </div>
                }
            </div>
        </div>
    )
}

export default Map

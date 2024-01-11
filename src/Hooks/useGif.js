import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';


// Accessing the Ebviroment variable. .env.local file is required and the variable name should start with REACT_APP_
//all the variables are stored in process.env and and are written in .env file in the root directory 
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

function useGif(tag) {

    const [gif, setGif] = React.useState('');
    const [loader, setLoader] = useState(false);

    //Fetching data using api key and setting the gif state
    async function fetchGif() {
        setLoader(true);

        // fetch(url) using fetch method
        // const output = await fetch(url);
        // const response1 = await output.json();
        // const imageSrc = response1.data.images.downsized_large.url;
        // console.log(imageSrc);


        //Using axios
        const response2 = await axios.get(tag ? `${url}&tag=${tag}` : url);
        const { data } = response2;
        const imageSrc = data.data.images.downsized_large.url;
        // console.log(imageSrc);

        //Setting gif state
        setGif(imageSrc);

        setLoader(false);
    }

    //useEffect hook
    useEffect(() => {
        fetchGif();
    }, [])

    return { gif, fetchGif, loader };
}

export default useGif
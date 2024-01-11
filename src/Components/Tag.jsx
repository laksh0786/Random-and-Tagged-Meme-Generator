import React from 'react'
import Spinner from './Spinner';
import {useState } from 'react';
import useGif from '../Hooks/useGif';


  // Accessing the Ebviroment variable. .env.local file is required and the variable name should start with REACT_APP_
  //all the variables are stored in process.env and and are written in .env file in the root directory 
  // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function Tag() {

  const [tag, setTag] = useState('Car');
  // const [gif, setGif] = React.useState('');
  // const [loader, setLoader] = useState(false);


  // //Fetching data using api key and setting the gif state
  // async function fetchGif() {
  //   setLoader(true);

  //   //Now to fetch the gif according to the tag we need to add the tag in the url as this url supports the tag parameter
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

  //   // fetch(url) using fetch method
  //   // const output = await fetch(url);
  //   // const response1 = await output.json();
  //   // const imageSrc = response1.data.images.downsized_large.url;
  //   // console.log(imageSrc);


  //   //Using axios
  //   const response2 = await axios.get(url);
  //   const { data } = response2;
  //   const imageSrc = data.data.images.downsized_large.url;
  //   // console.log(imageSrc);

  //   //Setting gif state
  //   setGif(imageSrc);

  //   setLoader(false);
  // }

  // //useEffect hook
  // useEffect(() => {
  //   fetchGif();
  // }, [])

  const { gif, fetchGif, loader } = useGif(tag);
  // console.log(gif , loader);


  const clickHandler = () => {
    fetchGif(tag);
  }

  const changeHandler = (e) => {
    setTag(e.target.value);
  }

  return (
    <div className="w-1/2  bg-blue-300 flex flex-col items-center rounded-3xl border-2 border-black gap-y-5 mt-4 mb-20">

      <h2 className='text-2xl underline mt-2 font-semibold'>Random {tag} Gif</h2>

      {loader ? <Spinner /> : <img src={gif} alt="Gifs" width="450" />}

      <input type="text" onChange={changeHandler} placeholder='Enter a tag' value={tag}
        className="w-10/12 text-lg py-2 rounded-lg mb-1 px-2 text-center outline-dashed outline-blue-700" />

      <button className='w-10/12 bg-white opacity-70 text-lg py-1 rounded-lg mb-4' onClick={clickHandler}>Generate</button>

    </div>
  )
}

export default Tag;
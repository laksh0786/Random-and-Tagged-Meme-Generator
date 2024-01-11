import React from 'react'
import Spinner from './Spinner';
import useGif from '../Hooks/useGif';

function Random() {

    const {gif , fetchGif , loader} = useGif();

    //Click handler
    const clickHandler = () => {
        fetchGif();
    }

    return (
        <div className="w-1/2  bg-green-400 flex flex-col items-center rounded-3xl border-2 border-black gap-y-5 mt-4">

            <h2 className='text-2xl underline mt-2 font-semibold'>A Random Gif</h2>

            { loader ? <Spinner/> : <img src={gif} alt="Gifs" width="450"/> }

            <button className='w-10/12 bg-white opacity-70 text-lg py-1 rounded-lg mb-4' onClick={clickHandler}>Generate</button>

        </div>
    )
}

export default Random
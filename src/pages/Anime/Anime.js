import React, { useEffect , useState} from 'react'
import ReactPlayer from 'react-player';

function Anime() {

/*
Using the example episode ID of 'spy-x-family-episode-1',
explicitly defining default server for demostrative purposes.
*/
const [data,setData] = useState({});
const url = "https://consumet-api-af3e.vercel.app/movies/flixhq/watch?episodeId=10766&mediaId=tv/watch-rick-and-morty-39480";
const fetcher = async () => {
 try {
   fetch(url).then(res=>res.json()).then(res=>setData(res));
 return data;
 } catch (err) {
 throw new Error(err.message);
 }
};

useEffect(()=>{
  fetcher();
},[]);

console.log(data);

  return (
    <div>Anime
      <ReactPlayer url={`https://yot.gnicirp.com/_v10/6473884104bd7bd3abca7…43b6234e913ea589a2f14e8cfda68cc04/1080/index.m3u8`}></ReactPlayer>
    </div>
  )
}

export default Anime
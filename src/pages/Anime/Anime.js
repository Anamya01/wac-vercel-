import React, { useEffect , useState} from 'react'


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
    </div>
  )
}

export default Anime

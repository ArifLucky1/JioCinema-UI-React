
import Header from "../components/Header/Header"
import Tags from "../components/tags/Tags"
import Channels from "../components/channels/channels"
import Carousel from "../components/carousel/Carousel"
import Featured from "../components/featured/Featured"
import Shows from "../components/shows/Shows"
import { useEffect, useState } from "react"



export default function Home() {
    
      let [movies,setMovies] = useState([]);

      useEffect(async () => {

        try
        {
          let movieResponse = await fetch("http://localhost:3000/movies");
          let moviesData = await movieResponse.json();
          // console.log(movies);
          setMovies(moviesData);
        }
        catch(err)
        {
          console.log(err);
        }
      }, [])

    return (
    <>
      <Header/>
      <Tags/>
      <Carousel/>
      <Channels/>
      <Featured/>
      <Shows title="Action Movies"/>
      <Shows title="Hindi Movies"/>
      <Shows title="English Movies"/>
      <Shows title="South Movies"/>
    </>
  )
}

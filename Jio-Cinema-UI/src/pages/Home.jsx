
import Header from "../components/Header/Header"
import Tags from "../components/tags/Tags"
import Channels from "../components/channels/channels"
import Carousel from "../components/carousel/Carousel"
import Featured from "../components/featured/Featured"
import Shows from "../components/shows/Shows"
import { useEffect, useState } from "react"



export default function Home() {
    
      let [movies,setMovies] = useState([]);
      let [featuredMovies, setFeaturedMovies] = useState([]);
      let [actionMovies, setActionMovies] = useState([]);
      let [hindiMovies, setHindiMovies] = useState([]);
      let [englishMovies, setEnglishMovies] = useState([]);

      useEffect(async () => {

        try
        {
          let movieResponse = await fetch("http://localhost:3000/movies");
          let moviesData = await movieResponse.json();
          // console.log(movies);
          setMovies(moviesData);

          // filter for featured movies
            let featMovies = moviesData.filter((movie) => {
              return movie.featured === true
            })
            // console.log(featMovies)
            setFeaturedMovies(featMovies)


            // filter for Action movies
            let actionMovies = moviesData.filter((movie) => {
              return movie.genre.includes("Action")
            })
            setActionMovies(actionMovies)


            // filter for Hindi movies
            let hindiMovies = moviesData.filter((movie) => {
              return movie.language === "Hindi"
            })
            setHindiMovies(hindiMovies)


            // filter for English movies
            let englishMovies = moviesData.filter((movie) => {
              return movie.language === "English"
            })
            setEnglishMovies(englishMovies)


            // filter for South movies
            let southMovies = moviesData.filter((movie) => {
              return movie.language === "Malayalam"
            })
          // console.log(southMovies)
            setSouthMovies(southMovies)

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
      <Featured movies={featuredMovies}/>
      <Shows title="Action Movies"/>
      <Shows title="Hindi Movies"/>
      <Shows title="English Movies"/>
      <Shows title="South Movies"/>
    </>
  )
}

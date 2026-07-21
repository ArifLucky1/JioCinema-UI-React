
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
      let [teluguMovies, setTeluguMovies] = useState([]);

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
            setFeaturedMovies(featMovies.slice(0,5))


            // filter for Action movies
            let fightMovies = moviesData.filter((movie) => {
              return movie.genre.includes("Action")
            })
            setActionMovies(fightMovies.slice(0,6))


            // filter for Hindi movies
            let hinMovies = moviesData.filter((movie) => {
              return movie.language === "Hindi"
            })
            setHindiMovies(hinMovies.slice(0,6))


            // filter for English movies
            let engMovies = moviesData.filter((movie) => {
              return movie.language === "English"
            })
            setEnglishMovies(engMovies.slice(0,6))


            // filter for South movies
            let TelMovies = moviesData.filter((movie) => {
              return movie.language === "Malayalam"
            })
          // console.log(southMovies)
            setTeluguMovies(TelMovies.slice(0,6))

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
      <Shows title="Action Movies" movies={actionMovies}/>
      <Shows title="Hindi Movies" movies={hindiMovies}/>
      <Shows title="English Movies" movies={englishMovies}/>
      <Shows title="South Movies" movies={southMovies}/>
    </>
  )
}

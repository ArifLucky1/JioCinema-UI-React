import styles from "./header.module.css";
import JCLogo from '../../assets/jc_logo.svg';
import crown from '../../assets/crown.svg'
import searchIcon from '../../assets/ic_search.svg'
import voiceSearch from '../../assets/voice-search.svg'
import jioIcon from '../../assets/jio-logo.png'
import { useEffect, useState } from "react";
import Show from "../show/Show";


export default function Header(props) {

        let navLinks = ['Home', 'Sports', 'Movies', 'TV Shows', 'More']

        let [searchTitle, setSearchTitle] = useState("");
        let [filteredMovies, setFilteredMovies] = useState([]) 

        useEffect(()=>{

          if(searchTitle!=="")
          {
            let filterMovies = props.movies.filter((movie)=>{
              return movie.name.toUpperCase().indexOf(searchTitle.toUpperCase())==0
            })
  
            setFilteredMovies(filterMovies)

          }
          else{
            setFilteredMovies([]);
          }



        },[searchTitle])
  
  return (
    <>
      <header className={styles.header}>
       
       <nav className={styles.navigation}>
          <div className={styles.logo}>
            <img src={JCLogo} alt="jc_logo" />
            <div className={styles.premium}>
              <img src={crown} alt="crown" /> <p>Go Premium</p> </div>
        </div>

      <ul className={styles.navLinks}>
            {navLinks.map((link)=>{
              return <li className={styles.navLink}>{link}</li>
            })
            }
      </ul>

       </nav>

        
        <div className={styles.search}>

            <div className={styles.searchBox}>

                <div className={styles.headerIcon}>
                    <img src={searchIcon} alt="search" />
                </div>

                <input type="text" onChange={(event)=> {
                  setSearchTitle(event.target.value)
                }} 
                className={styles.searchInput} placeholder="Movies, Shows and More" />

                <div className={styles.headerIcon}>
                    <img src={voiceSearch} alt="voice" />
                </div>

            </div>

            <img className={styles.usericon} src={jioIcon} alt="jio" />

        </div>
      </header>

      {
          filteredMovies.length!==0?(
          
          <div className={styles.searchResults}>
                {
                  filteredMovies.map((movie)=>{
                   return <Show movie = {movie} />
                  })
                }

          </div>

          ):null
      }
          

    </>
  );
}

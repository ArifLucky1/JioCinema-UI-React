
import Header from "../components/Header/Header"
import Tags from "../components/tags/Tags"
import Channels from "../components/channels/channels"
import Carousel from "../components/carousel/Carousel"
import Featured from "../components/featured/Featured"
import Shows from "../components/shows/Shows"



export default function Home() {
    
    return (
    <>
      <Header/>
      <Tags/>
      <Carousel/>
      <Channels/>
      <Featured/>
      <Shows title="Action Movies"/>
      <Shows title="Hindi Languauge Movies"/>
      <Shows title="English Languauge Movies"/>
      <Shows title="South Movies"/>
    </>
  )
}

import bannerHome from '../../assets/Banners/homeDark.png'

const Home = () => {
  return (
    <div className="h-screen">
      <div className="
      w-screen 
      h-screen 
      bg-cover 
      bg-center
      flex
      flex-col
      justify-end
      items-center
      pb-20
      "
      style={{backgroundImage: `url(${bannerHome})`}}
      >
        <h5 className="font-BBH text-[#FFFFFF]">Jaime Maldonado Garcia</h5>
        <p className="font-Embed text-[#FFFFFF]">Desarrollador Jr. FrontEnd & Q.A. </p>
      </div>
    </div>
  )
}

export default Home

import bannerHome from '../../assets/Banners/homeDark.png'

const Home = () => {
  return (
    <section className='
    w-screen
    h-screen
    bg-cover
    bg-center
    bg-no-repeat
    flex
    flex-col
    items-center
    justify-end
    pb-24
    lg:pb-12
    '
    style={{ backgroundImage: `url(${bannerHome})` }}
    >
        <h5 className="
        font-BBH 
        text-white 
        text-sm 
        md:text-xl
        lg:text-22
        ">
          Jaime Maldonado Garcia
        </h5>

        <p className="
        font-Embed 
        text-white
        text-sm 
        md:text-xl
        lg:text-18
        ">
          Desarrollador Jr. FrontEnd & Q.A.
        </p>
    </section>
  );
};

export default Home
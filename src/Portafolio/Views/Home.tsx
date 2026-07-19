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

    bg-amber-200'
    style={{ backgroundImage: `url(${bannerHome})` }}
    >
        <h5 className="font-BBH text-white text-sm">
          Jaime Maldonado Garcia
        </h5>

        <p className="font-Embed text-white text-sm">
          Desarrollador Jr. FrontEnd & Q.A.
        </p>
    </section>
  );
};

export default Home
import Header from "@/components/Header";
import PlacesList from "@/components/PlacesList";

const Home = (props) => {
  return (
    <main>
      <Header homePage={props.homePage} navMenu={props.navMenu} />
      <PlacesList places={props.places} />
    </main>
  );
};

export default Home;

export async function getServerSideProps() {
  let placesRequest = await fetch(
    "http://localhost:1337/api/places?populate=*"
  );
  const placesResponse = await placesRequest.json();
  console.log(placesResponse);

  let homePageRequest = await fetch(
    "http://localhost:1337/api/home-page?populate=*"
  );
  const homePageResponse = await homePageRequest.json();
  console.log(placesResponse);

  let navMenuRequest = await fetch(
    "http://localhost:1337/api/nav-links?populate=*"
  );
  const navResponse = await navMenuRequest.json();
  console.log(navResponse);

  return {
    props: {
      places: placesResponse,
      homePage: homePageResponse,
      navMenu: navResponse,
    },
  };
}

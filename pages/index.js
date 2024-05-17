import Header from "@/components/Header";
import PlacesList from "@/components/PlacesList";

const Home = ({ places }) => {
  return (
    <main>
      <Header />
      <PlacesList places={places} />
    </main>
  );
};

export default Home;

export async function getServerSideProps() {
  let response = await fetch("http://localhost:1337/api/places?populate=*");

  const placesResponse = await response.json();
  console.log(placesResponse);
  return {
    props: {
      places: placesResponse,
    },
  };
}

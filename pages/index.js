import Header from "@/components/Header";
import PlacesList from "@/components/PlacesList";
import { fetcher } from "@/lib/api";

const Home = ({ places }) => {
  return (
    <main>
      <Header />
      <PlacesList places={places} />
    </main>
  );
};

export default Home;

export async function getStaticProps() {
  const placesResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/places?populate=*`
  );
  console.log(placesResponse);
  return {
    props: {
      places: placesResponse,
    },
  };
}

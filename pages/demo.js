import Places from "@/components/Places";
import { fetcher } from "@/lib/api";

const placesList = ({ places }) => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <Places places={places} />
    </div>
  );
};

export default placesList;

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

const Places = ({ places }) => {
  return (
    <ul className=" flex flex-wrap justify-center items-center py-2 px-16">
      {places &&
        places.data.map((place) => {
          const imageURL = place.attributes.Image.data.map((image) => {
            return "http://localhost:1337" + image.attributes.url;
          });
          return (
            <li
              className="bg-slate-50 max-w-[400px] w-auto m-4 p-3 rounded-lg"
              key={place.id}
            >
              <img src={imageURL} />
              <h3 className="font-bold mt-1">{place.attributes.Title}</h3>
              <p className="text-sm mb-3 text-slate-500">
                {place.attributes.Location}
              </p>
              <p className="text-sm text-slate-900">{place.attributes.About}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default Places;

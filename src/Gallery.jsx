import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const url =
  "https://api.unsplash.com/search/photos?client_id=VWx9kb494dzJwtjMI5fuailyK028Zzbd_CC-AFI3E4k&query=office";

const Gallery = () => {
  const response = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const result = await axios.get(url);

      return result.data;
    },
  });
  return <h2>Gallery</h2>;
};
export default Gallery;

import { useQuery } from "react-query";
import axios from "axios";

const HomePage = () => {
  const getPost = async () => {
    const res = await axios.get("/api/posts");
    return res;
  };

  const { data: postData } = useQuery(["getPost"], () => getPost());

  postData && console.log(postData);

  return <div>HomePage</div>;
};

export default HomePage;

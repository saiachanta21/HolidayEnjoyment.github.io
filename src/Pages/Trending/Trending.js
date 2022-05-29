import axios from "axios";
import { useEffect, useState } from "react";
import CustomPagination from "../../components/Pagination/CustomPagination";
import '../../components/SingleContent/SingleContent';
import SingleContent from "../../components/SingleContent/SingleContent";
import './Trending.css';
const Trending = () => {
  const [page,setPage] = useState(1);
  const [content ,setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=74f5938285ff4cb9d571ebcf8646ab9c&page=${page}`);
//console.log(data.results);
    setContent(data.results);
  };
  useEffect(() => {
    window.scroll(0,0);
    fetchTrending();
    //eslint-disable-next-line
  },[page]);
  return (
    <div>
        <span className="pageTitle">Trending</span>
        <div className="trending">
          {
            content && content.map((c) => (
              <SingleContent 
              key={c.id} id={c.id} 
              poster={c.poster_path} 
              title={c.title || c.name} 
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
              />
              ))
          }
        </div> 
        <CustomPagination setPage={setPage}/>
    </div>
  );
};

export default Trending;
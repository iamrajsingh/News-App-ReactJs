import { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';
import Navnews from './components/Navnews';
import NewsContent from './components/NewsContent/NewsContent';
import Footer from './components/Footer/Footer'
import apikey from './data/config';


function App() {

  const [catagory, setCategory] = useState("general");
  const [newsArray, setnewsArray] = useState([]);
  const [newsResults, setnewsResults] = useState();
  const [loadmore, setLoadmore] = useState(20);

  const newsApi = async () => {
    try {

      const { data: { articles, totalResults } } = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apikey=${apikey}&category=${catagory}&pageSize=${loadmore}
      `)

      setnewsArray(articles);
      setnewsResults(totalResults);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    newsApi();
  }, [newsResults, catagory, loadmore])

  return (
    <div className="App">
      <Navnews setCategory={setCategory} />
      <NewsContent setLoadmore={setLoadmore} loadmore={loadmore} newsArray={newsArray} newsResults={newsResults} />
      <Footer />
    </div>
  );
}

export default App;

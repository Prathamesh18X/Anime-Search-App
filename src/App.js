import React, { useEffect, useState } from "react";
import { AnimeList } from "./components/AnimeList";
import { Header } from "./components/Header";
import { Pagination } from "./components/Pagination";
import { Footer } from "./components/Footer";

function App() {
  const [search, setSearch] = useState("Saki");
  const [animeData, setAnimeData] = useState([]);
  const [animePagination, setAnimePagination] = useState({});

  const getData = async (page = 1) => {
    try {
      const res = await fetch(
        `https://api.jikan.moe/v4/anime?q=${search}&limit=15&page=${page}`
      );
      const data = await res.json();
      setAnimeData(data.data);
      setAnimePagination(data.pagination || {});
    } catch (error) {
      console.error("Error fetching anime data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [search]);

  return (
    <>
      <Header setSearch={setSearch} pagination={animePagination} />
      <AnimeList animelist={animeData} />
      <Pagination
        handlePageChange={(newPage) => {
          if (newPage >= 1 && newPage <= animePagination.last_visible_page) {
            getData(newPage);
          }
        }}
        current_page={animePagination.current_page}
        has_next_page={animePagination.has_next_page}
      />
      <Footer />
    </>
  );
}

export default App;

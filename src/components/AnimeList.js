import React from "react";
import { FaHeart, FaArrowRight } from "react-icons/fa";

export const AnimeList = ({ animelist }) => {
  return (
    <>
      {animelist && animelist.length > 0 ? (
        animelist.map((anime) => {
          return (
            <div className="container" key={anime.mal_id}>
              <div className="card my-5 shadow">
                <div className="position-relative">
                  <img
                    className="shadow-lg"
                    src={anime.images.jpg.image_url}
                    alt="animeImage"
                  />
                </div>

                <div className="anime-content">
                  <div className="anime-info d-flex justify-content-between">
                    <div className="card-title">
                      {anime.title} | {anime.year}
                    </div>
                    <div className="px-3 m-1">
                      <FaHeart
                        size={20}
                        style={{ color: "red", margin: "5px" }}
                      />
                      {anime.favorites}
                    </div>
                  </div>
                  <div className="">
                    <button className="btn-secondary px-3 mt-1" disabled>
                      Rank : {anime.rank}
                    </button>
                  </div>
                  <div>
                    <button className="btn-secondary px-3 mt-1" disabled>
                      Episodes : {anime.episodes}
                    </button>
                  </div>
                </div>
                <div className="anime-url">
                  <button
                    className="btn-primary px-4"
                    onClick={() => {
                      window.open(anime.url);
                    }}
                  >
                    <FaArrowRight size={30} color="white" />
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="text-center">No result found !</div>
      )}
    </>
  );
};

import axios from "axios";
import { createContext, useState, useContext, useEffect } from "react";
const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [games, setGames] = useState(null);

  const getAllGames = async () => {
    setIsLoading(true);
    const options = {
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
      headers: {
        "X-RapidAPI-Key": "ac7c6868efmshdf58e1ddc921308p1fe068jsnf491fc64ff58",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    try {
      const res = await axios(options);
      setIsLoading(false);
      setGames(res.data);
      console.log(res);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const getGamesPlatform = async (platform) => {
    setIsLoading(true);
    const options = {
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
      params: { platform },
      headers: {
        "X-RapidAPI-Key": "ac7c6868efmshdf58e1ddc921308p1fe068jsnf491fc64ff58",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    try {
      const res = await axios(options);
      setIsLoading(false);
      setGames(res.data);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const getGamesSort = async (sort) => {
    setIsLoading(true);
    const options = {
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
      params: {
        "sort-by": sort,
      },
      headers: {
        "X-RapidAPI-Key": "ac7c6868efmshdf58e1ddc921308p1fe068jsnf491fc64ff58",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    try {
      const res = await axios(options);
      setIsLoading(false);
      //   console.log(res);
      setGames(res.data);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const getGamesCategory = async (category) => {
    setIsLoading(true);
    const options = {
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
      params: { category },
      headers: {
        "X-RapidAPI-Key": "ac7c6868efmshdf58e1ddc921308p1fe068jsnf491fc64ff58",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    try {
      const res = await axios(options);
      setIsLoading(false);
      //   console.log(res);
      setGames(res.data);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    localStorage.getItem("userToken") ? setIsLogin(true) : setIsLogin(false);
  }, []);
  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        games,
        getAllGames,
        getGamesPlatform,
        getGamesSort,
        getGamesCategory,
        isLogin,
        setIsLogin,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

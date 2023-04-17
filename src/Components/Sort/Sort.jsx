import React, { useEffect } from "react";
import { useGlobalContext } from "../../context.jsx";
import { useParams } from "react-router-dom";
import Games from "../Games/Games.jsx";

const Sort = () => {
  const { getGamesSort, isLoading, games } = useGlobalContext();
  const params = useParams();
  useEffect(() => {
    getGamesSort(params.sort);
  }, [params.sort]);

  if (isLoading) {
    return (
      <div className="loading">
        <span className="loader"></span>
      </div>
    );
  }

  return <Games games={games} />;
};

export default Sort;

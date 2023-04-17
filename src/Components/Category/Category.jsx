import React, { useEffect } from "react";
import { useGlobalContext } from "../../context.jsx";
import { useParams } from "react-router-dom";
import Games from "../Games/Games.jsx";
const Category = () => {
  const { getGamesCategory, isLoading, games } = useGlobalContext();
  const params = useParams();

  useEffect(() => {
    getGamesCategory(params.category);
  }, [params.category]);

  if (isLoading) {
    return (
      <div className="loading">
        <span className="loader"></span>
      </div>
    );
  }
  return <Games games={games} />;
};

export default Category;

import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context.jsx";
import Games from "../Games/Games.jsx";
const All = () => {
  const { isLoading, games, getAllGames } = useGlobalContext();
  useEffect(() => {
    getAllGames();
  }, []);
  if (isLoading) {
    return (
      <>
        <div className="loading">
          <span className="loader"></span>
        </div>
      </>
    );
  }
  return <Games games={games} />;
};

export default All;

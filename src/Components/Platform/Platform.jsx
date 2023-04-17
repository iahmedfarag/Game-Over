import React, { useEffect } from "react";
import { useGlobalContext } from "../../context.jsx";
import { useParams } from "react-router-dom";
import Games from "../Games/Games.jsx";
const Platform = () => {
  const { getGamesPlatform, games, isLoading } = useGlobalContext();
  const params = useParams();

  useEffect(() => {
    getGamesPlatform(params.platform);
  }, [params.platform]);

  if (isLoading) {
    return (
      <div className="loading">
        <span className="loader"></span>
      </div>
    );
  }

  return <Games games={games} />;
};

export default Platform;

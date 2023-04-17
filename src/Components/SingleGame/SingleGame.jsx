import React, { useEffect, useState } from "react";
import single from "../../assets/single.jpg";
import { FaSignOutAlt } from "react-icons/fa";
import scroll from "../../assets/scroll.jpg";
import { useGlobalContext } from "../../context.jsx";
import { useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";

const SingleGame = () => {
  const { isLoading, setIsLoading } = useGlobalContext();
  const [game, setGame] = useState(null);
  const params = useParams();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };
  const getSingle = async (id) => {
    setIsLoading(true);
    const options = {
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/game",
      params: { id },
      headers: {
        "X-RapidAPI-Key": "ac7c6868efmshdf58e1ddc921308p1fe068jsnf491fc64ff58",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    try {
      const res = await axios(options);
      setIsLoading(false);
      console.log(res);
      setGame(res.data);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getSingle(params.id);
  }, []);
  if (isLoading) {
    return (
      <div className="loading">
        <span className="loader"></span>
      </div>
    );
  }
  return (
    <section className="container SingleGame">
      <div className="row">
        <div className="col-lg-4">
          <img src={game?.thumbnail} className="w-100 single-pic" />
          <div className="d-flex justify-content-between singleCart">
            <button className="freeBtn text-muted  bg-dark">free</button>
            <a
              className=" btn btn-primary playBtn"
              href={game?.game_url}
              target="_blank"
            >
              play Now
              <FaSignOutAlt className="mx-2" />
            </a>
          </div>
        </div>
        {/*  */}
        <div className="col-lg-8 text-muted d-flex flex-column ">
          <h3>{game?.title}</h3>
          <h4>About {game?.title}</h4>
          <p className="fs-5">{game?.description}</p>
          <h5 className="h3 my-2">Minimum System Requirements</h5>
          <h5 className="text-muted my-2">
            <span className="fs-4">graphics: </span>
            {game?.minimum_system_requirements?.graphics}
          </h5>
          <h5 className="text-muted my-2">
            <span className="fs-4">memory: </span>
            {game?.minimum_system_requirements?.memory}
          </h5>
          <h5 className="text-muted my-2">
            <span className="fs-4">os: </span>
            {game?.minimum_system_requirements?.os}
          </h5>
          <h5 className="text-muted my-2">
            <span className="fs-4">processor:</span>
            {game?.minimum_system_requirements?.processor}
          </h5>
          <h5 className="text-muted my-2">
            <span className="fs-4">storage :</span>
            {game?.minimum_system_requirements?.storage}
          </h5>
          <div className="flex flex-column">
            <h5 className="h3 my-2">{game?.title} Screenshots</h5>
            <div className="picScroll">
              {/* slider */}
              <Slider {...settings}>
                {game?.screenshots?.map((screen) => {
                  return <img src={screen?.image} />;
                })}
              </Slider>
            </div>
            <h6 className="h3 py-2">Additional Information</h6>
            <div className="row">
              <div className="col-md-4 d-flex flex-column text-danger">
                <h6 className="text-muted">Title</h6>
                <h6 className="addition">{game?.title}</h6>
              </div>
              <div className="col-md-4 d-flex flex-column ">
                <h6 className="text-muted">Developer</h6>
                <h6 className=" addition">{game?.developer}</h6>
              </div>
              <div className="col-md-4 d-flex flex-column ">
                <h6 className="text-muted">Publisher</h6>
                <h6 className="addition">{game?.publisher}</h6>
              </div>
              <div className="col-md-4 d-flex flex-column ">
                <h6 className="text-muted">Release Date</h6>
                <h6 className=" addition">{game?.release_date}</h6>
              </div>
              <div className="col-md-4 d-flex flex-column ">
                <h6 className="text-muted">Genre</h6>
                <h6 className=" addition">{game?.genre}</h6>
              </div>
              <div className="col-md-4 d-flex flex-column ">
                <h6 className="text-muted">Platform</h6>
                <h6 className=" addition">{game?.platform}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleGame;

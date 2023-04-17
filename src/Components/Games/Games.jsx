import React, { useState } from "react";
import { AiFillWindows, AiFillPlusSquare } from "react-icons/ai";
import { BsBrowserChrome } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context.jsx";
const Games = ({ games }) => {
  const { isLoading } = useGlobalContext();
  const [length, setLength] = useState(games?.length);
  const [show, setShow] = useState(20);
  console.log(show, length);
  return (
    <section className="container text-white my-5">
      <div className="row g-2 py-4">
        {games?.map((game, index) => {
          const {
            url: game_url,
            genre,
            id,
            platform,
            title,
            short_description,
            thumbnail,
          } = game;
          const titleArr = title?.split(" ");
          const newTitle =
            titleArr.length > 3
              ? titleArr.slice(0, 2).join(" ") + "..."
              : titleArr.join(" ");
          const descArr = short_description?.split(" ");
          const newDesc =
            descArr.length > 4
              ? descArr.slice(0, 3).join(" ") + "..."
              : descArr.join(" ");
          if (index >= show && show <= length) {
            return;
          }
          return (
            <Link
              className="col-xl-3 col-lg-4 col-md-6 cart cursor my-2"
              to={`/SingleGame/${id}`}
            >
              <img src={thumbnail} className="w-100" />
              <div className="allDes col-md-12 t d-flex flex-column bg-dark  p-2">
                <div className="d-flex justify-content-between text-muted">
                  <h5>{newTitle}</h5>
                  <button className=" btn btn-primary">Free</button>
                </div>
                <h6 className="text-muted">{newDesc}</h6>
                <div className="d-flex justify-content-between text-muted ">
                  <AiFillPlusSquare className="fs-3" />
                  <div className="d-flex align-items-center">
                    <span
                      className="badge rounded-pill bg-secondary px-2 py-1 mx-1"
                      style={{ fontSize: "12px" }}
                    >
                      {genre}
                    </span>
                    {platform.startsWith("PC") ? (
                      <AiFillWindows className="fs-3" />
                    ) : (
                      <BsBrowserChrome className="fs-3" />
                    )}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      {length > 20 && show < length ? (
        <button
          className="btn bg-danger text-white mx-auto d-block"
          onClick={() => {
            setShow(show + 20);
          }}
        >
          show more
        </button>
      ) : show >= length ? (
        ""
      ) : (
        ""
      )}
    </section>
  );
};

export default Games;

import { CircularProgress } from "@material-ui/core";
import React from "react";

const HotBlogCard = (props) => {
  if (props.img !== undefined) {
    return (
      <div className="hotBlogCard">
        <div className="card shadow">
          <img src={props.img} class="card-img-top" alt="..." />
          <div className="card-body">
            <div className="card-tag">
              {props.tags.map((tag, index) => {
                return <p key={index} className="card-title text-center">{tag}</p>;
              })}
            </div>
            <h5 className="card-text text-center">{props.title}</h5>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="hotBlogCard">
        <div className="card shadow">
          <CircularProgress />
        </div>
      </div>
    );
  }
};

export default HotBlogCard;

import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClover, faFan, faGifts, faLeaf, faPeopleGroup, faTree, faWheatAwn } from '@fortawesome/free-solid-svg-icons';

// Modified fa refernce map
const iconMap = {
  faClover: faClover,
  faFan: faFan,
  faGifts: faGifts,
  faLeaf: faLeaf,
  faPeopleGroup: faPeopleGroup,
  faTree: faTree,
  faWheatAwn: faWheatAwn,
};


export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Services</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  {/*<i className={d.icon}></i>*/}
                  <i className="fa">
                    <FontAwesomeIcon icon={iconMap[d.icon]}  />
                  </i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};

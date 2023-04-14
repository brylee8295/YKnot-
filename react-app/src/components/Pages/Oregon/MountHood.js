import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { thunkGetTrail } from "../../../store/trail";
import PageSearchBar from "../../SearchBar/PageSearchBar";

import "../Pages.css";


function MountHood() {
  const dispatch = useDispatch();

  const trail = useSelector((state) => state.trail);
  const trailArr = Object.values(trail);

  const MtHoodFilter = trailArr.filter(
    (trail) => trail.resort === "Mount Hood Meadows"
  );

  useEffect(() => {
    dispatch(thunkGetTrail());
  }, [dispatch]);
  return (
    <div className="pages_main">
      <div className="page_inner">
        <div className="pages_detail_top_main">
          <div className="pages_detail_top_text">
            <div className="pages_detail_navlink">
              <NavLink
                style={{ textDecoration: "none", color: "rgb(132, 132, 132)" }}
                exact
                to="/United States of America"
              >
                United States of America
              </NavLink>
            </div>
            <div>&nbsp;›&nbsp;</div>
            <div className="pages_detail_navlink">
              <NavLink
                style={{ textDecoration: "none", color: "rgb(132, 132, 132)" }}
                exact
                to="/Oregon"
              >
                Oregon
              </NavLink>
            </div>
            <div>&nbsp;›&nbsp;</div>
            <div className="pages_detail_text">Mount Hood Meadows</div>
          </div>
          <div className="pages_detail_searchbar_div">
            <PageSearchBar />
          </div>
        </div>
        <div className="pages_header">Mount Hood Meadows</div>
        <div className="pages_inner_div">
          <div className="pages_navlink_divs">
            {MtHoodFilter.map((trail, i) => (
              <div className="pages_navlink_div" key={i}>
                <NavLink
                  className="pages_navlink"
                  exact
                  to={`/trails/${trail?.id}`}
                >
                  <img
                    className="pages_image"
                    src={trail.previewImg}
                    alt="trail"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.pexels.com/photos/6650184/pexels-photo-6650184.jpeg";
                    }}
                  />
                  {trail.name}
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MountHood;
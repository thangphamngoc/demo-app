import React from "react";
import PropTypes from "prop-types";

const Location = React.memo(({ place, units, cost }) => {
  return (
    <React.Fragment>
      <p>Locations</p>
      <div className="location">
        <div className="location__item">
          <p>Place</p>
          <div>{place?.name}</div>
        </div>
        <div className="location__item">
          <p>Units</p>
          <div>{units}</div>
        </div>
        <div className="location__item">
          <p>Cost</p>
          <div>{cost}</div>
        </div>
      </div>
    </React.Fragment>
  );
});

Location.defaultProps = {
  place: null,
  units: 0,
  cost: 0
};

Location.propTypes = {
  place: PropTypes.object,
  units: PropTypes.number,
  cost: PropTypes.number
};

export default Location;

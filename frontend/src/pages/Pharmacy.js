import { useParams } from 'react-router-dom';
import { useState, useEffect, Fragment } from 'react';
import L from "leaflet";
import Header from './Header';
function Pharmacy() {
  const { id } = useParams(); // get the pharmacy ID from the URL params
  const [_id, set_id] = useState(null);
  const [showMap, setShowMap] = useState(false);
  useEffect(() => {
    // fetch the details of the selected pharmacy using the _id
    fetch(`/api/medicines/${id}`)
      .then((response) => response.json())
      .then((data) => set_id(data));
  }, [id]);

  if (!_id) {
    return <div>Loading...</div>;
  }



  const showLocation = () => {

    // setShowMap(true);
    // // create a new Leaflet map object
    // const map = L.map("map", {
    //   center: [7.8731, 80.7718],
    //   zoom: 13
    // });
    // // add a tile layer to display the map
    // L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    //   attribution: "Map data &copy; OpenStreetMap contributors",
    //   maxZoom: 18
    // }).addTo(map);
    // // add a marker to the map
    // L.marker([7.8731, 80.7718]).addTo(map);
  };


  return (
    <Fragment><Header/>
      <div>
        <div className="inner-banner inner-bg11">
          <div className="container">
            <div className="inner-title">
              <h3>Pharmacy details - {_id.pharmacy_name} pharmacy</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Pharmacy details</li>
              </ul>
            </div>
          </div>
          <div className="inner-banner-shape">
            <div className="shape1">
              <img src="assets/img/inner-banner/inner-banner-shape1.png" alt="Images" />
            </div>
            <div className="shape2">
              <img src="assets/img/inner-banner/inner-banner-shape2.png" alt="Images" />
            </div>
          </div>
        </div>
        <div>
          <div className="about-area pt-100 pb-70">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="about-right-img">
                    <div className="about-open-hours">
                      <h3>Go through the guide lines to oder your medicines </h3>
                      <p>Firstly you need to login to our system to get medicines through our application but if you don't want to get medicine simply you can get knowledge about where the pharmacy is located</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="about-content">
                    <div className="section-title">
                      <span><h1>{_id.pharmacy_name} pharmacy</h1></span>
                      <h2>We Are Your Trusted Friend</h2>
                      <p>{_id.pharmacy_name} pharmacy is located in : {_id.location}</p>
                      <p>A simple discription about our pharmacy:{_id.pharmacy_des}
                      </p><p>
                        <h6><b>you searched for medicine : <span>{_id.medi_name}</span> it is available in the :<span>{_id.pharmacy_name}</span> pharmacy :<span>{_id.qty}</span> quantities</b></h6></p>
                      <div><button class="btn btn-primary btn-lg me-2">Add to Cart</button><button class="btn" >
                        {/* <i class="bi bi-geo-fill" href="/location"></i> Location */}
                        <a className="btn btn-primary btn-lg" href={`https://www.google.com/maps/search/${_id.pharmacy_name} ${_id.location}`}target="_blank" rel="noreferrer">
                                                <i className=""></i>Location</a>

                      </button>
                      </div>

                    </div>

                  </div>

                </div>
              </div>

            </div>

          </div>
          <h1>{_id.pharmacy_name} pharmacy</h1>
          <p>Location: {_id.location}</p>
        </div>
      </div>
    </Fragment>
  );
}

export default Pharmacy;


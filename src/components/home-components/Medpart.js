import { medpartInti, medpart } from "../../Data";

import "./medpart.css";

function Medpart() {
  return (
    <section className="media-partner" id="media-partner">
      <div className="container container-lg">
        <h1 className="title mb-5">Media Partner</h1>
        <div className="row row-cols-1 row-cols-md-6 gy-4 justify-content-center">
          {medpartInti.map((item) => (
            <div className="col-md-3 col-3 custom-col" key={item.id}>
              <img src={item.img} className="img img-item img-fluid" alt={item.alt} />
            </div>
          ))}
        </div>

        <div className="row row-cols-1 row-cols-md-6 gy-4 justify-content-center">
          {medpart.map((item) => (
            <div className="col-md-3 col-3 custom-col" key={item.id}>
              <img src={item.img} className="img img-item img-fluid" alt={item.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Medpart;

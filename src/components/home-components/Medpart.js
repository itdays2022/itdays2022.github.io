import { medpartInti } from "../../Data";

import "./medpart.css";

function Medpart() {
  return (
    <section className="media-partner" id="media-partner">
      <div className="container container-lg">
        <div className="row row-cols-3 row-cols-md-6 gy-4 justify-content-center">
          {medpartInti.map((item) => (
            <div className="col custom-col" key={item.id}>
              <img src={item.img} className="img img-item img-fluid" alt={item.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Medpart;

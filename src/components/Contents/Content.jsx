import React from "react";
import './Content.scss';
import contentCardGroup1 from "../../assets/picture/girl/IMG_8706.jfif";
import contentCardGroup2 from "../../assets/picture/girl/IMG_8715.jfif";
import contentCardGroup3 from "../../assets/picture/girl/IMG_8707.jfif";

export default function Content() {
  return (
    <div>
      <div className="card-group mt-4 container">
        <div className="card">
          <img src={contentCardGroup1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div class="btn-group d-flex pt-4 d-flex" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-outline-primary">
                Buy
              </button>
              <button type="button" class="btn btn-outline-primary">
                Add to cart
              </button>
              <button type="button" class="btn btn-outline-primary">
                Later
              </button>
            </div>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div className="card">
          <img src={contentCardGroup2} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <div style={{paddingTop: '50px'}} class="btn-group d-flex" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-outline-primary">
                Buy
              </button>
              <button type="button" class="btn btn-outline-primary">
                Add to cart
              </button>
              <button type="button" class="btn btn-outline-primary">
                Later
              </button>
            </div>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div className="card">
          <img src={contentCardGroup3} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <div  style={{marginTop: '-22px'}} class="btn-group d-flex pt-4" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-outline-primary">
                Buy
              </button>
              <button type="button" class="btn btn-outline-primary">
                Add to cart
              </button>
              <button type="button" class="btn btn-outline-primary">
                Later
              </button>
            </div>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import bannerIMG1 from "../../assets/picture/Moef/NanCis_Palette-Wild_Temple_Random_photographyThe_cats_dressed_i_0f0dc1d6-6743-4bfd-92a5-bf8616e72083.png";
import bannerIMG2 from "../../assets/picture/Moef/NanCis_Palette-Wild_Temple_Random_photographyThe_cats_dressed_i_3bf96622-1359-44f4-b9d9-39183c6e9e5b.png";
import bannerIMG3 from "../../assets/picture/Moef/NanCis_Palette-Wild_Temple_Random_photographyThe_cats_dressed_i_4d7dc5a4-a4b5-4d32-80d5-d48006878dc0.png";
import bannerIMG4 from "../../assets/picture/Moef/NanCis_Palette-Wild_Temple_Random_photographyThe_cats_dressed_i_8c983432-559d-4056-a235-19e9b9694cea.png";
import bannerIMG5 from "../../assets/picture/Moef/NanCis_Palette-Wild_Temple_Random_photographyThe_cats_dressed_i_70fd9dc8-2e36-4a78-ba63-2c604bc17f6f.png";

export default function Banner() {
  return (
    <div className="container mt-2">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={3}
            aria-label="Slide 4"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={4}
            aria-label="Slide 5"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={bannerIMG1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={bannerIMG2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={bannerIMG3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={bannerIMG4} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={bannerIMG5} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

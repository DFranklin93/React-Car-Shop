import React, { Component } from "react";
import Lightbox from "react-image-lightbox";

import "react-image-lightbox/style.css"; // This only needs to be imported once in your app

import images from "../assets/CarouselImages.json";

export default class ImageLightBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    let items = images.map((image, k) => (
      <img
        className="w-50 p-1"
        src={image.link}
        alt={image.item}
        id={"#" + image.item}
        key={k}
        onClick={() => this.setState({ isOpen: true, photoIndex: k })}
      />
    ));

    return (
      <div className="d-flex flex-wrap justify-content-around">
        {items}
        {/* <button type="button" onClick={() => this.setState({ isOpen: true })}>
          Open Lightbox
        </button> */}

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex].link}
            nextSrc={images[(photoIndex + 1) % images.length].link}
            prevSrc={
              images[(photoIndex + images.length - 1) % images.length].link
            }
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </div>
    );
  }
}

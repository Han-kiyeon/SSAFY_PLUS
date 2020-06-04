import React from "react";
import ImageUploader from "react-images-upload";
import Axios from "axios";

export default class App extends React.Component {
  state = { pictures: [] };
  constructor(props: any) {
    super(props);
    this.onDrop = this.onDrop.bind(this);
  }

  async onDrop(pictureFiles: any, pictureDataURLs: any) {
    await this.setState({
      pictures: this.state.pictures.concat(pictureFiles),
    });

    console.log(this.state.pictures);
    Axios.post(
      "http://13.125.238.102:8080/api/uploadFile",
      this.state.pictures
    ).then();
  }

  render() {
    return (
      <ImageUploader
        withIcon={true}
        buttonText="Choose images"
        onChange={this.onDrop}
        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880}
      />
    );
  }
}

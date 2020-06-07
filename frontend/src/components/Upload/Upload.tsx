import React from "react";
import ImageUploader from "react-images-upload";
import axios from "axios";

interface UploadIForm {
  picture: any;
}
export default class Upload extends React.Component<{}, UploadIForm> {
  constructor(props: any) {
    super(props);
    this.state = { picture: "" };
    this.onDrop = this.onDrop.bind(this);
  }
  // handleFileInput(e) {
  //   this.setState({
  //     selectedFile: e.target.files[0],
  //   });
  // }

  async onDrop(pictureFiles: any) {
    await this.setState({
      picture: pictureFiles[0],
    });
    var newBlob = new Blob(pictureFiles, {
      type: "application/json",
    });
    console.log(newBlob);
    var formData = new FormData();
    formData.set("file", newBlob);
    console.log("form", formData);

    // axios
    //   .post("http://localhost:8080/api/uploadFile", formData)
    //   .then(res => {
    //     console .log(res.data, formData);
    //   })
    //   .catch(err => {
    //     console.log(err.data, formData);
    //   });
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

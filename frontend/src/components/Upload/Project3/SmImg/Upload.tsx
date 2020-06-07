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

  async onDrop(pictureFiles: any) {
    await this.setState({
      picture: pictureFiles[0],
    });

    var formData = new FormData();

    formData.append("file", this.state.picture);
    var ImageType = window.sessionStorage.getItem("nowImageType");
    axios
      .post("http://13.125.238.102:8080/api/uploadFile", formData)
      .then(res => {
        window.sessionStorage.setItem(
          "project_SmImg3",
          res.data.fileDownloadUri
        );
      })
      .catch(err => {
        console.log(err, formData);
      });
  }

  render() {
    return (
      <ImageUploader
        withIcon={false}
        buttonText="이미지 선택하기"
        onChange={this.onDrop}
        withLabel={false}
        withPreview={true}
        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880}
      />
    );
  }
}

import React, { Component } from "react";
import axios from "axios";

interface UploadIState {
  image: File | null | undefined;
}

class App extends React.Component<{}, UploadIState> {
  constructor(props: any) {
    super(props);

    this.state = {
      image: null,
    };
  }

  onImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    await this.setState({
      image: event.target.files?.item(0),
    });
  };

  onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    var formData = new FormData();
    if (this.state.image !== undefined && this.state.image !== null) {
      formData.append("file", this.state.image);
    }
    console.log(formData);
    axios
      .post("http://13.125.238.102:8080/api/uploadFile", FormData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then(res => {
        console.log(res);
      });
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <input
            type="file"
            name="files"
            onChange={this.onImageChange}
            alt="image"
          />
          <br />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

export default App;

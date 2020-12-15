import React, { useState } from "react";
import { render } from "react-dom";
import { storage } from "../Firebase";
import "bootstrap/dist/css/bootstrap.min.css"; //npm i boostrap

function ReactFirebaseFileUpload() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`products/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("products")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
          });
      }
    );
  };

  console.log("image: ", image);

  return (
    <div className="card m-2 p-2">
      <h6>Subir Imagen</h6>
      <br />
      <input type="file" onChange={handleChange} />
      <br></br>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button className="btn btn-dark" onClick={handleUpload}>
          Upload
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <progress value={progress} max="100" />
        </div>
      </div>

      <div>
        <img
          height="100"
          width="100"
          src={url || "http://via.placeholder.com/150"}
          //alt="firebase-image"
        />
      </div>

      {url}
      <br />
    </div>
  );
}

export default ReactFirebaseFileUpload;

//render(<ReactFirebaseFileUpload />, document.querySelector("#root"));

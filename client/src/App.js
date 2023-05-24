import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
    };

  this.uploadHandler = this.uploadHandler.bind(this);
  }

  base64(e) {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      var imgd = reader.result;
      console.log(imgd.toString())
      var out = JSON.stringify({ url: imgd.toString() , type: e.target.files[0].type});
  
    fetch('http://localhost:3003/pic', {
      method: 'POST',
      body: out,
      headers: {
        'Content-Type': 'application/octet-stream',
      },
    })
      .then(response => response.json())
      .then(result => {
        // Handle the response from the server
        console.log(result);
      })
      .catch(error => {
        // Handle any errors
        console.error('Error:', error);
      });
     
    }
    reader.onerror = (error) => {
      console.log(error);
    }
  }

  uploadHandler(event) {
    const data = new FormData();
    data.append('file', event.target.files[0]);
    
  }

  render() {
    return  (
      <div>
        <div>
          <input type="file" name="file" onChange={this.base64}/>
        </div>
        {this.state.photos.map(photo => (
          <img src={`http://localhost:3003/${photo.filename}`} />
        ))}
      </div>
    )
  }
}

export default App;

// name = null
// log(name)
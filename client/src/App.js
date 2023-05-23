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

  uploadHandler(event) {
    const data = new FormData();
    data.append('file', event.target.files[0]);
    axios.post('http://localhost:3003/upload', data)
      .then((res) => {
        this.setState({ photos: [res.data, ...this.state.photos] });
      });
  }

  render() {
    return  (
      <div>
        <div>
          <input type="file" name="file" onChange={this.uploadHandler}/>
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
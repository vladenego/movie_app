import React from 'react';
const axios = require("axios");

class Upload extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            file: null
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onFormSubmit(e){
        e.preventDefault();
        console.log("gav");
        
        var formData = new FormData();
        var imagefile = document.querySelector('#file');
        formData.append("avatar", this.state.file);
        axios.post('http://localhost:5000/upload', formData, {
          headers: {
          'Content-Type': 'multipart/form-data'
          }
        })

    }
    onChange(e) { 
      console.log(e.target.files[0]);
      
        this.setState({
          file:e.target.files[0]});

        console.log(this.state);
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <h1>File Upload</h1>
                <input id="file" type="file" name="myImage" onChange={(e) => this.onChange(e)} />
                <button type="submit">Upload</button>
            </form>
          
        )
    }
}

export default Upload

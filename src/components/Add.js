import React from 'react';
import  './Add.css';
import axios from 'axios'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";



export default class Add extends React.Component{

  constructor(){
    super()

    this.state = {
      title: "",
      description: "",
      duration: "",
      genre: "",
      actors: "",
      date: new Date()

    }
  }

  onChangeTitle = (e) => {
    this.setState({
      ...this.state,
      title: e.target.value
    })
    
  }

  onChangeDescription = (e) => {
    this.setState({
      ...this.state,
      description: e.target.value
    })
    
  }

  onChangeDuration = (e) => {
    this.setState({
      ...this.state,
      duration: e.target.value
    })
  }

  onChangeGenre = (e) => {
    this.setState({
      ...this.state,
      genre : e.target.value
    })
  }

  onChangeActors = (e) => {
    this.setState({
      ...this.state,
      actors : e.target.value
    })
  }

  onChangeDate = (date) => {
    this.setState({
      ...this.state,
      date : date
    })
  }



  onSubmit(e) {
    e.preventDefault();
  
    const exercise = {
      title: this.state.title,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
      genre: this.state.genre,
      actors: this.state.actors,
    };
  
    console.log(exercise);

    axios.post('http://localhost:5000/add', exercise)
    .then(res => console.log(res.data));
    
    window.location = '/';
  }


  

  render(){
    return(
      <div className="add">
      {/* <input type="file" name="" id="" onChange={this.onFileChangeHandler}/> */}
      <form onSubmit={(e) => {this.onSubmit(e)}}>
      <input placeholder="title" name="title" type="text" onChange={(e) => this.onChangeTitle(e)}/><br />
      <input placeholder="description" name="description" type="text" onChange={(e) => this.onChangeDescription(e)} /><br />
      <input placeholder="duration" name="duration" type="number" value="100" onChange={(e) => this.onChangeDuration(e)} /><br />
      <input placeholder="genre" name="genre" type="text" onChange={(e) => this.onChangeGenre(e)} /><br />
      <input placeholder="actors" name="actors" type="text" onChange={(e) => this.onChangeActors(e)} /><br />
      <DatePicker
        selected={this.state.date}
        onChange={this.onChangeDate}
      /><br />

      <input type="submit"/>
      </form>
      
    </div>
    )
  }
  
}

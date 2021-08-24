import React from "react";


class MovieCar extends React.Component {

    constructor () {
        super();
        this.state = {
            listItems: [],
            movieTitle: '',
            movieDescription:'',
            poterUrl:'',
            rating:''
        };
        this.handleChange = this.handleChange.bind(this);
      }

    handleChange (evt) {
      this.setState({...listItems, [evt.target.name]: evt.target.value });
    }
    
    submitHandler = e =>{
      e.preventDefault()
      this.setState({
        listItems: [...this.state.listItems, this.state.movieTitle, this.state.movieDescription, this.state.poterUrl, this.state.rating],
        movieTitle: '',
      movieDescription:'',
      poterUrl:'',
      rating:''
      })
    }    
  
  
    render() {
        
      return (
        <div>
            {
              this.state.listItems.map((h1,key) => <h1 {...{key}}>{h1}</h1>)
            }
          <form onSubmit={this.submitHandler}>
            <input value={this.state.movieTitle} name="movieTitle" onChange={this.handleChange} />
            <input value={this.state.movieDescription} name="movieDescription" onChange={this.handleChange} />
            <input value={this.state.poterUrl} name="poterUrl" onChange={this.handleChange} />
            <input value={this.state.rating} name="rating" onChange={this.handleChange} />
            <input type="submit" value="Submit" />
          </form>
        </div>
      )
    }
  }
  
  export default MovieCar;
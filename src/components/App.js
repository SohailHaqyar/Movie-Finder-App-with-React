import React, { Component } from 'react'
import Nav from './Nav'
import SearchArea from './SearchArea'
import MovieList from './MovieList'
 class App extends Component {
   constructor() {
     super()
     this.state = {
       movies: [],
       searchTerm:''
     }
     this.apiKey="bbac29dcb1952b1fa837cbd824f897e7"
   }
   handleSubmit = (e) =>{
     e.preventDefault()
     fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
     .then(data => data.json())
     .then(data => {
       console.log(data)
       this.setState({ movies:[...data.results] })
     })
   }
   handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
   }
  render() {
    return (
      <div>
        <Nav />
        <SearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        <MovieList movies={this.state.movies}/>
      </div>
    )
  }
}


export default App;

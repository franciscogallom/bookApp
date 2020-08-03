import React from 'react';
import './App.css';

import Menu from './Menu';
import List from './List';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {id:0, rating: 4, title: 'Clean Code.', image: 'img1.webp'},
        {id:1, rating: 3, title: 'Shoe Dog.', image: 'img2.jpg'},
        {id:2, rating: 4, title: 'Steve Jobs.', image: 'img3.jpg'},
        {id:3, rating: 5, title: 'Zero to One.', image: 'img4.jpg'},
        {id:4, rating: 5, title: 'Lean StartUp.', image: 'img5.jpg'},
        {id:5, rating: 5, title: 'Influence.', image: 'img6.png'},
        {id:6, rating: 5, title: 'Dont Make Me Think.', image: 'img7.jpg'},
        {id:8, rating: 5, title: 'Eloquent JavaScript.', image: 'img8.jpg'}
      ],
      copyBooks: []
    };
  }

  componentDidMount() {
    this.initBooks();
  }

  initBooks = () => {
    this.setState((state,props) => ({
      copyBooks: [...state.books]
    }))
  }

  onAdd = (item) => {
    let temp = [...this.state.books];
    const id = temp[temp.length-1].id + 1;
    item['id'] = id;
    temp.push(item);

    this.setState({books: [...temp]})
    this.initBooks();
  }

  onSearch = (query) => {
    if(query === '') {
      this.initBooks();
    } else {
      const temp = [...this.state.books];
      let res = [];

      temp.forEach(item => {
        if(item.title.toLowerCase().indexOf(query) > -1) {
          res.push(item);
        }
      });
      this.setState({copyBooks: [...res]})
    }
  }

  onUpdateRating = (item) => {
    let temp = [...this.state.books];
    const index = temp.findIndex(x => x.id === item.id);

    temp[index].title = item.title;
    temp[index].image = item.image;
    temp[index].rating = item.rating;

    this.setState({books : [...temp]});
    this.initBooks();
  }

  onRemove = (id) => {
    let temp = [...this.state.books];
    const res = temp.filter(item => item.id !== id);

    this.setState({books: [...res]});
    this.initBooks();
  }
  
  render(){
    return (
      <div className="app">
        <Menu 
          title='bookApp' 
          onAdd={this.onAdd} 
          onSearch={this.onSearch} 
        />
        
        <List 
          items={this.state.copyBooks} 
          onUpdateRating={this.onUpdateRating}
          onRemove={this.onRemove}
        />
      
      </div>
    );
  }
}

export default App;

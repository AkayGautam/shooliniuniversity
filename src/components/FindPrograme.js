import axios from 'axios';
import React, {Component} from 'react';

class FindPrograme extends Component {
    constructor(props) {
      super(props);
      this.state = {
        results: [],
        term: '',
      };
  
      this.submit = this.submit.bind(this);
      this.changeTerm = this.changeTerm.bind(this);
    }
  
    changeTerm(event) {
      this.setState({term: event.target.value});
    }
  
    submit(event) {
      let url = 'http://api.example.com/results?q=' + encodeURI(this.state.term) + '&json=1';
      axios.get(url)
        .then(response => {
          let data = {
            results: response.data,
          };
          this.setState(data);
        })
        .catch(error => console.log(error));
    }
  
    render() {
      return (
        <div>
        
                
        </div>
      );
    }
  }

export default FindPrograme

// https://medium.com/geekculture/create-a-simple-search-component-in-react-js-using-react-hooks-710c1dfe8b58
import React from 'react';
import { Link } from 'react-router-dom';
import ApiContext from '../ApiContext';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  static contextType = ApiContext;
  
  render() {
    const url = window.location.pathname
  
    if (this.state.hasError) {      
      return (
        <div>
        <h3>Unable to display {url} </h3>
          <Link className="link-btn" to='/'>Back to Homepage</Link>
        </div>
        
      );
    }
    return this.props.children;
  }  
  
}  
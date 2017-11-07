import React, {Component} from 'react'
import {Navbar } from '../NavBar'
import { bindActionCreators } from 'redux';
import {connect } from 'react-redux';
import * as postActions from '../../actions/posts';
import Modal from 'react-modal';

class PostsPage extends Component{

  render(){
    return(
      <div className="container-fludi" style={{padding: 0}}>
        <Navbar />
        <div className="container">
          <div className="row margin-top-10">
            <div className="col-md-12">
              <label className="control-label">Categories</label>
              <div className="alert alert-info" role="alert">
                {this.props.categories.map(category =>(
                  <a href={"/" + category.path} style={{textDecoration: null}} key={category.path} className="margin-15">
                    <h1 className="badge badge-secondary" style={{fontSize: 20}}>{category.name}</h1>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }

}


function mapStateToProps(state){
  return{
    categories: state.categories
  }
}

export default connect(mapStateToProps)(PostsPage);
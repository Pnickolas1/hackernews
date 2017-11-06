import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/categories'
import { connect } from 'react-redux';
import * as helpers from '../../utils/helpers'
import { Navbar } from '../NavBar';

//import PostList from '../Posts/PostList/'

class CategoryPage extends Component{
  

  render(){

  console.log(this.props)
    return(
      <div className="container-fluid" style={{padding: 0}}>
      <Navbar />
        <div className="container">
          <div className="row margin-top-10">
            <div className="col-md-12">
              <label className="control-label">Categories</label>
              <div className="alert alert-info" role="alert">
                {this.props.categories.map(category => (
                  <a href={"/"+ category.name} key={category.name} className="margin-15" ><h5 className="badge badge-secondary" style={{fontSize: 20}}> {category.name}</h5></a>
                ))}
              </div>
            </div>
          </div>
          <div className="row margin-top-10">
            <div className="col-md-2">
              <label className="control-label">Order By:</label>
              <select className="form-control">
                <option value="voteScore">Vote Score</option>
                <option value="timestamp">Timestamp</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <p>this will where postlist goes</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    posts : state.posts,
    categories: state.categories
  }
}


function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(actions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (CategoryPage);
import React, {Component} from 'react'
import {Navbar } from '../NavBar'
import { bindActionCreators } from 'redux';
import {connect } from 'react-redux';
import * as postActions from '../../actions/posts';
import * as commentActions from '../../actions/comments'
import * as helpers from '../../utils/helpers';
import Modal from 'react-modal';
import shortid from 'shortid'

class PostsPage extends Component{
  constructor(props, context){
    super(props, context);
    this.changeSortMethod = this.changeSortMethod.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      openModal = false,
      isEditing = false,
      newPost :{
        'title': '',
        'body': '',
        'category': 'react'
      }
    }
  }

  componentWillMount(){
    this.props.actions.loadPosts()
  }

  render(){
    return(
      <div className="container-fluid" style={{padding: 0}}>
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
          <div className="row margin-top-10">
            <div className="col-md-2">
              <label className="control-label">Order By:</label>
              <select className="form-control">
                <option value="voteScore">Vote Score</option>
                <option value="timestamp">TimeStamp</option>
              </select>
            </div>
            <div className="col-md-2 justify-content-center ml-md-auto">
              <button className="btn btn-dark margin-top-10" onClick={this.openModal}><i className="fa fa-plus"></i> Create Post</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
                  <p> PostList will go here</p>
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
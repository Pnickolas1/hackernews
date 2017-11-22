import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/posts'
import { connect } from 'react-redux';
import * as helpers from '../../utils/helpers'
import { Navbar } from '../NavBar';

//import PostList from '../Posts/PostList/'

class CategoryPage extends Component{
  constructor(props, context){
    super(props, context)
      this.changeSortMethod = this.changeSortMethod.bind(this)
  }

  state = {
    sortBy: 'voteScore'
  }

  componentWillMount(){
    let category = this.props.match.params.category
    this.props.actions.loadCategoriesWisePosts(category)
  }

  componentWillRecieveProps(nextProps){
    this.setState({
      posts: nextProps.posts,
      categories: nextProps.categories,
      sortBy: nextProps.sortBy
    })
  }
  

  changeSortMethod(e){
    let sortBy = e.target.value
    this.setState({
      posts: helpers.sort(this.props.posts, sortBy),
      sortBy: sortBy
    })
  }

  render(){
  console.log(this.props)
    return(
      <div className="container-fluid" style={{padding: 0}}>
      <Navbar />
        <div className="container">
          <div className="row margin-top-10">
            <div className="col-md-12">
              <label className="control-label">Categories</label>
              <div className="alert alert-success" role="alert">
                {this.props.categories.map(category => (
                  <a href={"/"+ category.name} key={category.name} className="margin-15" ><h5 className="badge badge-primary" style={{fontSize: 20}}> {category.name}</h5></a>
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
    categories: state.categories,
  }
}


function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(actions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (CategoryPage);
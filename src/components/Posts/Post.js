import React, {Component} from 'react';
import Comments from '../Comments';
import * as postActions from '../../actions/posts'
import * as commentActions from '../../actions/comments'
import * as helpers from '../../utils/helpers';
import * as categoryActions from '../../actions/categories';
import Vote from '../Vote';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import Modal from 'react-modal';
import { Redirect } from 'react-router';


class Post extends Component{


  render(){
    return(
      <div>
        <p>test this</p>
      </div>
    )
  }
}



export default Post;

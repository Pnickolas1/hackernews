import React from 'react'
import {bindActionCreators} from 'redux'
import * as postActions from '../actions/posts'
import * as commentActions from '../actions/comments'
import {connect} from 'react-redux';
import * as helpers from '../utils/helpers'
import Vote from './Vote'
import Modal from 'react-modal'
import shortid from 'shortid'

class Commments extends Component {
  constructor(props, context){
    super(props,context)
    this.handleChange = this.handleChange.bind(this)
    this.changeSortMethod = this.changeSortMethod.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }


  state = {
    sortBy: "voteScore",
    editComment: {},
    openModal: false,
    closeModal: false
  }

  createComment = e => {
    e.preventDefault()
    let comment = {
      id: shortid.generate(),
      body: e.target.comment.value,
      parentId: this.props.post.id,
      timestamp: Date.now(),
      author: "peter",
      voteScore: 1
    }


    
  }


}
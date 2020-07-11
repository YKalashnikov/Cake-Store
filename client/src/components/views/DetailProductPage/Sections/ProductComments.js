import React, { createElement, useState, useEffect } from 'react';
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import Axios from 'axios'
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import { useDispatch } from 'react-redux';

const ProductComments = (props) => {
    const productId = props.productId
    const [likes, setLikes] = useState(2);
    const [dislikes, setDislikes] = useState(1);
    const [action, setAction] = useState(null);
    const dispatch = useDispatch()

    const increseUpdateLikes = () =>{
      Axios.post('/api/product/add_likes',{productId})
      .then(response=>{
          setLikes(response.data.likes)})
    }

    const decreaseUpdateLikes = () =>{
      Axios.post('/api/product/decrease_likes',{productId})
      .then(response=>{
        setDislikes(response.data.dislikes)})
    }
  
  
    const like = () => {
      increseUpdateLikes()
      setAction('liked');
    };
  
    const dislike = () => {
      decreaseUpdateLikes()
      setAction('disliked');
    };
  
    const actions = [
      <span key="comment-basic-like">
        <Tooltip title="Like">
          {createElement(action === 'liked' ? LikeFilled : LikeOutlined, {
            onClick: like,
          })}
        </Tooltip>
        <span className="comment-action">{likes}</span>
      </span>,
      <span key="comment-basic-dislike">
        <Tooltip title="Dislike">
          {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined, {
            onClick: dislike,
          })}
        </Tooltip>
        <span className="comment-action">{dislikes}</span>
      </span>,
    ];
  
    return (
        
      <Comment
        actions={actions}
        author={props.detail.writer? props.detail.writer.name:'Alex'}
        avatar={
          <Avatar
            src={props.detail.writer?props.detail.writer.image:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}
            alt="Han Solo"
          />
        }
        content={
          <p>
            {props.detail.description}</p>
        }
        datetime={
          <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
        }
        />
    )
}

export default ProductComments;
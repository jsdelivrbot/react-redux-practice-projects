import React from 'react';
import { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {fetchPosts} from '../actions/index';
import {Link} from 'react-router'




 class PostsIndex extends Component {
     componentWillMount(){
         this.props.fetchPosts();
     }
     componentDidMount(){
        console.log ( this.props.posts)
     }

     componentDidUpdate(){
         console.log(this.props.posts)
     }
     componentWillUpdate(){
        console.log(this.props.posts)
    }
    renderPosts(){
        return this.props.posts.map((post)=>{
            return (<li className="list-group-item" key={post.id}>
                        <Link to={"posts/" + post.id}>
                            <span className="pull-xs-right">{post.categories}</span>
                            <strong>{post.title}</strong>
                        </Link>
                    </li>)
        })
    }
     render(){
       return (
           <div>
               <div className="text-xs-right">
                   <Link to="/posts/new" className = "btn btn-primary">
                       Add a Post
                   </Link>

               </div>
                <ur className="list-group">
                    {this.renderPosts()}
                </ur>
           </div>)
   }
}


function mapStateToProps(state){
    return {posts:state.posts.all}
}


export default connect(mapStateToProps,{fetchPosts})(PostsIndex)
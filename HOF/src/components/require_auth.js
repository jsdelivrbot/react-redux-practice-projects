/**
 * Created by leichen on 4/9/16.
 */
import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux'


export default function(WrappedComponent){
    class Authentication extends Component{
        static contextTypes={
            router:React.PropTypes.object
        }
        componentWillMount(){
            console.log()
            if(!this.props.authenticated){this.context.router.push('/')}
        }

        componentWillUpdate(nextProps){
            if(!nextProps.authenticated){
                this.context.router.push('/')
            }
        }

         render(){
             return (
                 <WrappedComponent {...this.props}/>

             )
         }

    }

    function mapStateToProps(state){
        return {authenticated:state.authenticated}
    }

    return connect(mapStateToProps)(Authentication);
}


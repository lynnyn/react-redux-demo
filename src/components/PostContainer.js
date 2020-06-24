import React , { useState} from 'react'
import { connect } from 'react-redux'
import { postUser } from './redux'

function PostContainer ({postUser}) {

const [userId, setUserId] = useState('')
const [title, setTitle] = useState('')
const [body,setBody] = useState('')

const submitHandler=(e) =>{
    const user = {userId, title, body}
    e.preventDefault();
    postUser(user)  
}
        
  return (
    <div>
        <form onSubmit = {submitHandler}>
            <div>
                <input type = "text" name = "userId" onChange = {e=>setUserId(e.target.value)} value = {userId} />
            </div>
            <div>
                <input type = "text" name = "title" onChange = {e=>setTitle(e.target.value)} value = {title}   />
            </div>
            <div>
                <input type = "text" name = "body" onChange = {e=>setBody(e.target.value)}  value = {body} />
            </div>
            <button type = "submit">Submit</button>
        </form>
    </div>
  )
}

const mapStateToProps = state =>{
    return{
        user: state.post.user
    }
}
 
  const mapDispatchToProps = dispatch => {
    return {
      postUser: (user) => dispatch(postUser(user))
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostContainer)

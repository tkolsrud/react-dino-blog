import React, { Component } from 'react'
import Comment from './Comment'

class Post extends Component {
    state = {
        body: "Check out this hot cool blog post!!!"
    }

    editBody = () => {
        const newBody = prompt("What should the new body be?")
        this.setState({
            body: newBody
        })
    }

    submitNewBody = (e) => {
        e.preventDefault()
        this.setState({
            body: e.target[0].value
        })
        console.log("e.target[0].value:", e.target[0].value)
    }

    render () {
        let allComments = this.props.comments.map((c, i) => {
            return <Comment key = {i} content={c}/>
        })
        return (
            <div className="blogPost">
                <h1>{this.props.title}</h1>
                <h2>{this.props.author}</h2>
                <p>{this.state.body}</p>
                <form onSubmit={this.submitNewBody}>
                    <input type="text" />
                    <input type="submit" value="Edit Body" />
                </form>
                <hr />
                <h3>Comments:</h3>
                {allComments}
            </div>
        )
    }
}

export default Post
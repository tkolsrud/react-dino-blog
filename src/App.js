import './App.css';
import Post from './Post'

function App() {
  const post = {
    title: "Dinosaurs Are Awesome",
    author: "Stealthy Stegasaurus",
    body: "Check out this hot cool blog post!!!",
    comments: ["First!", "Great post", "Hire this author now!"]
  }
  return (
    <div className="App">
      <Post
        title={post.title}
        author={post.author}
        body={post.body}
        comments={post.comments}
      />
    </div>
  );
}

export default App;

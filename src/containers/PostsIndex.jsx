import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
class PostsIndex extends React.Component {

    componentWillMount = () => {
        this.props.fetchPosts();
    }

    getPosts = () => {
        return this.props.posts ? this.props.posts.all.map(post => {
            return (
                <div key={post.id}>
                    <h4>{`post id ${post.id}  - ${post.title}`}</h4>
                    {post.desc}
                </div>
            );
        }) : null;
    }

    render = () => {
        return (
            <div>{this.getPosts()}</div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    };
}

export default connect(mapStateToProps, {fetchPosts: fetchPosts})(PostsIndex);

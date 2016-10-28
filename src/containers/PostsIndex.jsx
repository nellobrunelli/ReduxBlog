import { Link } from 'react-router';
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

    getButtonNew = () => {
        return (
            <Link
                to="/post/new"
                className="btn btn-primary"
            >
                {'Add a Post'}
            </Link>
        );
    }

    render = () => {
        return (
            <div>
                {this.getButtonNew()}
                {this.getPosts()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    };
}

export default connect(mapStateToProps, {fetchPosts: fetchPosts})(PostsIndex);

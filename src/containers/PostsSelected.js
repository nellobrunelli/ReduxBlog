import { connect } from 'react-redux';
import SelectorPostsSelected from '../selectors/SelectorPostsSelected';

class PostsSelected extends React.Component {

    getDom = () => (
        <div>{this.getPosts()}</div>
    )

    getPosts = () => {
        return this.props.posts.map(post => {
            return (
                <div key={post.id}>
                    <h4>{`post id ${post.id} - ${post.title}`}</h4>
                    {post.desc}
                </div>
            );
        });
    }

    render = () => {
        return (
            <div>
                <h2>{'Selected Posts'}</h2>
                {this.getPosts()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: SelectorPostsSelected(state.posts)
    };
}

export default connect(mapStateToProps)(PostsSelected);

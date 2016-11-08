import { connect } from 'react-redux';
import SelectorPostsSelected from '../selectors/SelectorPostsSelected';
import _ from 'lodash';

class PostsSelected extends React.Component {

    getDom = () => (
        <div>{this.getPosts()}</div>
    )

    getPosts = () => {
        return _.map(this.props.posts, post => {
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

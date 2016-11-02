import PostsIndex from '../containers/PostsIndex';
import PostsSelected from '../containers/PostsSelected';

export default class Blog extends React.Component {
    render = () => {
        return (
            <section>
                <PostsIndex />
                <hr />
                <PostsSelected />
            </section>
        );
    }
}

import PostCard from 'componentes/PostCard'
import styles from './Posts.module.sass'
import posts from 'PostJson/posts.json'

export const Posts = () => {
    return (
        <ul className={styles.posts} >
            {posts.map((post) => {
                return (
                    <li key={post.id}>
                        <PostCard post={post} />
                    </li>
                )
            })}
        </ul>
    )
}

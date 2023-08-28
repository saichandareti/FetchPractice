import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {item} = props
  const {author, avatarUrl, id, imageUrl, title, topic} = item

  return (
    <Link to="/">
      <li className="list-item">
        <img src={imageUrl} className="blog-image" alt={title} />
        <div className="right-container">
          <p className="blog-name">React.js</p>
          <p className="blog-heading">{topic}</p>
          <div className="avatar-con">
            <img src={avatarUrl} className="avatar-image" alt="img" />
            <p className="avatar-name">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem

import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {blogList: [], isLoading: true}

  componentDidMount = () => {
    this.FetchBlogDetails()
  }

  FetchBlogDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const jasonData = await response.json()

    const updatedList = jasonData.map(each => ({
      author: each.author,
      avatarUrl: each.avatar_url,
      id: each.id,
      imageUrl: each.image_url,
      title: each.title,
      topic: each.title,
    }))

    this.setState({blogList: updatedList, isLoading: false})
  }

  render() {
    const {blogList, isLoading} = this.state
    return (
      <ul className="list-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogList.map(eachItem => (
            <BlogItem item={eachItem} key={eachItem.id} />
          ))
        )}
      </ul>
    )
  }
}
export default BlogList

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_POST, SHOW_POST } from '../redux/action/PostAction'
import { Link } from 'react-router-dom'

const PostList = () => {
  const dispatch = useDispatch()
  const allPosts = useSelector((state) => state.post.post)

  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [sortOrder, setSortOrder] = useState('newest')
  const [filteredPosts, setFilteredPosts] = useState([])

  useEffect(() => {
    dispatch(SHOW_POST())
  }, [])

  useEffect(() => {
    let posts = [...allPosts]

    // Search
    if (search) {
      posts = posts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
      )
    }

    // Filter by category
    if (category) {
      posts = posts.filter((post) => post.category === category)
    }

    // Sort by date
    posts.sort((a, b) => {
      const dateA = new Date(a.date)
      const dateB = new Date(b.date)
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB
    })

    setFilteredPosts(posts)
  }, [allPosts, search, category, sortOrder])

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      dispatch(DELETE_POST(id));
      dispatch(SHOW_POST())
    }
  }

  return (
    <div className="container py-5">
      <h2 className="text-center text-primary fw-bold mb-4">📚 Blog Posts</h2>

      {/*  Search / Filter / Sort */}
      <div className="row mb-4">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Technology">Technology</option>
            <option value="Travel">Travel</option>
            <option value="Food">Food</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Education">Education</option>
          </select>
        </div>
        <div className="col-md-4">
          <select
            className="form-select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="newest">Sort by Newest</option>
            <option value="oldest">Sort by Oldest</option>
          </select>
        </div>
      </div>

      {/* Post Cards */}
      <div className="row g-4">
        {filteredPosts && filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div className="col-md-6 col-lg-4" key={post.id}>
              <div className="card h-100 shadow rounded-4 border-0">
                <img
                  src={post.image}
                  className="card-img-top rounded-top-4"
                  alt={post.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold text-primary">{post.title}</h5>
                  <p className="card-text">{post.description.substring(0, 100)}...</p>
                  <div className="mt-auto">
                    <span className="badge bg-secondary me-2">{post.category}</span>
                    <small className="text-muted d-block mt-2">📅 {post.date}</small>

                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <Link to={`/edit/${post.id}`} className="btn btn-warning btn-sm me-2">
                        ✏ Edit
                      </Link>
                      <button
                        className="btn btn-sm btn-danger rounded-3 px-3"
                        onClick={() => handleDelete(post.id)}
                      >
                        🗑 Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No posts available.</p>
        )}
      </div>
    </div>
  )
}

export default PostList

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { SHOW_POST, UPDATE_POST } from '../redux/action/PostAction';

const EditPost = () => {
  const [formInput, setFormInput] = useState({
    title: '',
    description: '',
    date: '',
    image: '',
    category: ''
  });

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
const posts = useSelector((state) => state.post.post);



  useEffect(() => {
  if (posts && posts.length > 0) {
    const selectedPost = posts.find((post) => post.id === id);
    console.log(selectedPost);
    
    if (selectedPost) {
      setFormInput(selectedPost);
    }
  }
}, [id, posts]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({
      ...formInput,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formInput.title ||
      !formInput.description ||
      !formInput.date ||
      !formInput.image ||
      !formInput.category
    ) {
      alert('Please Fill All Fields');
      return;
    }

    dispatch(UPDATE_POST(id, formInput));
    dispatch(SHOW_POST())
    navigate('/');


  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-5">
              <h2 className="mb-4 text-center fw-bold text-primary">✏ Edit Blog Post</h2>

              <form onSubmit={handleSubmit}>
                {/* Title */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Post Title</label>
                  <input
                    type="text"
                    name="title"
                    className="form-control form-control-lg rounded-3"
                    placeholder="Enter blog post title"
                    value={formInput.title}
                    onChange={handleChange}
                  />
                </div>

                {/* Description */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Description</label>
                  <textarea
                    name="description"
                    rows="4"
                    className="form-control rounded-3"
                    placeholder="Write your blog content here..."
                    value={formInput.description}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {/* Date */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Date</label>
                  <input
                    type="date"
                    name="date"
                    className="form-control rounded-3"
                    value={formInput.date}
                    onChange={handleChange}
                  />
                </div>

                {/* Image URL */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Image URL</label>
                  <input
                    type="url"
                    name="image"
                    className="form-control rounded-3"
                    placeholder="https://example.com/image.jpg"
                    value={formInput.image}
                    onChange={handleChange}
                  />
                </div>

                {/* Category */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">Category</label>
                  <select
                    name="category"
                    className="form-select rounded-3"
                    value={formInput.category}
                    onChange={handleChange}
                  >
                    <option value="">Select Category</option>
                    <option value="Technology">Technology</option>
                    <option value="Travel">Travel</option>
                    <option value="Food">Food</option>
                    <option value="Lifestyle">Lifestyle</option>
                    <option value="Education">Education</option>
                  </select>
                </div>

                {/* Submit */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-success btn-lg rounded-3">
                    ✅ Update Post
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPost;

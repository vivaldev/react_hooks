import React, { useReducer } from "react";

const initialBlog = {
  id: 0,
  title: "",
  body: "",
  stored: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return {
        ...state,
        id: state.id + 1,
        title: action.payload.title,
        body: action.payload.body,
        stored: false,
      };
  }
};

const UseReducer = ({ isVisible, toggleVisibility }) => {
  const [state, dispatch] = useReducer(reducer, initialBlog);

  return (
    <div className="border">
      <h2>useReducer()</h2>
      {isVisible && (
        <div className="counter-container">
          <h5 className="counter-title">Blog Reducer</h5>
          <form className="form">
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                name="title"
                id="title"
                className="form-control"
                placeholder="Enter title"
                value={state.title}
              />
            </div>
            <div className="form-group">
              <label htmlFor="body">Blog:</label>
              <textarea
                name="body"
                id="body"
                className="form-control textarea"
                placeholder="Enter body"
                value={state.body}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      )}
      <button
        onClick={toggleVisibility}
        className={isVisible ? "btn-secondary" : "btn"}
      >
        Read {isVisible ? "less" : "more"}
      </button>
    </div>
  );
};

export default UseReducer;

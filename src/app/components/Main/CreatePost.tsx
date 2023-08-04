import React from 'react';

const CreatePost = () => {
    return (
        <div>
           <div className="form-control">
  <label className="input-group input-group-lg">
    <span>LG</span>
    <input type="text" placeholder="Type here" className="input input-bordered input-lg" />
  </label>
</div>
<div className="form-control">
  <label className="input-group input-group-md">
    <span>MD</span>
    <input type="text" placeholder="Type here" className="input input-bordered input-md" />
  </label>
</div>
<div className="form-control">
  <label className="input-group input-group-sm">
    <span>SM</span>
    <input type="text" placeholder="Type here" className="input input-bordered input-sm" />
  </label>
</div>
<div className="form-control">
  <label className="input-group input-group-xs">
    <span>XS</span>
    <input type="text" placeholder="Type here" className="input input-bordered input-xs" />
  </label>
</div>
        </div>
    );
};

export default CreatePost;
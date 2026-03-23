import React, { useState } from "react";

function Review() {

  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");

  const submitReview = () => {
    console.log("Rating:", rating);
    console.log("Review:", review);
  };

  return (
    <div>
      <h3>Rate & Review</h3>

      <select onChange={(e)=>setRating(e.target.value)}>
        <option value="">Select Rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <br/>

      <textarea
        placeholder="Write your review"
        onChange={(e)=>setReview(e.target.value)}
      />

      <br/>

      <button onClick={submitReview}>Submit</button>
    </div>
  );
}

export default Review;
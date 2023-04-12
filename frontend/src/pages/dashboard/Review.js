import React, { useEffect, useState } from 'react';
import ReviewsBar from './ReviewsBar';



function Review (props){

    const lang = props.lang;
    const [reviewScore, setReviewScore] = useState(50);
    const [reviewScore1, setReviewScore1] = useState(30);
    const [reviewScore2, setReviewScore2] = useState(90);

    // const fetchReviewScore = () => {
    //     switch (lang.toLowerCase()) {
    //       case 'javascript':
    //       case 'js':
    //         setReviewScore(70);
    //         break;
    //       case 'java':
    //         setReviewScore(75);
    //         break;
    //       case 'python':
    //         setReviewScore(80);
    //         break;
    //       default:
    //         setReviewScore(10);
    //         break;
    //     }
    //   };

    //   useEffect(() => {
    //     fetchReviewScore();
    //     //eslint-disable-next-line
    //   }, []);

  return (
    <div>
        <h3>Reviews</h3>
        <div className='row mt-3'>
  <div className='col-md-4 d-flex align-items-center'>
    <ReviewsBar score={reviewScore} />
    <span className='ml-3'>of Pharmacists love working with {lang}.</span>
  </div>
  <div className='col-md-4 d-flex align-items-center'>
    <ReviewsBar score={reviewScore1} />
    <span className='ml-3'>of Users love working with {lang}.</span>
  </div>
  <div className='col-md-4 d-flex align-items-center'>
    <ReviewsBar score={reviewScore2} />
    <span className='ml-3'>of Users love working with {lang}.</span>
  </div>
</div>
      
    </div>
  );
};

export default Review;

import React from 'react';
import ReviewProvider from './ReviewProvider';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';

const ReviewsBar = (props) => {
    const { score } = props;
  
    // function for calculating the color
    const calcColor = (percent, start, end) => {
      let a = percent / 100,
        b = (end - start) * a,
        c = b + start;
  
      // return an CSS hsl color string
      return 'hsl(' + c + ', 100%, 50%)';
    };
  
    return (
      <ReviewProvider valueStart={0} valueEnd={score}>
        {(value) => (
          <CircularProgressbar
            value={value}
            text={`${value} %`}
            circleRatio={0.7} /* Make the circle only 0.7 of the full diameter */
            styles={{
              trail: {
                strokeLinecap: 'butt',
                transform: 'rotate(-126deg)',
                transformOrigin: 'center center',
              },
              path: {
                strokeLinecap: 'butt',
                transform: 'rotate(-126deg)',
                transformOrigin: 'center center',
                stroke: calcColor(value, 0, 120),
              },
              text: {
                fill: '#ddd',
              },
            }}
            strokeWidth={10}
          />
        )}
      </ReviewProvider>
    );
  };
  
  export default ReviewsBar;
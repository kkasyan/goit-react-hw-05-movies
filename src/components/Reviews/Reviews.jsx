import css from '../Reviews/reviews.module.css';

import { getMovieReviews } from 'shared/api/movies';
// import useAdditionalFetch from 'hooks/useFetch';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    if (!id) {
      return;
    }
    const fetchActors = async () => {
      try {
        setIsLoading(true);
        const result = await getMovieReviews(id);
        const review = result.results.map(item => {
          return {
            id: item.id,
            author: item.author,
            content: item.content,
          };
        });
        setReviews(review);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };
    fetchActors();
  }, [id]);

  return (
    <>
      {reviews.length === 0 && <p>We don't have any reviews for this movie</p>}
      {reviews.length > 0 && (
        <ul className={css.reviewsList}>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <h2 className={css.author}>Author: {review.author}</h2>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      )}
      {isLoading && <p>Loading...</p>}
      {error && <p>Error!</p>}
    </>
  );
};

export default Reviews;

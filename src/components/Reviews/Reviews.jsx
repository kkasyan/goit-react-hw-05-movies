import css from '../Reviews/reviews.module.css';

import { getMovieReviews } from 'shared/api/movies';
// import useAdditionalFetch from 'hooks/useFetch';

import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Box from '@mui/material/Box';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import BackToTop from 'react-back-to-top';

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
      {reviews.length === 0 && (
        <Typography
          variant="p"
          sx={{
            fontFamily: 'monospace',
            fontSize: 16,
            fontWeight: 400,
            color: 'inherit',
            p: 2,
          }}
        >
          We don't have any reviews for this movie
        </Typography>
      )}
      {reviews.length > 0 && (
        <>
          <List>
            {reviews.map(review => {
              return (
                <ListItem
                  sx={{ display: 'flex', flexDirection: 'column' }}
                  key={review.id}
                >
                  <Typography
                    variant="h2"
                    noWrap
                    sx={{
                      mr: 2,
                      display: { xs: 'none', md: 'flex' },
                      fontFamily: 'monospace',
                      fontWeight: 500,
                      color: 'inherit',
                      fontSize: 20,
                    }}
                  >
                    Author: {review.author}
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{
                      fontFamily: 'monospace',
                      fontSize: 16,
                      fontWeight: 400,
                      color: 'inherit',
                      m: 2,
                    }}
                  >
                    {review.content}
                  </Typography>
                </ListItem>
              );
            })}
          </List>
          <BackToTop
            mainStyle={{
              width: '100%',
              height: '100%',
              background: 'url(...)',
            }}
            percentStyle={{
              width: '100%',
              height: '100%',
            }}
            animate="rotate"
            offsetTop={20}
            step={50}
            percent={true}
            visiblePercent={50}
          />
        </>
      )}
      {isLoading && <p>Loading...</p>}
      {error && <p>Error!</p>}
    </>
  );
};

export default Reviews;

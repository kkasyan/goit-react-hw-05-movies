import css from '../Cast/cast.module.css';

import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { getMovieCast } from 'shared/api/movies';
import { ErrorNotification } from 'shared/ErrorNotification/ErrorNotification';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import BackToTop from 'react-back-to-top';
import { FallingLines } from 'react-loader-spinner';

const imgURL = 'https://image.tmdb.org/t/p/w500';

const Cast = () => {
  const params = useParams();
  const { id } = params;
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      return;
    }
    const fetchActors = async () => {
      try {
        setIsLoading(true);
        const result = await getMovieCast(id);
        const actor = result.cast.map(item => {
          return {
            id: item.id,
            name: item.name,
            character: item.character,
            photo: item.profile_path,
          };
        });
        setCast(actor);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchActors();
  }, [id]);

  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {cast.map(actor => {
          return (
            <Grid xs={2} key={actor.id}>
              <ListItem sx={{ display: 'flex', flexDirection: 'column' }}>
                {actor.photo ? (
                  <img
                    className={css.actorPhoto}
                    src={`${imgURL}${actor.photo}`}
                    alt="actor name"
                  />
                ) : (
                  <img
                    className={css.actorPhoto}
                    src="https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101027/112815900-no-image-available-icon-flat-vector.jpg?ver=6"
                    alt="no actor available"
                  />
                )}
                <Typography variant="list">{actor.name}</Typography>
                <Typography variant="list">
                  Character: {actor.character}
                </Typography>
              </ListItem>
            </Grid>
          );
        })}
      </Grid>
      <BackToTop
        mainStyle={{
          width: '100%',
          height: '100%',
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
      {isLoading && (
        <FallingLines
          color="#4fa94d"
          width="100"
          visible={true}
          ariaLabel="falling-lines-loading"
        />
      )}
      {error && <ErrorNotification />}
    </Box>
  );
};

export default Cast;

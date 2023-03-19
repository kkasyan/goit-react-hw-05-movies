import css from '../Cast/cast.module.css';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { getMovieCast } from 'shared/api/movies';
// import useAdditionalFetch from 'hooks/useAdditionalFetch';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BackToTop from 'react-back-to-top';

const imgURL = 'https://image.tmdb.org/t/p/w500';

// const Cast = ({ name, character, profile_path, cast }) => {
//   const params = useParams();
//   const { id } = params;
//   const { actors, isLoading, error } = useAdditionalFetch({
//     fetchData: getMovieCast,
//     returnDetails: {
//       id: id,
//       name: name,
//       character: character,
//       photo: profile_path,
//     },
//     information: cast,
//   });
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
      }
    };
    fetchActors();
  }, [id]);

  return (
    <div>
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
                <Typography
                  variant="p"
                  sx={{
                    fontFamily: 'monospace',
                    fontSize: 16,
                    fontWeight: 400,
                    color: 'inherit',
                  }}
                >
                  {actor.name}
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontFamily: 'monospace',
                    fontSize: 16,
                    fontWeight: 400,
                    color: 'inherit',
                  }}
                >
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
      {isLoading && <p>...Loading...</p>}
      {error && <p>Error!</p>}
    </div>
  );
};

export default Cast;

import css from '../Cast/cast.module.css';

import { getMovieCast } from 'shared/api/movies';
// import useAdditionalFetch from 'hooks/useFetch';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
      }
    };
    fetchActors();
  }, [id]);

  return (
    <div>
      <ul className={css.listWrap}>
        {cast.map(actor => {
          return (
            <li className={css.actor} key={actor.id}>
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
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          );
        })}
      </ul>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error!</p>}
    </div>
  );
};

export default Cast;

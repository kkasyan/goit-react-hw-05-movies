import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const useFetch = ({ fetchData, dependencies, isFetch }) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    if (!id) {
      return;
    }

    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        const result = await fetchData(...dependencies);
        setMovie(result);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    if (isFetch) {
      return;
    }
    fetchMovie();
  }, []);

  if (isFetch) {
    return;
  }

  return { movie, setMovie, isLoading, setIsLoading, error, setError };
};

export default useFetch;

useFetch.defaultProps = {
  isFetch: () => {},
};

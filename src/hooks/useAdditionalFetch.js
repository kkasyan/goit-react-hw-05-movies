import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const useAdditionalFetch = ({
  fetchData,
  isFetch,
  returnDetails,
  information,
  dependencies,
}) => {
  const params = useParams();
  const { id } = params;

  const [{ info }, { setInfo }] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      return;
    }

    const fetchAdditionalMovieInfo = async () => {
      try {
        setIsLoading(true);
        const result = await fetchData(id);
        const info = result.information.map(item => {
          return {
            ...item.returnDetails,
          };
        });
        setInfo(info);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };
    fetchAdditionalMovieInfo();
  }, [dependencies, id, fetchData, returnDetails, information, setInfo]);

  if (isFetch) {
    return;
  }

  return { info, setInfo, isLoading, setIsLoading, error, setError };
};

export default useAdditionalFetch;

useAdditionalFetch.defaultProps = { isFetch: () => {} };

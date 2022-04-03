import { useEffect, useState } from 'react';

const useGraph = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('graphData.json')
      .then((res) => res.json())
      .then((items) => setData(items));
  }, []);
  return [data, setData];
};

export default useGraph;

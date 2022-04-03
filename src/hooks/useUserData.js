import { useEffect, useState } from 'react';

const useUserData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('userData.json')
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);
  console.log(data);
  return [data, setData];
};

export default useUserData;

import { useEffect } from 'react';


const MyComponent = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://fake-store-api-2no73ornoa-uc.a.run.app/api/products/all');
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

};

export default MyComponent;

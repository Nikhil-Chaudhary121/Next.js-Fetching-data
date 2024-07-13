import { useEffect, useState } from "react";

const getUserData = () => {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          "https://602e7c2c4410730017c50b9d.mockapi.io/users"
        );
        const data = await res.json();
        // console.log(data);
        if (data.error) {
          console.error("Error fetching data:", data.error);
          return;
        }
        setUsersData(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [setUsersData, setLoading]);

  return { loading, usersData };
};

export default getUserData;

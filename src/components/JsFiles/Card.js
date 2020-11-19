import React, { useEffect } from "react";
import { db } from "./Firebase";

const Card = () => {
  const [users, setUsers] = React.useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = await db.collection("promo").get();
      setUsers(
        usersCollection.docs.map((doc) => {
          return doc.data();
        })
      );
    };
    fetchUsers();
  }, []);

  return (
    <>
      {users.map((user) => (
        <div className="card">
          <img href="/" src={user.image} alt="" />
          <div>
            <h2>{user.name}</h2>
            <p>{user.description}</p>
            <a href="/">Read more</a>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;

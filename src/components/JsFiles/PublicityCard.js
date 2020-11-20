import React, { useEffect } from "react";
import { db } from "./Firebase";

const PublicityCard = () => {
  const [users, setUsers] = React.useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = await db
        .collection("publicityBanner")
        .limit(1)
        .get();
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
        <div className="card1">
          <a href="/promo">
            <img src={user.image} alt="" />{" "}
          </a>
          <div></div>
        </div>
      ))}
    </>
  );
};

export default PublicityCard;

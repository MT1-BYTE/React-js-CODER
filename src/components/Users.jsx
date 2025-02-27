import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = fetch("https://jsonplaceholder.org/users");
    getUsers.then((res) => res.json()).then((res) => setUsers(res));
  }, []);

  console.log(users);

  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h2>{user.firstname}</h2>
            <h2>{user.email}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Users;

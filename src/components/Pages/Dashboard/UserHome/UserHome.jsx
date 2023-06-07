import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../../Context/AuthProvider";

const UserHome = () => {
  const { users } = useContext(AuthContext);
  return (
    <div>
      <h2 className="text-2xl ">
        {users ? (
          <>
            <h2>WelCome Back, {users.displayName}</h2>
          </>
        ) : (
          <></>
        )}
      </h2>
    </div>
  );
};

export default UserHome;

import React, { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import Users from "../../../components/users/Users";
import Loading from "../../../components/loading/Loading";

const ManageUser = () => {
  const [reload, setReload] = useState(false);
  let { data, loading, error } = useFetch("users", reload);

  return (
    <div>
      <>
        {loading ? (
          <Loading />
        ) : (
          <Users setReload={setReload} isAdmin={true} data={data} />
        )}
      </>
    </div>
  );
};

export default ManageUser;

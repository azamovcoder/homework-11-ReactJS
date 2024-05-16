import { useState } from "react";
import Products from "../../../components/products/Products";
import useFetch from "../../../hooks/useFetch";
import Loading from "../../../components/loading/Loading";

const ManageProducts = () => {
  const [reload, setReload] = useState(true);
  let { data, loading, error } = useFetch("/products", reload);

  return (
    <div className="">
      <>
        {loading ? (
          <Loading />
        ) : (
          <Products
            setReload={setReload}
            isAdmin={true}
            data={data}
            loading={loading}
          />
        )}
      </>
    </div>
  );
};

export default ManageProducts;

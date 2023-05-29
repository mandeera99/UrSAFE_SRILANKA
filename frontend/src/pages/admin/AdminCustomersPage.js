import CustomersPageComponent from "./components/CustomersPageComponent"

import axios from "axios";

const fetchUsers = async (abctrl) => {
  const {data} = await axios.get("/api/users", {
      signal: abctrl.signal,
  });
  return data
}

const deleteUser = async (userId) => {
  const { data } = await axios.delete(`/api/users/${userId}`);
  return data
}

const AdminCustomersPage = () => {
  return <CustomersPageComponent fetchUsers={fetchUsers} deleteUser={deleteUser} />;
};

export default AdminCustomersPage;

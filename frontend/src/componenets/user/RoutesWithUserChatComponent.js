import { Outlet } from "react-router-dom";
import UserChatComponent from "./UserChatComponent";
import "bootstrap/dist/css/bootstrap.min.css";

const RoutesWithUserChatComponent = () => {
  return (
    <>
      <UserChatComponent /> <Outlet />
    </>
  );
};

export default RoutesWithUserChatComponent;



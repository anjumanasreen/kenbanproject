import { useOutlet } from "react-router-dom";
import Header from "../Components/Header";
import Sidemenu from "../Components/Sidemenu";

export const PublicLayout = () => {

  const outlet = useOutlet();

  return (
    <div> 
        <Header/>
        <Sidemenu />
        {outlet}
    </div>
  );
};

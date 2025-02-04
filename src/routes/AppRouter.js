import { Router } from "@reach/router";
import LegalData from "../pages/LegalData";
import Redirection from "../pages/Redirection";

const AppRouter = () => {
  return (
    <Router component="div">
      <LegalData path="/" />
      <Redirection path="/hosting/:id" />
    </Router>
  );
};

export default AppRouter;

import AuthGuard from "../Guard/AuthGuard";
import GuestGuard from "../Guard/GuestGuard";
import appRoutes from "../constants/routes";
import Home from "../pages/home/Home";
import AllMovies from "../pages/movies/AllMovies";
import SignIn from "../pages/signIn/SignIn";
import SignUp from "../pages/signUp/SignUp";

const routes = [
  {
    path: appRoutes.home,
    Component: Home,
  },
  {
    path: appRoutes.movies,
    Component: AllMovies,
    Guard: AuthGuard,
  },
  {
    path: appRoutes.signup,
    Component: SignUp,
  },
  {
    path: appRoutes.signin,
    Component: SignIn,
    Guard: GuestGuard,
  },
];

export default routes;

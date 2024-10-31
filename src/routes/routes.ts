import About from "../components/pages/about/About";
import Auth from "../components/pages/auth/Auth";
import Films from "../components/pages/films/Films";
import Home from "../components/pages/home/Home";
import MyList from "../components/pages/favourites/Favorites";
import Popular from "../components/pages/popular/Popular";
import TVshows from "../components/pages/TVshows/TVshows";
import UserProfile from "../components/pages/userProfile/UserProfile";
import CompleteProfilePage from "../components/UI/completeProfilePage/CompleteProfilePage";
import Favorites from "../components/pages/favourites/Favorites";

export const routes = [
  {
    path: "/auth",
    element: Auth,
  },
  {
    path: "/",
    element: Home,
  },
  {
    path: "/films",
    element: Films,
  },
  {
    path: "/mylist",
    element: MyList,
  },
  {
    path: "/popular",
    element: Popular,
  },
  {
    path: "/tvshows",
    element: TVshows,
  },
  {
    path: "/profile",
    element: UserProfile,
  },
  {
    path: "/complete-profile",
    element: CompleteProfilePage,
  },
  {
    path: "/favorites/:userName",
    element: Favorites,
  },
  {
    path: "/about/:type/:title",
    element: About,
  },
];

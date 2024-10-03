import About from "../components/pages/about/About";
import Auth from "../components/pages/auth/Auth";
import Films from "../components/pages/films/Films";
import Home from "../components/pages/home/Home";
import MyList from "../components/pages/mylist/MyList";
import Popular from "../components/pages/popular/Popular";
import TVshows from "../components/pages/TVshows/TVshows";
import UserProfile from "../components/pages/userProfile/UserProfile";

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
    path: "/about/:type/:title",
    element: About,
  },
];

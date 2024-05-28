import Home from "../pages/Home";
import Search from "../pages/Search";

const publicRouter = [
  { path: "/", component: Home },
  { path: "/search", component: Search },
];
const privateRouter = [];

export { publicRouter, privateRouter };

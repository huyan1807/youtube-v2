import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRouter } from "./routers";
import { DefaultLayout } from "./components/Layout";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRouter.map((router, index) => {
            const Layout = router.layout || DefaultLayout;
            const Page = router.component;
            return (
              <Route
                key={index}
                path={router.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              ></Route>
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import { useState } from "react";
import { Button, HStack } from "@chakra-ui/react";
import { createBrowserRouter, Route } from "react-router";
import { Routes } from "react-router";
import Homepage from "./pages/Homepage";
import PostDetails from "./pages/PostDetails";
import Layout from "./components/layout/Layout";
import PostPage from "./pages/PostPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/posts" element={<PostPage />}>
          <Route path=":id" element={<PostDetails />} />
        </Route>
      </Route>
    </Routes>
  );
}
// const router = createBrowserRouter([
//   { path: "/", Component: Root },
// ]);
export default App;

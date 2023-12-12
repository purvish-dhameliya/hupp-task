import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import NewPost from "./pages/NewPost";
import PostList from "./pages/PostList";
// import UpdatePost from "./pages/updatePost";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<NewPost />} />
          <Route path="/addpost" element={<NewPost />} />
          <Route path="/listpost" element={<PostList />} />
          {/* <Route path="/updatepost" element={<UpdatePost />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

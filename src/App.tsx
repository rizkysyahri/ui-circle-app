import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import ProfileDetail from "./pages/Profile/components/ProfileDetail";
import SignIn from "./pages/SignIn";
import DetailPage from "./pages/DetailThread";
import Search from "./pages/Search";
import SignUp from "./pages/SignUp";
import Follow from "./pages/Follow";
import DetailImage from "./pages/DetailImage";
import DetailProfileUser from "./pages/DetailProfileUser";
import ForgotPassword from "./components/ForgotPassword";
import InputResetPassword from "./components/InputResetPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout isFull={true} />}>
          <Route index element={<Home />} />
          <Route path="/detail/:threadId" element={<DetailPage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/follows" element={<Follow />} />
          <Route path="/:username" element={<DetailProfileUser />} />
        </Route>
        <Route path="/" element={<RootLayout isFull={false} />}>
          <Route path="/profile/:id" element={<ProfileDetail />} />
        </Route>

        <Route path="/media/:threadId" element={<DetailImage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<InputResetPassword />} />


        <Route path="/auth">
          <Route index element={<SignIn />} />
          <Route path="/auth/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

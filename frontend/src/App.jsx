import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Login,
  Parent,
  Home,
  Register,
  Private,
  Appointment,
  Therapist,
  Dietician,
  Contact,
  Counseling,
  Blogs,
  Eap,
  Admin,
  Addtherapist,
  Termsandcond,
  CancelPayment,
  SuccessPayment,
  Addblog,
  Blog,
} from "./pages";
import { Addbtn } from "./components";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Parent />}>
            <Route index element={<Home />} />
            <Route path="private/*" element={<Private />}>
              <Route path="book-appointment/:id" element={<Appointment />} />
              <Route path="admin/*" element={<Admin />}>
                <Route index element={<Addbtn />} />
                <Route path="add-therapist" element={<Addtherapist />} />
                <Route path="add-blog" element={<Addblog />} />
              </Route>
            </Route>
            <Route path="login" element={<Login />} />
            <Route
              path="top-indian-therapists-best-online-therapy"
              element={<Therapist />}
            />
            <Route path="dietician" element={<Dietician />} />
            <Route path="counseling" element={<Counseling />} />
            <Route path="contact-us" element={<Contact />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blog/:slug" element={<Blog />} />
            <Route path="register" element={<Register />} />
            <Route path="eap" element={<Eap />} />
            <Route path="termsandcond" element={<Termsandcond />} />
            <Route path="cancelpayment" element={<CancelPayment />} />
            <Route path="successpayment" element={<SuccessPayment />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;

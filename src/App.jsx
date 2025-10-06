// import { Routes, Route } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
// import Users from "./pages/Users";
// import Coaches from "./pages/Coaches";
// import FoodPlans from "./pages/FoodPlans";
// import Assignments from "./pages/Assignments";
// import Settings from "./pages/Settings";
// import Login from "./pages/Login";
// import ProtectedRoute from "./components/ProtectedRoute";

// function App() {
//   return (
//     <Routes>
//       {/* Login route is public */}
//       <Route path="/login" element={<Login />} />

//       {/* Protected routes */}
//       <Route
//         path="/"
//         element={
//           <ProtectedRoute>
//             <Dashboard />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/users"
//         element={
//           <ProtectedRoute>
//             <Users />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/coaches"
//         element={
//           <ProtectedRoute>
//             <Coaches />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/food-plans"
//         element={
//           <ProtectedRoute>
//             <FoodPlans />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/assignments"
//         element={
//           <ProtectedRoute>
//             <Assignments />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/settings"
//         element={
//           <ProtectedRoute>
//             <Settings />
//           </ProtectedRoute>
//         }
//       />
//     </Routes>
//   );
// }

// export default App;


import './App.module.css';
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Coaches from "./pages/Coaches";
import FoodPlans from "./pages/FoodPlans";
import Exercise from "./pages/Exercise";  
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import FAQ from "./pages/Faq";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Payment from "./pages/Payment"; 
import Subscription from "./pages/Subscription"; // ✅ Subscription page

function App() {
  return (
    <Routes>
      {/* Login stays separate */}
      <Route path="/login" element={<Login />} />

      {/* Admin Panel with Sidebar + Topbar */}
      <Route
        path="/"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />
      <Route
        path="/users"
        element={
          <Layout>
            <Users />
          </Layout>
        }
      />
      <Route
        path="/coaches"
        element={
          <Layout>
            <Coaches />
          </Layout>
        }
      />
      <Route
        path="/food-plans"
        element={
          <Layout>
            <FoodPlans />
          </Layout>
        }
      />
      <Route
        path="/exercise"
        element={
          <Layout>
            <Exercise />
          </Layout>
        }
      />
      <Route
        path="/payment"
        element={
          <Layout>
            <Payment />
          </Layout>
        }
      />
      <Route
        path="/subscription"          // ✅ Added Subscription route
        element={
          <Layout>
            <Subscription />
          </Layout>
        }
      />
      <Route
        path="/profile"
        element={
          <Layout>
            <Profile />
          </Layout>
        }
      />
      <Route
        path="/faq"
        element={
          <Layout>
            <FAQ />
          </Layout>
        }
      />
      <Route
        path="/settings"
        element={
          <Layout>
            <Settings />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;

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
import Login from "./pages/Login";
import Forgot from "./pages/Forgot"; // ✅ Forgot Password Page
import Layout from "./components/Layout";
import Payment from "./pages/Payment"; 
import Subscription from "./pages/Subscription";
import AddRecipe from './pages/AddRecipe';
import AddExercise from './pages/AddExercise';
import Reset from './pages/Reset';
import Success from './pages/Success';

function App() {
  return (
    <Routes>
      {/* 🔐 Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/forgot" element={<Forgot />} /> {/* ✅ Forgot Password Added */}
      <Route path="/reset" element={<Reset />} /> {/* ✅ Forgot Password Added */}
      <Route path="/success" element={<Success />} /> {/* ✅ Forgot Password Added */}

      {/* 🧭 Admin Panel with Sidebar + Topbar */}
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
        path="/food-plans/add-recipe"
        element={
          <Layout>
            <AddRecipe />
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
        path="/exercise/add-exercise"
        element={
          <Layout>
            <AddExercise />
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
        path="/subscription"
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

import React, { Suspense, useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import RoleContext, { RoleContextType } from "./routes/RoleContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import SignIn from "./pages/SignIn";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";

const Home = React.lazy(() => import("./pages/Home"));
const Emp = React.lazy(() => import("./pages/Emp"));
const Dept = React.lazy(() => import("./pages/Dept"));
const Login = React.lazy(() => import("./pages/Login"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const App: React.FC = () => {
  const [role, setRole] = useState<"Admin" | "User" | null>(null);

  useEffect(() => {
    setRole("Admin");
  }, []);

  const contextValue: RoleContextType = { role, setRole };

  return (
    <RoleContext.Provider value={contextValue}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/emp"
              element={
                <ProtectedRoute allowedRoles={["Admin"]}>
                  <Emp />
                </ProtectedRoute>
              }
            />
            <Route
              path="/emp/add"
              element={
                <ProtectedRoute allowedRoles={["Admin"]}>
                  <AddEmployee />
                </ProtectedRoute>
              }
            />
            <Route
              path="/emp/edit/:id"
              element={
                <ProtectedRoute allowedRoles={["Admin"]}>
                  <EditEmployee />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dept"
              element={
                <ProtectedRoute allowedRoles={["Admin", "User"]}>
                  <Dept />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </RoleContext.Provider>
  );
};

export default App;

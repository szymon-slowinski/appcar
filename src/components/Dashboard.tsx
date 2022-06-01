import {Layout} from "../features/Layout";
import PrivateRoute from "./PrivateRoute";

export default function Dashboard() {
      return (
  <PrivateRoute>
  <Layout/>        
  </PrivateRoute>
  );
}

import { ProtectedRoute } from "@/components/ProtectedRoute";
import { useLocalSearchParams } from "expo-router";

const UserPage = () => {
  const { id } = useLocalSearchParams();
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default function User() {
  return (
    <ProtectedRoute>
      <UserPage />
    </ProtectedRoute>
  );
}

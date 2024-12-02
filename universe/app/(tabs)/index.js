import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function RedirectToFind() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the "find" tab
    router.replace("/(tabs)/find"); // Ensure the route matches the correct structure
  }, []);

  return null; // No UI for this redirection page
}

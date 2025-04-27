import useTokenRefresher from "@/utils/hooks/useTokenRefresher";
import { redirect } from "next/navigation";

export default function Home() {
  useTokenRefresher();

  redirect("/blog");
}

import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();

  return (
    <div>
      {router.query.user === "ahmed" ? (
        <p>invalid page</p>
      ) : (
        <p> this is {router.query.user}</p>
      )}
    </div>
  );
}

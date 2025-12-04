export const generateOgImageUrl = ({
  title,
  type,
  mode = "light",
}: {
  title: string;
  type: string;
  mode?: "light" | "dark";
}) => {
  const url = process.env.NEXT_PUBLIC_APP_URL
    ? `https://${process.env.NEXT_PUBLIC_APP_URL}`
    : "http://localhost:3000";

  const ogUrl = new URL(`${url}/api/og`);
  ogUrl.searchParams.set("heading", title);
  ogUrl.searchParams.set("type", type);
  ogUrl.searchParams.set("mode", mode);

  return ogUrl.toString();
};

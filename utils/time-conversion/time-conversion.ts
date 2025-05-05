export default function convertToJakartaTime(isoString: string) {
  const date = new Date(isoString);

  // Convert to Jakarta Time (UTC+7)
  const jakartaTime = new Date(date.getTime());

  // Format manually
  const day = jakartaTime.getDate();
  const month = jakartaTime.toLocaleString("en-US", { month: "long" });
  const year = jakartaTime.getFullYear();
  let hours = jakartaTime.getHours();
  const minutes = jakartaTime.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12; // Convert 24-hour to 12-hour format

  return `${day} ${month} ${year} - ${hours}:${minutes} ${ampm}`;
}

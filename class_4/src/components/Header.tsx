import HeaderIcon from "./HeaderIcon";

export default function Header() {
  return (
    <nav className="sticky top-0 bg-white px-6 border border-red-400 h-20 flex justify-between flex-row items-center uppercase">
      <div className="flex items-center">
        <HeaderIcon /> <span>Pricing</span>
      </div>

      <a href="#">Sign Up</a>
    </nav>
  );
}

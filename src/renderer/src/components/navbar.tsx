import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="z-10 px-4 mb-6">
      <nav className="flex item-center gap-6 text-3xl text-neutral-500 tracking-wide lowercase">
        <Link
          to="/"
          className="text-neutral-400"
        >
          practice
        </Link>
        <Link
          to="/online"
          className="text-neutral-400"
        >
          online
        </Link>
      </nav>
    </div>
  );
}
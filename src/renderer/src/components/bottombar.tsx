import { Link } from "react-router-dom";

export default function BottomBar() {
  return (
    <div className="z-10 px-4 h-12">
      <nav className="h-12 flex items-center justify-between gap-4">
        <Link
          to="/"
          className="text-neutral-400"
        >
          add a path
        </Link>
        <Link
          to="/"
          className="text-neutral-400"
        >
          manage mods
        </Link>
        <Link
          to="/"
          className="text-neutral-400"
        >
          discord
        </Link>
      </nav>
    </div>
  );
}
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="font-bold tracking-tighter text-3xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
    >
      Stoxon
    </Link>
  );
};

export default Logo;

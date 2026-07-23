import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex-1 flex items-center justify-center bg-cream px-5 py-16">
      <div className="text-center max-w-md">
        <p className="font-display font-bold text-8xl text-primary mb-6">404</p>
        <h1 className="font-display font-bold text-3xl text-ink mb-4">Page not found</h1>
        <p className="text-slate-600 leading-relaxed mb-9">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary hover:bg-primary-dark text-white rounded-2xl font-semibold shadow-lg shadow-primary/25 transition-colors no-underline"
        >
          <ArrowLeft size={18} /> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

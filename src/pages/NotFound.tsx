
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full px-4 py-16 text-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-9xl font-bold text-primary">404</h1>
          <h2 className="text-2xl font-medium text-gray-900">Page not found</h2>
          <p className="text-gray-600">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="/"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-medium hover:brightness-110 transition-all"
            >
              <Home className="h-4 w-4" />
              <span>Back to home</span>
            </a>
            <button
              onClick={() => window.history.back()}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-gray-700 font-medium border border-gray-200 hover:bg-gray-50 transition-all"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Go back</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

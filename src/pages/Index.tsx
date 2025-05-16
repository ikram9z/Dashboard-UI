import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 px-4">
      <div className="text-center space-y-4 sm:space-y-6 max-w-full">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
          Welcome to the Dashboard Demo
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-xs sm:max-w-sm md:max-w-md mx-auto">
          This demo showcases a responsive admin dashboard built with React and
          Shadcn UI components.
        </p>
        <Button asChild size="lg" className="mt-2 sm:mt-4 w-full sm:w-auto">
          <Link to="/dashboard">View Dashboard</Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;

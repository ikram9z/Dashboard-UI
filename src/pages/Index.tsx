import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-slate-800">
          Welcome to the Dashboard Demo
        </h1>
        <p className="text-slate-600 max-w-md mx-auto">
          This demo showcases a responsive admin dashboard built with React and
          Shadcn UI components.
        </p>
        <Button asChild size="lg" className="mt-4">
          <Link to="/dashboard">View Dashboard</Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;

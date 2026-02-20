import { useNavigate } from "react-router-dom";
import ImageCarousel from "@/components/ui/ImageCarousel";

const images = [
  "/gallery/activities/a1.jpg",
  "/gallery/activities/a2.jpg",
  "/gallery/activities/a3.jpg",
  "/gallery/activities/a4.jpg",
  "/gallery/activities/a5.jpg",
];

export default function StudentActivities() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-6">

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center mb-1">
       Student Activities
      </h1>

      {/* Navigation buttons JUST ABOVE carousel */}
      <div className="flex justify-between items-center mb-4 max-w-[1000px] mx-auto">
        <button
          onClick={() => navigate("/Certifications")}
          className="px-4 py-2 rounded-lg border hover:bg-muted"
        >
          ← Previous
        </button>

        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 rounded-lg bg-secondary text-white"
        >
          Back to Home
        </button>
      </div>

      {/* Carousel */}
      <ImageCarousel images={images} />
    </div>
  );
}

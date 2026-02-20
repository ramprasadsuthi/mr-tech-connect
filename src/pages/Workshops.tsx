import { useNavigate } from "react-router-dom";
import ImageCarousel from "@/components/ui/ImageCarousel";

const images = [
  "/gallery/workshops/w1.jpg",
  "/gallery/workshops/w2.jpg",
];

export default function Workshops() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-6">

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center mb-4">
        Workshops
      </h1>

      {/* Navigation Row */}
      <div className="grid grid-cols-3 items-center mb-4 max-w-[1000px] mx-auto">
        
        {/* Previous */}
        <div className="flex justify-start">
          <button
            onClick={() => navigate("/TrainingSessions")}
            className="px-4 py-2 rounded-lg border hover:bg-muted"
          >
            ← Previous
          </button>
        </div>

        {/* Back to Home (CENTER) */}
        <div className="flex justify-center">
          <button
            onClick={() => navigate("/")}
            className="px-5 py-2 rounded-lg bg-secondary text-white hover:opacity-90"
          >
            Back to Home
          </button>
        </div>

        {/* Next */}
        <div className="flex justify-end">
          <button
            onClick={() => navigate("/Certifications")}
            className="px-4 py-2 rounded-lg bg-primary text-white"
          >
            Next →
          </button>
        </div>

      </div>

      {/* Carousel */}
      <ImageCarousel images={images} />
    </div>
  );
}
import { useNavigate } from "react-router-dom";
import ImageCarousel from "@/components/ui/ImageCarousel";

const images = [
  "/gallery/certifications/c1.jpg",
  "/gallery/certifications/c2.jpg",
];

export default function Certifications() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-6">

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center mb-4">
        Our Team
      </h1>

      {/* Navigation Row (Previous | Back to Home | Next) */}
      <div className="grid grid-cols-3 items-center mb-4 max-w-[1000px] mx-auto">

        {/* Previous */}
        <div className="flex justify-start">
          <button
            onClick={() => navigate("/Workshops")}
            className="px-4 py-2 rounded-lg border hover:bg-muted"
          >
            ← Previous
          </button>
        </div>

        {/* Back to Home (Center) */}
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
            onClick={() => navigate("/StudentActivities")}
            className="px-4 py-2 rounded-lg bg-primary text-white"
          >
            Next →
          </button>
        </div>

      </div>

      {/* Image Carousel */}
      <ImageCarousel images={images} />
    </div>
  );
}
import { useNavigate } from "react-router-dom";
import ImageCarousel from "@/components/ui/ImageCarousel";

const images = [
  "/gallery/training/t1.jpg",
  "/gallery/training/t2.jpg",
  "/gallery/training/t3.jpg",
  "/gallery/training/t4.jpg",
];

export default function TrainingSessions() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-5 py-3">
      
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center mb-5">
        Training Sessions
      </h1>

      {/* Navigation Buttons ABOVE carousel */}
      <div className="flex justify-between items-center mb-4 max-w-[1000px] mx-auto">
        <button
          onClick={() => navigate("/")}
          className="
            px-4 py-2 rounded-lg
            bg-muted text-foreground
            hover:bg-muted/80 transition
          "
        >
          ← Back to Home
        </button>

        <button
          onClick={() => navigate("/workshops")}
          className="
            px-4 py-2 rounded-lg
            bg-primary text-white
          "
        >
          Next →
        </button>
      </div>

      {/* Carousel */}
      <ImageCarousel images={images} />
    </div>
  );
}

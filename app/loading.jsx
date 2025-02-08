import SkeletonLoader from "@/components/SkeletonLoader";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <SkeletonLoader />
    </div>
  );
}

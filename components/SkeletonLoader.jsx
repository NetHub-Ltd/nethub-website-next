// components/SkeletonLoader.js
export default function SkeletonLoader() {
  return (
    <div className="space-y-4 p-4">
      {/* Skeleton for title */}
      <div className="h-6 w-1/2 bg-gray-300 rounded animate-pulse"></div>
      {/* Skeleton for content */}
      <div className="h-4 w-full bg-gray-300 rounded animate-pulse"></div>
      <div className="h-4 w-full bg-gray-300 rounded animate-pulse"></div>
      <div className="h-4 w-3/4 bg-gray-300 rounded animate-pulse"></div>
    </div>
  );
}

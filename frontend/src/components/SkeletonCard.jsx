export default function SkeletonCard() {
  return (
    <div className="w-56 h-72 bg-gray-200 animate-pulse rounded-xl overflow-hidden">
      <div className="h-40 bg-gray-300" />
      <div className="p-4 space-y-2">
        <div className="h-4 bg-gray-300 rounded w-3/4" />
        <div className="h-3 bg-gray-300 rounded w-1/2" />
      </div>
    </div>
  );
}

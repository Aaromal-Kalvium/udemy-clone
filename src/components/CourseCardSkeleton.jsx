const CourseCardSkeleton = () => (
  <div className="min-w-[240px] animate-pulse">
    <div className="aspect-video bg-muted" />
    <div className="pt-2 space-y-2">
      <div className="h-4 bg-muted rounded w-full" />
      <div className="h-4 bg-muted rounded w-3/4" />
      <div className="h-3 bg-muted rounded w-1/2" />
      <div className="h-3 bg-muted rounded w-1/3" />
      <div className="h-5 bg-muted rounded w-1/4" />
    </div>
  </div>
);

export default CourseCardSkeleton;


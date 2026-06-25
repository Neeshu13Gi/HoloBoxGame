/**
 * 2D collision utilities for swipe-vs-circle intersection tests.
 */

/** Distance from point (px, py) to line segment (x1,y1)-(x2,y2). */
export function pointToSegmentDistance(px, py, x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const lenSq = dx * dx + dy * dy;
  if (lenSq === 0) return Math.hypot(px - x1, py - y1);

  let t = ((px - x1) * dx + (py - y1) * dy) / lenSq;
  t = Math.max(0, Math.min(1, t));
  const cx = x1 + t * dx;
  const cy = y1 + t * dy;
  return Math.hypot(px - cx, py - cy);
}

/** True if swipe segment intersects a circle within its radius. */
export function segmentHitsCircle(seg, cx, cy, radius) {
  return pointToSegmentDistance(cx, cy, seg.x1, seg.y1, seg.x2, seg.y2) <= radius;
}

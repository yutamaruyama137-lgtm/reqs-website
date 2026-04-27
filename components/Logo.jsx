// REQS Logo glyph — simplified geometric pattern matching the brand mark
// Uses the same triangular grid as the original logo
window.LogoGlyph = function LogoGlyph({ size = 40, color = "currentColor", inverted = false }) {
  // 7 triangle pairs forming the diamond row pattern
  const u = size / 7; // unit width per triangle column
  const h = (u * Math.sqrt(3)) / 2;

  const triangles = [];
  // Top row of upward triangles
  for (let i = 0; i < 7; i++) {
    triangles.push(
      <polygon key={`up-${i}`}
        points={`${i*u},${h} ${(i+0.5)*u},0 ${(i+1)*u},${h}`}
        fill={color} />
    );
  }
  // Middle row downward triangles
  for (let i = 0; i < 6; i++) {
    triangles.push(
      <polygon key={`dn-${i}`}
        points={`${(i+0.5)*u},0 ${(i+1.5)*u},0 ${(i+1)*u},${h}`}
        fill="none" stroke={color} strokeWidth="0.5" />
    );
  }
  // Bottom row downward
  for (let i = 0; i < 5; i++) {
    triangles.push(
      <polygon key={`bdn-${i}`}
        points={`${(i+1)*u},${h} ${(i+2)*u},${h} ${(i+1.5)*u},${2*h}`}
        fill={color} />
    );
  }

  return (
    <svg width={size} height={2*h} viewBox={`0 0 ${7*u} ${2*h}`} style={{ display: 'block' }}>
      {triangles}
    </svg>
  );
};

// Bigger pattern, used as decorative motif
window.LogoMotif = function LogoMotif({ width = 600, color = "currentColor", opacity = 1 }) {
  const cols = 14; // double width for motif
  const u = width / cols;
  const h = (u * Math.sqrt(3)) / 2;
  const tris = [];
  for (let row = 0; row < 3; row++) {
    for (let i = 0; i < cols; i++) {
      const flip = (i + row) % 2 === 0;
      const fillProb = ((i * 13 + row * 7) % 11) > 4 ? color : 'none';
      const x0 = i * u / 2;
      const y0 = row * h;
      const points = flip
        ? `${x0},${y0+h} ${x0+u/2},${y0} ${x0+u},${y0+h}`
        : `${x0},${y0} ${x0+u/2},${y0+h} ${x0+u},${y0}`;
      tris.push(
        <polygon key={`${row}-${i}`}
          points={points}
          fill={fillProb}
          stroke={color}
          strokeWidth="0.4" />
      );
    }
  }
  return (
    <svg width={width} viewBox={`0 0 ${width/2 + u/2} ${3*h}`} style={{ display: 'block', opacity }}>
      {tris}
    </svg>
  );
};

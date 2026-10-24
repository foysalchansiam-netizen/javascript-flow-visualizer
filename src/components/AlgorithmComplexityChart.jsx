const INPUT_SIZES = [2, 4, 8, 16, 32, 64, 128];
const SERIES = [
  { key: 'best', label: 'Best case', color: '#16803c', dash: '' },
  { key: 'average', label: 'Average case', color: '#c58b00', dash: '8 5' },
  { key: 'worst', label: 'Worst case', color: '#dc2626', dash: '2 4' },
  { key: 'space', label: 'Space', color: '#000000', dash: '10 4 2 4' },
];

function log2Factorial(n) {
  let result = 0;

  for (let value = 2; value <= n; value += 1) {
    result += Math.log2(value);
  }

  return result;
}

function log2Growth(kind, n) {
  const logN = Math.log2(n);

  switch (kind) {
    case 'constant':
      return 0;
    case 'logarithmic':
      return Math.log2(logN);
    case 'linear':
      return logN;
    case 'linearithmic':
      return logN + Math.log2(logN);
    case 'n-log-squared':
      return logN + 2 * Math.log2(logN);
    case 'n-to-1.5':
      return 1.5 * logN;
    case 'square-root':
      return 0.5 * logN;
    case 'quadratic':
      return 2 * logN;
    case 'cubic':
      return 3 * logN;
    case 'exponential':
      return n;
    case 'factorial':
      return log2Factorial(n);
    case 'n-factorial':
      return logN + log2Factorial(n);
    case 'quadratic-logarithmic':
      return 2 * logN + Math.log2(logN);
    default:
      return null;
  }
}

export default function AlgorithmComplexityChart({ algorithm }) {
  const complexity = algorithm.complexity;

  if (!complexity) {
    return null;
  }

  const chart = { left: 48, right: 580, top: 20, bottom: 220 };
  const pointsBySeries = SERIES.map((series) => {
    const detail = complexity[series.key];
    if (!detail?.growth) {
      return { ...series, detail, points: [] };
    }

    return {
      ...series,
      detail,
      points: INPUT_SIZES.map((n, index) => {
        const value = log2Growth(detail.growth, n);
        if (value === null) {
          return null;
        }

        return {
          x: chart.left + (index / (INPUT_SIZES.length - 1)) * (chart.right - chart.left),
          value,
        };
      }).filter(Boolean),
    };
  });

  const maxValue = Math.max(
    1,
    ...pointsBySeries.flatMap(({ points }) => points.map(({ value }) => value)),
  );
  const yFor = (value) =>
    chart.bottom - (value / maxValue) * (chart.bottom - chart.top);

  return (
    <section className="mt-10 rounded-2xl bg-[#eef2e9] p-4 text-[#172018] shadow-lg sm:p-6">
      <div className="mb-4">
        <h2 className="text-xl font-bold sm:text-2xl">Complexity analysis</h2>
        <p className="mt-1 text-sm text-[#536052]">
          Big-O growth comparison on a logarithmic scale
        </p>
      </div>

      <div className="overflow-x-auto">
        <svg
          viewBox="0 0 610 270"
          role="img"
          aria-label={`${algorithm.name} time and space complexity growth graph`}
          className="h-auto min-w-[520px] w-full"
        >
          {[0, 0.25, 0.5, 0.75, 1].map((fraction) => {
            const y = chart.bottom - fraction * (chart.bottom - chart.top);
            return (
              <g key={fraction}>
                <line
                  x1={chart.left}
                  x2={chart.right}
                  y1={y}
                  y2={y}
                  stroke="#cbd4c8"
                  strokeWidth="1"
                />
                <text
                  x={chart.left - 9}
                  y={y + 4}
                  textAnchor="end"
                  fill="#536052"
                  fontSize="10"
                >
                  {Math.round(maxValue * fraction)}
                </text>
              </g>
            );
          })}

          {INPUT_SIZES.map((n, index) => {
            const x =
              chart.left +
              (index / (INPUT_SIZES.length - 1)) * (chart.right - chart.left);
            return (
              <g key={n}>
                <line
                  x1={x}
                  x2={x}
                  y1={chart.top}
                  y2={chart.bottom}
                  stroke="#dce3da"
                  strokeWidth="1"
                />
                <text
                  x={x}
                  y={chart.bottom + 18}
                  textAnchor="middle"
                  fill="#536052"
                  fontSize="10"
                >
                  {n}
                </text>
              </g>
            );
          })}

          {pointsBySeries.map(({ key, color, dash, detail, points }) => {
            if (!detail || points.length < 2) {
              return null;
            }

            return (
              <g key={key}>
                <polyline
                  points={points
                    .map(({ x, value }) => `${x},${yFor(value)}`)
                    .join(' ')}
                  fill="none"
                  stroke={color}
                  strokeWidth="3"
                  strokeDasharray={dash || undefined}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {points.map(({ x, value }, index) => (
                  <circle
                    key={`${key}-${index}`}
                    cx={x}
                    cy={yFor(value)}
                    r="3"
                    fill={color}
                  />
                ))}
              </g>
            );
          })}

          <text
            x={(chart.left + chart.right) / 2}
            y="260"
            textAnchor="middle"
            fill="#344034"
            fontSize="11"
          >
            Input size (n, log scale)
          </text>
          <text
            x="13"
            y={(chart.top + chart.bottom) / 2}
            textAnchor="middle"
            fill="#344034"
            fontSize="11"
            transform={`rotate(-90 13 ${(chart.top + chart.bottom) / 2})`}
          >
            log2 growth
          </text>
        </svg>
      </div>

      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {pointsBySeries.map(({ key, label, color, dash, detail }) =>
          detail ? (
            <li key={key} className="flex items-center gap-2 text-sm">
              <span
                aria-hidden="true"
                className="w-7 shrink-0 border-t-[3px]"
                style={{ borderColor: color, borderStyle: dash ? 'dashed' : 'solid' }}
              />
              <span className="font-semibold">{label}:</span>
              <span>{detail.notation}</span>
            </li>
          ) : null,
        )}
      </ul>

      {complexity.note && (
        <p className="mt-4 text-xs leading-relaxed text-[#536052]">
          {complexity.note}
        </p>
      )}
    </section>
  );
}

import * as js2flowchart from 'js2flowchart';

/**
 * Universally converts JavaScript code into an SVG flowchart.
 * Handles template literal code block wrapping automatically.
 */
export function convertCodeToFlowchartSvg(code) {
  if (!code || !code.trim()) {
    return { svg: null, error: null };
  }

  let cleanedCode = code.trim();

  // Unwrap code if wrapped in template literal variable assignments e.g. const code = `...`
  const match = cleanedCode.match(/^(?:const|let|var)\s+\w+\s*=\s*`([\s\S]*?)`;?$/);
  if (match && match[1]) {
    cleanedCode = match[1];
  }

  try {
    const svg = js2flowchart.convertCodeToSvg(cleanedCode);
    return { svg, error: null };
  } catch (err) {
    return { svg: null, error: err.message || 'Syntax error or invalid JavaScript code.' };
  }
}
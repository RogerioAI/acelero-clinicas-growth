// Loader hook to stub static asset imports (.jpg, .png, .webp, .svg, .jpeg, .gif)
// so scripts can import .ts files that import images.
const ASSET = /\.(jpe?g|png|webp|svg|gif|avif)$/i;

export async function resolve(specifier, context, nextResolve) {
  if (ASSET.test(specifier)) {
    return { url: "data:text/javascript,export default ''", shortCircuit: true };
  }
  return nextResolve(specifier, context);
}

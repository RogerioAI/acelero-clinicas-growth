// Loader hook: stub asset imports (.jpg, .png, .webp, .svg, .jpeg, .gif, .avif)
// so scripts can import .ts modules that import images.
const ASSET = /\.(jpe?g|png|webp|svg|gif|avif)(\?.*)?$/i;

export async function resolve(specifier, context, nextResolve) {
  if (ASSET.test(specifier)) {
    return {
      url: "file://" + (specifier.startsWith("/") ? specifier : "/__asset__"),
      format: "asset-stub",
      shortCircuit: true,
    };
  }
  return nextResolve(specifier, context);
}

export async function load(url, context, nextLoad) {
  if (context.format === "asset-stub") {
    return {
      format: "module",
      source: "export default '';",
      shortCircuit: true,
    };
  }
  return nextLoad(url, context);
}

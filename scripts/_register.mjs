import { register } from "node:module";
import { pathToFileURL } from "node:url";
register("./_asset-loader.mjs", pathToFileURL(import.meta.url));

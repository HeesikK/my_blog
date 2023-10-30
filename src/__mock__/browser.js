import { setupWorker } from "msw/browser";
import * as PostApi from "./apis/post";

const handler = [...Object.values(PostApi)];

export const worker = setupWorker(...handler);

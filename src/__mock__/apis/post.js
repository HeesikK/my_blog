import { http, HttpResponse } from "msw";

export const getPost = http.get("api/posts", () => {
  return HttpResponse.json(
    [
      {
        title: "첫 번째 게시물",
        content: "첫 번째 게시물입니다",
      },
      { title: "두 번째 게시물", content: "두 번째 게시물입니다" },
      { title: "세 번째 게시물", content: "세 번째 게시물입니다" },
    ],
    { status: 200 }
  );
});

import { Post } from "#site/content";

export function sortPosts(posts: Array<Post>) {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function isWithinOneWeek(postDate: string) {
  const now = new Date();
  const post = new Date(postDate);
  const oneWeekAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);
  return post >= oneWeekAgo;
}

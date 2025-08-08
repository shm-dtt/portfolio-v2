import { Post } from "#site/content";

export function sortPosts(posts: Array<Post>) {
    return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
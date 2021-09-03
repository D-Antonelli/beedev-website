import { Post } from './Post';

interface Node {
    node: PostWithExtension;
}

interface PostWithExtension extends Post {
    id: string;
    commentCount: string;
}

export interface TrendingListType {
    posts: Node[];
}
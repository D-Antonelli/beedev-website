import { Post } from './Post';

interface Image {
    altText?: string;
    mediaItemUrl?: string;
}

interface ImageNode {
    node?: Image;
}

interface PostWithExtension extends Post {
    id: string;
    featuredImage?: ImageNode;
}

interface Node {
    node: PostWithExtension;
}

export type GridType = {
    posts: Node[];
    blogPage?: boolean;
};
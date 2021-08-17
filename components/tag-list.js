import Tag from './tag';

const TagList = ({ list }) =>
  list.map((tag, index) => <Tag key={index.toString()} name={tag} />);

export default TagList;

import Tag from './tag';

type PropsType = {
  list: string[];
}

const TagList = ({ list }: PropsType): any => (
  list?.map((tag, index) => <Tag key={index.toString()} name={tag} />)
)
  

export default TagList;

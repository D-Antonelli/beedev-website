import React from 'react';
import Tag from './tag';

const TagList = ({ list }): JSX.Element =>
  list?.map((tag: string, index: number) => (
    <Tag key={index.toString()} name={tag} />
  ));

export default TagList;

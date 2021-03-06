import React from 'react';
import { sortBy } from 'lodash';

import CardBlock from './CardBlock';
import { Item } from '../../types/item';
import { byMonth } from '../../lib/filters';
import Block from '../Block';

interface Props {
  items: Item[];
  month: string;
  onItemClick: (i: Item) => void;
}

export default class Grid extends React.PureComponent<Props> {
  render() {
    const items = sortBy(
      byMonth(this.props.items, this.props.month),
      x => x.name
    );

    return (
      <Block
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        padding={20}
        marginVertical={20}
      >
        {items.map(i => (
          <CardBlock key={i.name} item={i} onClick={this.props.onItemClick} />
        ))}
      </Block>
    );
  }
}

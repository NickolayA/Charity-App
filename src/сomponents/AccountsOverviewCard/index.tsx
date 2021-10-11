import React, {useRef} from 'react';
import {View, Text} from 'react-native';
import {Divider} from 'react-native-elements';
import {CardWrapper} from '../CardWrapper';
import {CardRow, CardRowProps} from '../CardRow';
import {CardHeader, CardHeaderProps} from './CardHeader';

export type AccountsOverviewCardProps = CardHeaderProps & {
  cashes: Array<CardRowProps>;
};

export const AccountsOverviewCard: React.FC<AccountsOverviewCardProps> =
  React.forwardRef(({title, subtitle, amount, cashes}, ref) => {
    const cachesArrLength = cashes.length;

    return (
      <CardWrapper ref={el => ref.current.push(el)}>
        <CardHeader title={title} amount={amount} subtitle={subtitle} />

        {cashes.map((cash, index) => {
          return (
            <View>
              <CardRow {...cash} key={index + cash.title} />
              {cachesArrLength - 1 !== index && <Divider />}
            </View>
          );
        })}
      </CardWrapper>
    );
  });

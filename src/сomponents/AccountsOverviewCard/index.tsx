import React from 'react';
import {ImageSourcePropType} from 'react-native';
import {Divider} from 'react-native-elements';
import {CardWrapper} from '../CardWrapper';
import {CardRow} from './CardRow';

import HeartIcon from '../../assets/images/heart.png';
import {CardHeader} from './CardHeader';

interface AccountsOverviewCardProps {
  navigation?: any;
}

export const AccountsOverviewCard: React.FC<AccountsOverviewCardProps> = ({
  navigation,
}) => {
  const title: string = 'Checking';
  const subtitle: string = 'Main account (...0353)';
  const amount: number = 5000.2;
  const icon: ImageSourcePropType = HeartIcon;
  const action = () => navigation.navigate('Accounts');

  const cardRowData: {
    title: string;
    subtitle: string;
    amount: number;
    icon: ImageSourcePropType;
    action: () => void;
  } = {
    title,
    subtitle,
    amount,
    icon,
    action,
  };

  return (
    <CardWrapper>
      <CardHeader
        title="Accouts Overview"
        amount={7000.8}
        subtitle="Total Available cash"
      />
      <CardRow {...cardRowData} action={action} />
      <Divider />
      <CardRow {...cardRowData} />
      <Divider />
      <CardRow {...cardRowData} />
    </CardWrapper>
  );
};

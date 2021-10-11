import React, {useImperativeHandle, useRef} from 'react';
import {Text} from 'react-native';
import {ScreenContainerModel} from '../../models/ScreenContainerModel';
import {HomeView} from './HomeView';
import {
  AccountsOverviewCard,
  AccountsOverviewCardProps,
} from '../../сomponents/AccountsOverviewCard';
import {GoodnessCard, GoodnessCardProps} from '../../сomponents/GoodnessCard';
import {CardSourceTypes, CardTypes, RouteNames} from '../../Constants';

import AvatarIcon from '../../assets/images/avatar.png';
import RectangleIcon from '../../assets/images/rectangle.png';
import Rectangle2Icon from '../../assets/images/rectangle2.png';
import Rectangle2Video from '../../assets/videos/matrica-4-voskreshenie-russkiy-treyler-1.mp4';

export const HomeContainer: React.FC<ScreenContainerModel> = ({navigation}) => {
  const testData: {userFirstName: string} & {
    cards: Array<
      (AccountsOverviewCardProps | GoodnessCardProps) & {type: CardTypes}
    >;
  } = {
    userFirstName: 'Danny',
    cards: [
      {
        type: CardTypes.AccountsOverviewCard,
        title: 'Accounts Overview',
        subtitle: 'Total Available cash',
        get amount() {
          return this.cashes
            .map(cash => cash.amount)
            .reduce((acc, nextAmount) => acc + nextAmount);
        },
        cashes: [
          {
            title: 'Checking',
            subtitle: 'Main account (...0353)',
            amount: 1500.2,
            action: () => navigation.navigate(RouteNames.Accounts),
          },
          {
            title: 'Savings',
            subtitle: 'Buy a house (...4044)',
            amount: 5000.2,
            action: () => navigation.navigate(RouteNames.Accounts),
          },
          {
            title: 'Goodness',
            subtitle: 'Cash Rewards',
            amount: 500.4,
          },
        ],
      },
      {
        type: CardTypes.GoodnessCard,
        title: 'Your Giving Impact',
        charityName: 'St Jude',
        time: '4 hrs ago',
        avatarIcon: AvatarIcon,
        image: Rectangle2Icon,
        sourceType: CardSourceTypes.Image,
        cardDescribingText:
          'Danny, Your donation helped 5 amazing kids get much needed cancer surgery, thanks for being amazing!',
        actionButtonTitle: 'Share to spread the word',
      },
      {
        type: CardTypes.GoodnessCard,
        title: 'Your Giving Impact',
        charityName: 'St Jude',
        time: '4 hrs ago',
        avatarIcon: AvatarIcon,
        image: RectangleIcon,
        video: Rectangle2Video,
        sourceType: CardSourceTypes.Video,
        cardDescribingText:
          'Danny, Your donation helped 5 amazing kids get much needed cancer surgery, thanks for being amazing!',
        actionButtonTitle: 'Share to spread the word',
      },
    ],
  }; // TODO pretend data from redux store

  const renderFlatListItem = ({item}, ref): JSX.Element => {
    return item.type === CardTypes.AccountsOverviewCard ? (
      <AccountsOverviewCard {...(item as AccountsOverviewCardProps)} ref={ref}/>
    ) : (
      <GoodnessCard {...(item as GoodnessCardProps)} ref={ref}/>
    );
  };

  return <HomeView {...testData} renderFlatListItem={renderFlatListItem} />;
};

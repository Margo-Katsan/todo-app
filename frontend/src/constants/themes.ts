import { GiRotaryPhone } from 'react-icons/gi';
import { GiPalmTree } from 'react-icons/gi';
import { GiPumpkinLantern } from 'react-icons/gi';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineLightMode } from 'react-icons/md';
import { MdDarkMode } from 'react-icons/md';
import { RiHeartsFill } from 'react-icons/ri';

import { Theme } from '@/enums/Theme';
import { ThemeConfig } from '@/types/ThemeConfig';

export const themes: ThemeConfig[] = [
  {
    name: Theme.Light,
    icon: MdOutlineLightMode,
  },
  {
    name: Theme.Dark,
    icon: MdDarkMode,
  },
  {
    name: Theme.Retro,
    icon: GiRotaryPhone,
  },
  {
    name: Theme.Valentine,
    icon: RiHeartsFill,
  },
  {
    name: Theme.Synthwave,
    icon: GiPalmTree,
  },
  {
    name: Theme.Halloween,
    icon: GiPumpkinLantern,
  },
  {
    name: Theme.Luxury,
    icon: IoDiamond,
  },
];

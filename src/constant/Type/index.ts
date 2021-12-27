export enum MainObjectEnum {
  CHARACTER = 'character',
  SHIP = 'ship',
  ACCESSORY = 'accessory',
}

export type MainObject =
  | MainObjectEnum.CHARACTER
  | MainObjectEnum.SHIP
  | MainObjectEnum.ACCESSORY;

export enum FilterValueEnum {
  ALL = 'all',
  SALE = 'sale',
  NOTSALE = 'notSale',
}

export type FilterValue =
  | FilterValueEnum.ALL
  | FilterValueEnum.SALE
  | FilterValueEnum.NOTSALE;

export enum SortValueEnum {
  LOWEST = 'lowest',
  HIGHEST = 'highest',
  LASTEST = 'lastet',
}

export type SortValue =
  | SortValueEnum.LOWEST
  | SortValueEnum.HIGHEST
  | SortValueEnum.LASTEST;

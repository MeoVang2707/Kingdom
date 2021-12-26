export enum MainObjectEnum {
  CHARACTER = 'character',
  SHIP = 'ship',
  ACCESSORY = 'accessory',
}

export type MainObject =
  | MainObjectEnum.CHARACTER
  | MainObjectEnum.SHIP
  | MainObjectEnum.ACCESSORY;

  export enum MainObjectLabel {
    CHARACTER = 'Character',
    SHIP = 'Ship',
    ACCESSORY = 'Accessory',
  }
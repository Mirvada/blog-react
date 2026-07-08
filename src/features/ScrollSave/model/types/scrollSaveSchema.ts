// <адрес страницы, позиция скролла>
export type ScrollSchema = Record<string, number>;

export interface ScrollSaveSchema {
  scroll: OptionalRecord<string, number>;
};

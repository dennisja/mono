/**
 * The category of the todo item
 * @public
 */
export interface Category {
  id: string;
  description: string;
  title: string;
}

/**
 * The item todo
 * @public
 */
export interface TodoItem {
  id: string;
  title: string;
  description: string;
  category: Category;
}

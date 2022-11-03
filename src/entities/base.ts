export type Id = number

export interface ResponseEntityIdSchema {
  id: number
}

export interface EntitySchema<T> {
  id: T
}

export abstract class Entity<T> implements EntitySchema<T> {
  id: T
  constructor(props: EntitySchema<T> | ResponseEntityIdSchema) {
    this.id = (props as EntitySchema<T> | ResponseEntityIdSchema).id as T
  }
}

export type Optional<T> = T | undefined
export type Maybe<T> = T | null

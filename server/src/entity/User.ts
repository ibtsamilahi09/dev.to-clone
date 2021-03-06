import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany
} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Post } from "./Post";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column("text", { unique: true })
  email: string;

  @Column()
  password: string;

  @Field()
  @Column({ nullable: true, default: null })
  workPlace?: string;

  @Field()
  @Column({ nullable: true, default: null })
  about?: string;

  @Field()
  @Column({ nullable: true, default: null })
  linkedIn?: string;

  @Field()
  @Column({ nullable: true, default: null })
  github?: string;

  @Field(() => [String])
  @Column("simple-array", { nullable: true, default: null })
  tags?: string[];

  @Field()
  @Column()
  joinedDate: string;

  @Field()
  @Column({ nullable: true, default: null })
  location?: string;

  @Field()
  @Column({ nullable: true, default: null })
  isActive?: boolean;

  @Column("int", { default: 0 })
  tokenVersion: number;

  @OneToMany(() => Post, post => post.user)
  @Field(() => [Post])
  posts: Post[];
}

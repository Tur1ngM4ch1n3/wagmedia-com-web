import {
  Category,
  Emoji,
  OddJob,
  Payment,
  Post,
  Reaction,
  Tag,
  User,
} from "@prisma/client"

export type ReactionWithUser = Reaction & {
  user: User
}

export type ReactionWithUserAndEmoji = Reaction & {
  user: User
  emoji: Emoji
}

export type PostWithTagsCategoriesReactionsPaymentsUser = Post & {
  tags: Tag[]
  categories: Category[]
  reactions: ReactionWithUserAndEmoji[]
  payments: Payment[]
  user: User
}

export type PaymentFull = Payment & {
  Post: PostWithTagsCategoriesReactionsPaymentsUser
  reaction: ReactionWithUser
}

export type PaymentOddjob = Payment & {
  OddJob: OddJob
  reaction: ReactionWithUser
}

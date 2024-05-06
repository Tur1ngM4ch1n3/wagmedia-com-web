import { SVGProps } from "react"
import { StaticImageData } from "next/image"
import { Route } from "@/routers/types"
import {
  Attachment,
  Category,
  ContentEarnings,
  Embed,
  Emoji,
  OddJob,
  Payment,
  Post,
  Reaction,
  Tag,
  User,
} from "@prisma/client"

import { totalEarnings } from "../utils/totalPostEarnings"

export type ReactionWithUser = Reaction & {
  user: User
}

export type ReactionWithUserAndEmoji = Reaction & {
  user: User
  emoji: Emoji
}

export type UserWithPosts = User & {
  totalEarnings: number
  postCount: number
}

export type PostWithTagsCategoriesReactionsPaymentsUser = Post & {
  tags: Tag[]
  categories: (Category & { emoji: Emoji })[]
  reactions: ReactionWithUserAndEmoji[]
  payments: Payment[]
  embeds: Embed[]
  user: User
  earnings: ContentEarnings[]
}

export type PostWithUserAndCategories = Post & {
  user: User
  categories: Category[]
}

export type OddJobWithUser = OddJob & {
  User: User
}

export type OddJobWithUserAndManagerAndAttachments = OddJob & {
  User: User
  manager: User
  attachments: Attachment[]
}

export type OddJobWithUserAndCategories = OddJob & {
  User: User
  categories: Category[]
}

export type OddJobWithUserAndReactions = OddJob & {
  user: User
  reactions: ReactionWithUserAndEmoji[]
}

export type PostWithReactions = Post & {
  reactions: ReactionWithUserAndEmoji[]
}

export type CategoryWithCount = Category & {
  postsCount: number
}

export type TagWithCount = Tag & {
  _count: {
    posts: number
  }
}

export type PaymentWithUser = Payment & {
  user: User
}

export type PaymentFull = Payment & {
  Post: PostWithUserAndCategories | null
  reaction: ReactionWithUser | null
  user: User | null
}

export type PaymentOddjob = Payment & {
  OddJob: OddJobWithUserAndManagerAndAttachments
  reaction: ReactionWithUser
}

//  ######  CustomLink  ######## //
export interface CustomLink {
  label: string
  href: Route
  targetBlank?: boolean
}

//  ##########  PostDataType ######## //
export interface TaxonomyType {
  id: string | number
  name: string
  href: Route
  count?: number
  thumbnail?: string | StaticImageData
  desc?: string
  color?: TwMainColor | string
  taxonomy: "category" | "tag"
}

export interface PostAuthorType {
  id: string | number
  firstName: string
  lastName: string
  displayName: string
  avatar: string | StaticImageData
  bgImage?: string | StaticImageData
  email?: string
  count: number
  desc: string
  jobName: string
  href: Route
}

export interface PostDataType {
  id: string | number
  author: PostAuthorType
  date: string
  href: Route
  categories: TaxonomyType[]
  title: string
  featuredImage: string | StaticImageData
  desc?: string
  like: {
    count: number
    isLiked: boolean
  }
  bookmark: {
    count: number
    isBookmarked: boolean
  }
  commentCount: number
  viewdCount: number
  readingTime: number
  postType: "standard" | "video" | "gallery" | "audio"
  videoUrl?: string
  audioUrl?: string | string[]
  galleryImgs?: string[]
}

export type TwMainColor =
  | "pink"
  | "green"
  | "yellow"
  | "red"
  | "indigo"
  | "blue"
  | "purple"
  | "gray"

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}

export type TypePostOrder = "latest" | "reactions" | "earnings"

import { prisma } from "@/prisma/prisma"
import _ from "lodash"

export async function getAuthors() {
  console.log("authors called")
  const authors = await prisma.user.findMany({
    where: {
      posts: {
        some: {
          earnings: {
            some: {},
          },
        },
      },
    },
    select: {
      id: true,
      name: true,
      avatar: true,
      bio: true,
      discordId: true,
      posts: {
        select: {
          id: true, // Select post id for counting
          title: true,
          earnings: {
            select: {
              totalAmount: true,
              unit: true,
            },
            where: {
              unit: {
                equals: "DOT",
              },
            },
            orderBy: {
              totalAmount: "desc",
            },
          },
        },
      },
    },
    orderBy: {
      posts: {
        _count: "desc", // Order by the count of posts descending
      },
    },
  })

  return authors
    .map((author) => ({
      ...author,
      postCount: author.posts.length, // Calculate the number of posts for each author
      totalEarnings: author.posts.reduce(
        (sum, post) =>
          sum +
          post.earnings.reduce(
            (postSum, earning) => postSum + earning.totalAmount,
            0
          ),
        0
      ),
    }))
    .sort((a, b) => b.totalEarnings - a.totalEarnings) // Sort authors by total earnings in descending order
    .slice(0, 10) // Get the top 10 authors
}

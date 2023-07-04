export const labels = {
  results: 'Search Results',
  popular: 'Popular dapps',
} as const

export type labelType = (typeof labels)[keyof typeof labels]

import dayjs from 'dayjs'

export const formatUpdatedAt = (v: string) =>
  dayjs(v).format('YYYY-MM-DD HH:mm')

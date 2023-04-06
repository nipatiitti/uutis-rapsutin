// https://www.hs.fi/api/search/%20/politiikka/custom/new/50/50/1420070400000/1680739200000

type Config = {
  query: string
  section: string
  sort: string
  index: number
  pageSize: number
  from: number
  to: number
}

const defaultConfig: Config = {
  query: ' ',
  section: 'politiikka',
  sort: 'new',
  index: 0,
  pageSize: 100,
  to: 1420070400000,
  from: 1680739200000,
}

export const PAGE_SIZE = defaultConfig.pageSize

export const urlBuilder = (config: Partial<Config>) => {
  const { query, section, sort, index, pageSize, from, to } = {
    ...defaultConfig,
    ...config,
  }
  return `https://www.hs.fi/api/search/${encodeURIComponent(
    query
  )}/${section}/custom/${sort}/${index}/${pageSize}/${to}/${from}`
}

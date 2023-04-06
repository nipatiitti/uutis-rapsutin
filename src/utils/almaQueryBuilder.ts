// https://api.il.fi/v1/articles/search?q=vihre%C3%A4t&limit=20&image_sizes[]=size138

type Config = {
  q: string
  limit: number
  imageSizes: string
}

const defaultConfig: Config = {
  q: ' ',
  limit: 100,
  imageSizes: 'size1024',
}

export const urlBuilder = (config: Partial<Config>) => {
  const { q, limit, imageSizes } = {
    ...defaultConfig,
    ...config,
  }
  return `https://api.il.fi/v1/articles/search?q=${encodeURIComponent(q)}&limit=${limit}&image_sizes[]=${imageSizes}`
}

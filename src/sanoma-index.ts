import axios, { AxiosError } from 'axios'
import * as fs from 'fs/promises'
import { SanomaNewsPreview } from './types/SanomaNewsPreview.js'
import { urlBuilder } from './utils/sanomaQueryBuilder.js'

const articles: Array<SanomaNewsPreview> = []

const fetchArticles = async () => {
  const url = urlBuilder({ index: articles.length, query: 'vihre', section: 'kaikki', from: 1503741830000 })
  console.log(`Fetching ${url}`)
  const { data } = await axios.get<SanomaNewsPreview[]>(url)
  return data
}

const saveArticles = async () => {
  await fs.writeFile('articles.json', JSON.stringify(articles, null, 2))
}

// Load existing articles so we can continue from where we left off
try {
  const existingArticles = await fs.readFile('articles.json', 'utf-8')
  articles.push(...JSON.parse(existingArticles))
  console.log(`Loaded ${articles.length} articles`)
} catch (error) {
  console.log('No existing articles found')
}

while (true) {
  try {
    const newArticles = await fetchArticles()
    articles.push(...newArticles)
    await saveArticles()
    console.log(`Fetched ${articles.length} articles, Running at ${articles[articles.length - 1].displayDate}`)
  } catch (error: AxiosError | unknown) {
    if (axios.isAxiosError(error)) {
      console.log('---------- data ----------')
      console.error(error.response?.data)
      console.log('---------- error ----------')
      console.error(error)
    } else {
      console.error(error)
    }
    break
  }
}

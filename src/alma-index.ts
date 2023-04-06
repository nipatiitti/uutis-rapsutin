import axios from 'axios'
import { writeFile } from 'fs/promises'
import { AlmaNewsPreview } from './types/AlmaNewsPreview.js'
import { urlBuilder } from './utils/almaQueryBuilder.js'

const articles: Array<AlmaNewsPreview> = []

const fetchArticles = async () => {
  const url = urlBuilder({ imageSizes: 'size1024', limit: 100000, q: 'vihre' })
  const {
    data: { response },
  } = await axios.get<{ response: AlmaNewsPreview[] }>(url)
  return response
}

const newArticles = await fetchArticles()
console.log(newArticles.length)

await writeFile('articles.json', JSON.stringify(newArticles, null, 2))

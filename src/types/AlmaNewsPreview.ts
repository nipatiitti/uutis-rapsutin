/* {
    "article_id": "8f5414ea-6ca5-4040-8335-036ac948530e",
    "title": "Ohisalo kertoo pääsiäisen jälkeen jättääkö puolueen johdon: ”Pohjakosketus”",
    "headline": "Ohisalo kertoo pääsiäisen jälkeen jättääkö puolueen johdon: ”Pohjakosketus”",
    "lead": "Vihreiden puheenjohtaja Maria Ohisalo kertoo puolueen ottaneen pohjakosketuksen näissä vaaleissa. Hallitustaival on korkean kynnyksen takana, Ohisalo sanoo.",
    "service_name": "iltalehti",
    "main_image_name": "f275999fe0aa09610c48784b9b3fd51ff13554ffba6e59ad4f989cfec6f9ae97.jpg",
    "category": {
        "category_name": "politiikka",
        "description": "Politiikka",
        "is_commercial": false,
        "header": {},
        "sidecolumns": [],
        "parent_category": {
            "category_name": "uutiset",
            "description": "Uutiset",
            "is_commercial": false,
            "header": {
                "mobile": null,
                "desktop": null
            },
            "sidecolumns": [],
            "parent_category": null
        }
    },
    "published_at": "2023-04-03T14:22:25+03:00",
    "updated_at": null,
    "main_image_urls": {
        "size1024": "https://img.ilcdn.fi/Wlto5pX73n4iCBGLDqHf06cdWhA=/1024x640/top/img-s3.ilcdn.fi/f275999fe0aa09610c48784b9b3fd51ff13554ffba6e59ad4f989cfec6f9ae97.jpg"
    }
} */

export interface AlmaCategory {
  category_name: string
  description: string
  is_commercial: boolean
  header: {}
  sidecolumns: []
  parent_category: AlmaCategory | null
}

export interface AlmaNewsPreview {
  article_id: string
  title: string
  headline: string
  lead: string
  service_name: string
  main_image_name: string
  category: AlmaCategory
  published_at: string
  updated_at: null
  main_image_urls: {
    size1024: string
  }
}

export interface IItemResponse {
  name: string
  product_information: object
  brand: string
  brand_url: string
  full_description: string
  pricing: string
  list_price: string
  availability_status: string
  images: string[]
  product_category: string
  average_rating: number
  small_description: string
  total_reviews: number
  total_answered_questions: number
  seller_id: string | number
  seller_name: string
  fulfilled_by_amazon: boolean
  fast_track_message: string
  aplus_present: boolean
}

export interface ICustomizationOptions {
  Color: ICustomizationOption[]
  Style: ICustomizationOption[]
  Configuration: ICustomizationOption[]
}

export interface ICustomizationOption {
  is_selected: boolean
  url: string
  value: string
  price_string: string
  price: number
  image: string
}

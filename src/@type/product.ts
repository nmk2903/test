type product = {
    id: number,
    name: string,
    price: number,
    sale: number,
    description: string,
    category: category
    product_colors:productColor[]
    product_images:productImage[]
}

type productColor = {
    id: number,
    color: string,
    color_value: string,
    product_id: number,
    updated_at: Date,
    product_details: productDetail[],
}
 
type productDetail =    {
    id: number,
    size: string,
    in_stock: number,
    sold: number,
    product_color_id: number
}

type productImage = {
    id: number,
    product_id: number,
    url: string
}
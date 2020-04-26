export interface IProduct {
    productId: number;
    title: number;
    imageUrl: string,
    description: string;
    price: number;
    rating: number;
    isInStock: boolean;
    category: [string];
    locations: [string];
    isActive: boolean
}
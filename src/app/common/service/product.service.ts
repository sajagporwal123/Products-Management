import { Injectable } from '@angular/core';
import { IProduct } from '../model/product.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList: IProduct[];
  constructor(private localStorageService: LocalStorageService) {
    this.getAllProducts();
  }
  addProduct(product: IProduct): Promise<IProduct> {
    try {
      if (this.productList) {
        product.productId = this.productList.length + 1;
      } else {
        product.productId = 1;
      }
      this.productList.push(product);
      this.localStorageService.setItem('product', this.productList);
      return Promise.resolve(product);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  getAllProducts(): Promise<IProduct[]> {
    try {
      if (this.productList) {
        return Promise.resolve(this.productList);
      }
      this.productList = this.localStorageService.getItem('product') ? this.localStorageService.getItem('product') : [];
      return Promise.resolve(this.productList);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getProductsByStatus(isActive: IProduct['isActive']): Promise<IProduct[]> {
    try {
      const filteredList: IProduct[] = this.productList.filter((product: IProduct) => {
        return product.isActive === isActive;
      });
      return Promise.resolve(filteredList);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getProductById(productId: IProduct['productId']): Promise<IProduct> {
    try {
      const product: IProduct = this.productList.find((item: IProduct) => {
        return item.productId === productId;
      });
      if (product) {
        return Promise.resolve(product);
      } else {
        return Promise.reject('Invalid ID');
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async statusChange(productId: IProduct['productId']): Promise<IProduct> {
    try {
      const index: number = this.productList.findIndex((product: IProduct) => {
        return product.productId === productId;
      });
      if (index >= 0) {
        this.productList[index].isActive = !this.productList[index].isActive;
        this.localStorageService.setItem('product', this.productList);
        return Promise.resolve(this.productList[index]);
      } else {
        return Promise.reject('Invalid ID');
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async deleteProduct(productId: IProduct['productId']): Promise<IProduct> {
    try {
      const index: number = this.productList.findIndex((product: IProduct) => {
        return product.productId === productId;
      });
      if (index >= 0) {
        this.productList.splice(index, 1);
        this.localStorageService.setItem('product', this.productList);
        return Promise.resolve(this.productList[index]);
      } else {
        return Promise.reject('Invalid ID');
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async updateProduct(changedProduct: IProduct): Promise<IProduct> {
    try {
      const index: number = this.productList.findIndex((product: IProduct) => {
        return product.productId === changedProduct.productId;
      });
      if (index >= 0) {
        this.productList[index] = changedProduct;
        this.localStorageService.setItem('product', this.productList);
        return Promise.resolve(this.productList[index]);
      } else {
        return Promise.reject('Invalid ID');
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

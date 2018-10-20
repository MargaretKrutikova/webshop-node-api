export interface RequestProductsModel {
  readonly page: number;
  readonly itemsPerPage: number;
}

export interface QuantityMultiplier {
  readonly label: string;
  readonly multiply: number;
}

export interface Product {
  readonly articleNumber: number;
  readonly code: string;
  readonly label: string;
  readonly stockQuantity: number;
  readonly price: number;
  readonly originalPrice: number;
  readonly currency: string;
  readonly imageUrl: string;
  readonly description: string;
  readonly details: string;
  readonly brand: string;
  readonly productType: string;
  readonly eanCode: string;
  readonly rating: number;
  readonly isNew: boolean;
  readonly customerFavorites: boolean;
  readonly staffFavorites: boolean;
  readonly unitType: string;
  readonly categories: ReadonlyArray<string>;
  readonly inAssortment: boolean;
  readonly expired: boolean;
  readonly storeId: number;
  readonly relatedProducts: ReadonlyArray<number>;
  readonly replaceableProducts?: ReadonlyArray<number>;
  readonly quantityMultipliers: ReadonlyArray<QuantityMultiplier>;
}

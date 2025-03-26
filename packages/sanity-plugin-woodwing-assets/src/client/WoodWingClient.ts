import { WoodWingConfig } from "../";

export interface WoodWingAsset {
  id: string;
  name: string;
  type: string;
  size: number;
  width?: number;
  height?: number;
  thumbnailUrl?: string;
  previewUrl?: string;
  metadata: Record<string, any>;
  createdAt: string;
  updatedAt: string;
}

export interface WoodWingSearchParams {
  query?: string;
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  filters?: Record<string, any>;
}

export interface WoodWingSearchResponse {
  assets: WoodWingAsset[];
  total: number;
  page: number;
  pageSize: number;
}

export class WoodWingClient {
  private apiEndpoint: string;
  private apiKey?: string;
  private culture: string;

  constructor(config: WoodWingConfig) {
    this.apiEndpoint = config.apiEndpoint;
    this.apiKey = config.apiKey;
    this.culture = config.culture || "en-US";
  }

  private async request<T>(path: string, options: RequestInit = {}): Promise<T> {
    const headers = new Headers({
      "Content-Type": "application/json",
      "Accept-Language": this.culture,
      ...(this.apiKey && { Authorization: `Bearer ${this.apiKey}` }),
      ...options.headers,
    });

    const response = await fetch(`${this.apiEndpoint}${path}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      throw new Error(`WoodWing API error: ${response.statusText}`);
    }

    return response.json();
  }

  async search(params: WoodWingSearchParams = {}): Promise<WoodWingSearchResponse> {
    const queryParams = new URLSearchParams({
      page: String(params.page || 1),
      pageSize: String(params.pageSize || 20),
      ...(params.query && { q: params.query }),
      ...(params.sortBy && { sortBy: params.sortBy }),
      ...(params.sortOrder && { sortOrder: params.sortOrder }),
      ...(params.filters && { filters: JSON.stringify(params.filters) }),
    });

    return this.request<WoodWingSearchResponse>(`/assets/search?${queryParams}`);
  }

  async getAsset(id: string): Promise<WoodWingAsset> {
    return this.request<WoodWingAsset>(`/assets/${id}`);
  }

  async getAssetPreview(id: string, size?: string): Promise<Blob> {
    const queryParams = new URLSearchParams();
    if (size) {
      queryParams.append("size", size);
    }

    const response = await fetch(`${this.apiEndpoint}/assets/${id}/preview?${queryParams}`, {
      headers: {
        ...(this.apiKey && { Authorization: `Bearer ${this.apiKey}` }),
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to get asset preview: ${response.statusText}`);
    }

    return response.blob();
  }

  async getAssetMetadata(id: string): Promise<Record<string, any>> {
    return this.request<Record<string, any>>(`/assets/${id}/metadata`);
  }

  async updateAssetMetadata(id: string, metadata: Record<string, any>): Promise<void> {
    await this.request(`/assets/${id}/metadata`, {
      method: "PUT",
      body: JSON.stringify(metadata),
    });
  }
}

export interface Geo {
  Validate(request: GeoValidateRequest): Promise<GeoValidateResponse>;
}

export interface GeoValidateRequest {
  geofence?: any;
}

export interface GeoValidateResponse {
  success?: boolean;
}
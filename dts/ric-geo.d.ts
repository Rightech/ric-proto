export interface Geo {
  GetObjectInfo(request: GetObjectInfoRequest): Promise<GetObjectInfoResponse>;
}

export interface GetObjectInfoRequest {
  objectId?: string;
}

export interface GeoInfo {
  id?: string;
  kind?: any;
  isIn?: boolean;
  lastPacketTime?: number;
  lastEnterTime?: number;
  lastLeaveTime?: number;
  nested?: GeoInfo[];
}

export interface GetObjectInfoResponse {
  geofences?: GeoInfo[];
}
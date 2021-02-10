export interface Watch {
  GetObjectInfo(request: GetObjectInfoRequest): Promise<GetObjectInfoResponse>;
}

export interface GetObjectInfoRequest {
  objectId?: string;
}

export interface GetObjectInfoResponse {
  geofences?: ObjectGeofenceInfo[];
}

export interface ObjectGeofenceInfo {
  geofenceId?: string;
  isIn?: boolean;
  lastPacketTime?: number;
  lastEnterTime?: number;
  lastLeaveTime?: number;
}
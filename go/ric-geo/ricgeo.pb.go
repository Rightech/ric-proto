// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0-devel
// 	protoc        v3.7.0
// source: ric-geo/ricgeo.proto

package ricgeo

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type GetObjectInfoRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ObjectId string `protobuf:"bytes,1,opt,name=object_id,json=objectId,proto3" json:"object_id,omitempty"`
}

func (x *GetObjectInfoRequest) Reset() {
	*x = GetObjectInfoRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ric_geo_ricgeo_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetObjectInfoRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetObjectInfoRequest) ProtoMessage() {}

func (x *GetObjectInfoRequest) ProtoReflect() protoreflect.Message {
	mi := &file_ric_geo_ricgeo_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetObjectInfoRequest.ProtoReflect.Descriptor instead.
func (*GetObjectInfoRequest) Descriptor() ([]byte, []int) {
	return file_ric_geo_ricgeo_proto_rawDescGZIP(), []int{0}
}

func (x *GetObjectInfoRequest) GetObjectId() string {
	if x != nil {
		return x.ObjectId
	}
	return ""
}

type GetObjectInfoResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Geofences []*GetObjectInfoResponse_ObjectGeofenceInfo `protobuf:"bytes,1,rep,name=geofences,proto3" json:"geofences,omitempty"`
}

func (x *GetObjectInfoResponse) Reset() {
	*x = GetObjectInfoResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ric_geo_ricgeo_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetObjectInfoResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetObjectInfoResponse) ProtoMessage() {}

func (x *GetObjectInfoResponse) ProtoReflect() protoreflect.Message {
	mi := &file_ric_geo_ricgeo_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetObjectInfoResponse.ProtoReflect.Descriptor instead.
func (*GetObjectInfoResponse) Descriptor() ([]byte, []int) {
	return file_ric_geo_ricgeo_proto_rawDescGZIP(), []int{1}
}

func (x *GetObjectInfoResponse) GetGeofences() []*GetObjectInfoResponse_ObjectGeofenceInfo {
	if x != nil {
		return x.Geofences
	}
	return nil
}

type IndoorCircle struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	X      float64 `protobuf:"fixed64,1,opt,name=x,proto3" json:"x,omitempty"`
	Y      float64 `protobuf:"fixed64,2,opt,name=y,proto3" json:"y,omitempty"`
	Z      float64 `protobuf:"fixed64,3,opt,name=z,proto3" json:"z,omitempty"`
	Radius float64 `protobuf:"fixed64,4,opt,name=radius,proto3" json:"radius,omitempty"`
}

func (x *IndoorCircle) Reset() {
	*x = IndoorCircle{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ric_geo_ricgeo_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *IndoorCircle) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*IndoorCircle) ProtoMessage() {}

func (x *IndoorCircle) ProtoReflect() protoreflect.Message {
	mi := &file_ric_geo_ricgeo_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use IndoorCircle.ProtoReflect.Descriptor instead.
func (*IndoorCircle) Descriptor() ([]byte, []int) {
	return file_ric_geo_ricgeo_proto_rawDescGZIP(), []int{2}
}

func (x *IndoorCircle) GetX() float64 {
	if x != nil {
		return x.X
	}
	return 0
}

func (x *IndoorCircle) GetY() float64 {
	if x != nil {
		return x.Y
	}
	return 0
}

func (x *IndoorCircle) GetZ() float64 {
	if x != nil {
		return x.Z
	}
	return 0
}

func (x *IndoorCircle) GetRadius() float64 {
	if x != nil {
		return x.Radius
	}
	return 0
}

type Circle struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Lat    float64 `protobuf:"fixed64,1,opt,name=lat,proto3" json:"lat,omitempty"`
	Lon    float64 `protobuf:"fixed64,2,opt,name=lon,proto3" json:"lon,omitempty"`
	Radius float64 `protobuf:"fixed64,3,opt,name=radius,proto3" json:"radius,omitempty"`
}

func (x *Circle) Reset() {
	*x = Circle{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ric_geo_ricgeo_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Circle) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Circle) ProtoMessage() {}

func (x *Circle) ProtoReflect() protoreflect.Message {
	mi := &file_ric_geo_ricgeo_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Circle.ProtoReflect.Descriptor instead.
func (*Circle) Descriptor() ([]byte, []int) {
	return file_ric_geo_ricgeo_proto_rawDescGZIP(), []int{3}
}

func (x *Circle) GetLat() float64 {
	if x != nil {
		return x.Lat
	}
	return 0
}

func (x *Circle) GetLon() float64 {
	if x != nil {
		return x.Lon
	}
	return 0
}

func (x *Circle) GetRadius() float64 {
	if x != nil {
		return x.Radius
	}
	return 0
}

type Point struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Lat float64 `protobuf:"fixed64,1,opt,name=lat,proto3" json:"lat,omitempty"`
	Lon float64 `protobuf:"fixed64,2,opt,name=lon,proto3" json:"lon,omitempty"`
}

func (x *Point) Reset() {
	*x = Point{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ric_geo_ricgeo_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Point) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Point) ProtoMessage() {}

func (x *Point) ProtoReflect() protoreflect.Message {
	mi := &file_ric_geo_ricgeo_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Point.ProtoReflect.Descriptor instead.
func (*Point) Descriptor() ([]byte, []int) {
	return file_ric_geo_ricgeo_proto_rawDescGZIP(), []int{4}
}

func (x *Point) GetLat() float64 {
	if x != nil {
		return x.Lat
	}
	return 0
}

func (x *Point) GetLon() float64 {
	if x != nil {
		return x.Lon
	}
	return 0
}

type Zone struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Circle       *Circle       `protobuf:"bytes,1,opt,name=circle,proto3" json:"circle,omitempty"`
	IndoorCircle *IndoorCircle `protobuf:"bytes,2,opt,name=indoor_circle,json=indoorCircle,proto3" json:"indoor_circle,omitempty"`
}

func (x *Zone) Reset() {
	*x = Zone{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ric_geo_ricgeo_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Zone) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Zone) ProtoMessage() {}

func (x *Zone) ProtoReflect() protoreflect.Message {
	mi := &file_ric_geo_ricgeo_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Zone.ProtoReflect.Descriptor instead.
func (*Zone) Descriptor() ([]byte, []int) {
	return file_ric_geo_ricgeo_proto_rawDescGZIP(), []int{5}
}

func (x *Zone) GetCircle() *Circle {
	if x != nil {
		return x.Circle
	}
	return nil
}

func (x *Zone) GetIndoorCircle() *IndoorCircle {
	if x != nil {
		return x.IndoorCircle
	}
	return nil
}

type IndoorPoint struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	X float64 `protobuf:"fixed64,1,opt,name=x,proto3" json:"x,omitempty"`
	Y float64 `protobuf:"fixed64,2,opt,name=y,proto3" json:"y,omitempty"`
	Z float64 `protobuf:"fixed64,3,opt,name=z,proto3" json:"z,omitempty"`
}

func (x *IndoorPoint) Reset() {
	*x = IndoorPoint{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ric_geo_ricgeo_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *IndoorPoint) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*IndoorPoint) ProtoMessage() {}

func (x *IndoorPoint) ProtoReflect() protoreflect.Message {
	mi := &file_ric_geo_ricgeo_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use IndoorPoint.ProtoReflect.Descriptor instead.
func (*IndoorPoint) Descriptor() ([]byte, []int) {
	return file_ric_geo_ricgeo_proto_rawDescGZIP(), []int{6}
}

func (x *IndoorPoint) GetX() float64 {
	if x != nil {
		return x.X
	}
	return 0
}

func (x *IndoorPoint) GetY() float64 {
	if x != nil {
		return x.Y
	}
	return 0
}

func (x *IndoorPoint) GetZ() float64 {
	if x != nil {
		return x.Z
	}
	return 0
}

type Position struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Location       *Point       `protobuf:"bytes,1,opt,name=location,proto3" json:"location,omitempty"`
	IndoorLocation *IndoorPoint `protobuf:"bytes,2,opt,name=indoor_location,json=indoorLocation,proto3" json:"indoor_location,omitempty"`
}

func (x *Position) Reset() {
	*x = Position{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ric_geo_ricgeo_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Position) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Position) ProtoMessage() {}

func (x *Position) ProtoReflect() protoreflect.Message {
	mi := &file_ric_geo_ricgeo_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Position.ProtoReflect.Descriptor instead.
func (*Position) Descriptor() ([]byte, []int) {
	return file_ric_geo_ricgeo_proto_rawDescGZIP(), []int{7}
}

func (x *Position) GetLocation() *Point {
	if x != nil {
		return x.Location
	}
	return nil
}

func (x *Position) GetIndoorLocation() *IndoorPoint {
	if x != nil {
		return x.IndoorLocation
	}
	return nil
}

type CheckInRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Position *Position `protobuf:"bytes,1,opt,name=position,proto3" json:"position,omitempty"`
	Zone     *Zone     `protobuf:"bytes,2,opt,name=zone,proto3" json:"zone,omitempty"`
}

func (x *CheckInRequest) Reset() {
	*x = CheckInRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ric_geo_ricgeo_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CheckInRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CheckInRequest) ProtoMessage() {}

func (x *CheckInRequest) ProtoReflect() protoreflect.Message {
	mi := &file_ric_geo_ricgeo_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CheckInRequest.ProtoReflect.Descriptor instead.
func (*CheckInRequest) Descriptor() ([]byte, []int) {
	return file_ric_geo_ricgeo_proto_rawDescGZIP(), []int{8}
}

func (x *CheckInRequest) GetPosition() *Position {
	if x != nil {
		return x.Position
	}
	return nil
}

func (x *CheckInRequest) GetZone() *Zone {
	if x != nil {
		return x.Zone
	}
	return nil
}

type CheckInResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	In bool `protobuf:"varint,1,opt,name=in,proto3" json:"in,omitempty"`
}

func (x *CheckInResponse) Reset() {
	*x = CheckInResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ric_geo_ricgeo_proto_msgTypes[9]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CheckInResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CheckInResponse) ProtoMessage() {}

func (x *CheckInResponse) ProtoReflect() protoreflect.Message {
	mi := &file_ric_geo_ricgeo_proto_msgTypes[9]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CheckInResponse.ProtoReflect.Descriptor instead.
func (*CheckInResponse) Descriptor() ([]byte, []int) {
	return file_ric_geo_ricgeo_proto_rawDescGZIP(), []int{9}
}

func (x *CheckInResponse) GetIn() bool {
	if x != nil {
		return x.In
	}
	return false
}

type GetObjectInfoResponse_ObjectGeofenceInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	GeofenceId     string `protobuf:"bytes,1,opt,name=geofence_id,json=geofenceId,proto3" json:"geofence_id,omitempty"`
	IsIn           bool   `protobuf:"varint,2,opt,name=is_in,json=isIn,proto3" json:"is_in,omitempty"`
	LastPacketTime int64  `protobuf:"varint,3,opt,name=last_packet_time,json=lastPacketTime,proto3" json:"last_packet_time,omitempty"`
	LastEnterTime  int64  `protobuf:"varint,4,opt,name=last_enter_time,json=lastEnterTime,proto3" json:"last_enter_time,omitempty"`
	LastLeaveTime  int64  `protobuf:"varint,5,opt,name=last_leave_time,json=lastLeaveTime,proto3" json:"last_leave_time,omitempty"`
}

func (x *GetObjectInfoResponse_ObjectGeofenceInfo) Reset() {
	*x = GetObjectInfoResponse_ObjectGeofenceInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ric_geo_ricgeo_proto_msgTypes[10]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetObjectInfoResponse_ObjectGeofenceInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetObjectInfoResponse_ObjectGeofenceInfo) ProtoMessage() {}

func (x *GetObjectInfoResponse_ObjectGeofenceInfo) ProtoReflect() protoreflect.Message {
	mi := &file_ric_geo_ricgeo_proto_msgTypes[10]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetObjectInfoResponse_ObjectGeofenceInfo.ProtoReflect.Descriptor instead.
func (*GetObjectInfoResponse_ObjectGeofenceInfo) Descriptor() ([]byte, []int) {
	return file_ric_geo_ricgeo_proto_rawDescGZIP(), []int{1, 0}
}

func (x *GetObjectInfoResponse_ObjectGeofenceInfo) GetGeofenceId() string {
	if x != nil {
		return x.GeofenceId
	}
	return ""
}

func (x *GetObjectInfoResponse_ObjectGeofenceInfo) GetIsIn() bool {
	if x != nil {
		return x.IsIn
	}
	return false
}

func (x *GetObjectInfoResponse_ObjectGeofenceInfo) GetLastPacketTime() int64 {
	if x != nil {
		return x.LastPacketTime
	}
	return 0
}

func (x *GetObjectInfoResponse_ObjectGeofenceInfo) GetLastEnterTime() int64 {
	if x != nil {
		return x.LastEnterTime
	}
	return 0
}

func (x *GetObjectInfoResponse_ObjectGeofenceInfo) GetLastLeaveTime() int64 {
	if x != nil {
		return x.LastLeaveTime
	}
	return 0
}

var File_ric_geo_ricgeo_proto protoreflect.FileDescriptor

var file_ric_geo_ricgeo_proto_rawDesc = []byte{
	0x0a, 0x14, 0x72, 0x69, 0x63, 0x2d, 0x67, 0x65, 0x6f, 0x2f, 0x72, 0x69, 0x63, 0x67, 0x65, 0x6f,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x07, 0x72, 0x69, 0x63, 0x2e, 0x67, 0x65, 0x6f, 0x22,
	0x33, 0x0a, 0x14, 0x47, 0x65, 0x74, 0x4f, 0x62, 0x6a, 0x65, 0x63, 0x74, 0x49, 0x6e, 0x66, 0x6f,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1b, 0x0a, 0x09, 0x6f, 0x62, 0x6a, 0x65, 0x63,
	0x74, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x6f, 0x62, 0x6a, 0x65,
	0x63, 0x74, 0x49, 0x64, 0x22, 0xaf, 0x02, 0x0a, 0x15, 0x47, 0x65, 0x74, 0x4f, 0x62, 0x6a, 0x65,
	0x63, 0x74, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x4f,
	0x0a, 0x09, 0x67, 0x65, 0x6f, 0x66, 0x65, 0x6e, 0x63, 0x65, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28,
	0x0b, 0x32, 0x31, 0x2e, 0x72, 0x69, 0x63, 0x2e, 0x67, 0x65, 0x6f, 0x2e, 0x47, 0x65, 0x74, 0x4f,
	0x62, 0x6a, 0x65, 0x63, 0x74, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x2e, 0x4f, 0x62, 0x6a, 0x65, 0x63, 0x74, 0x47, 0x65, 0x6f, 0x66, 0x65, 0x6e, 0x63, 0x65,
	0x49, 0x6e, 0x66, 0x6f, 0x52, 0x09, 0x67, 0x65, 0x6f, 0x66, 0x65, 0x6e, 0x63, 0x65, 0x73, 0x1a,
	0xc4, 0x01, 0x0a, 0x12, 0x4f, 0x62, 0x6a, 0x65, 0x63, 0x74, 0x47, 0x65, 0x6f, 0x66, 0x65, 0x6e,
	0x63, 0x65, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x1f, 0x0a, 0x0b, 0x67, 0x65, 0x6f, 0x66, 0x65, 0x6e,
	0x63, 0x65, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x67, 0x65, 0x6f,
	0x66, 0x65, 0x6e, 0x63, 0x65, 0x49, 0x64, 0x12, 0x13, 0x0a, 0x05, 0x69, 0x73, 0x5f, 0x69, 0x6e,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x08, 0x52, 0x04, 0x69, 0x73, 0x49, 0x6e, 0x12, 0x28, 0x0a, 0x10,
	0x6c, 0x61, 0x73, 0x74, 0x5f, 0x70, 0x61, 0x63, 0x6b, 0x65, 0x74, 0x5f, 0x74, 0x69, 0x6d, 0x65,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0e, 0x6c, 0x61, 0x73, 0x74, 0x50, 0x61, 0x63, 0x6b,
	0x65, 0x74, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x26, 0x0a, 0x0f, 0x6c, 0x61, 0x73, 0x74, 0x5f, 0x65,
	0x6e, 0x74, 0x65, 0x72, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x03, 0x52,
	0x0d, 0x6c, 0x61, 0x73, 0x74, 0x45, 0x6e, 0x74, 0x65, 0x72, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x26,
	0x0a, 0x0f, 0x6c, 0x61, 0x73, 0x74, 0x5f, 0x6c, 0x65, 0x61, 0x76, 0x65, 0x5f, 0x74, 0x69, 0x6d,
	0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0d, 0x6c, 0x61, 0x73, 0x74, 0x4c, 0x65, 0x61,
	0x76, 0x65, 0x54, 0x69, 0x6d, 0x65, 0x22, 0x50, 0x0a, 0x0c, 0x49, 0x6e, 0x64, 0x6f, 0x6f, 0x72,
	0x43, 0x69, 0x72, 0x63, 0x6c, 0x65, 0x12, 0x0c, 0x0a, 0x01, 0x78, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x01, 0x52, 0x01, 0x78, 0x12, 0x0c, 0x0a, 0x01, 0x79, 0x18, 0x02, 0x20, 0x01, 0x28, 0x01, 0x52,
	0x01, 0x79, 0x12, 0x0c, 0x0a, 0x01, 0x7a, 0x18, 0x03, 0x20, 0x01, 0x28, 0x01, 0x52, 0x01, 0x7a,
	0x12, 0x16, 0x0a, 0x06, 0x72, 0x61, 0x64, 0x69, 0x75, 0x73, 0x18, 0x04, 0x20, 0x01, 0x28, 0x01,
	0x52, 0x06, 0x72, 0x61, 0x64, 0x69, 0x75, 0x73, 0x22, 0x44, 0x0a, 0x06, 0x43, 0x69, 0x72, 0x63,
	0x6c, 0x65, 0x12, 0x10, 0x0a, 0x03, 0x6c, 0x61, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x01, 0x52,
	0x03, 0x6c, 0x61, 0x74, 0x12, 0x10, 0x0a, 0x03, 0x6c, 0x6f, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x01, 0x52, 0x03, 0x6c, 0x6f, 0x6e, 0x12, 0x16, 0x0a, 0x06, 0x72, 0x61, 0x64, 0x69, 0x75, 0x73,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x01, 0x52, 0x06, 0x72, 0x61, 0x64, 0x69, 0x75, 0x73, 0x22, 0x2b,
	0x0a, 0x05, 0x50, 0x6f, 0x69, 0x6e, 0x74, 0x12, 0x10, 0x0a, 0x03, 0x6c, 0x61, 0x74, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x01, 0x52, 0x03, 0x6c, 0x61, 0x74, 0x12, 0x10, 0x0a, 0x03, 0x6c, 0x6f, 0x6e,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x01, 0x52, 0x03, 0x6c, 0x6f, 0x6e, 0x22, 0x6b, 0x0a, 0x04, 0x5a,
	0x6f, 0x6e, 0x65, 0x12, 0x27, 0x0a, 0x06, 0x63, 0x69, 0x72, 0x63, 0x6c, 0x65, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x0f, 0x2e, 0x72, 0x69, 0x63, 0x2e, 0x67, 0x65, 0x6f, 0x2e, 0x43, 0x69,
	0x72, 0x63, 0x6c, 0x65, 0x52, 0x06, 0x63, 0x69, 0x72, 0x63, 0x6c, 0x65, 0x12, 0x3a, 0x0a, 0x0d,
	0x69, 0x6e, 0x64, 0x6f, 0x6f, 0x72, 0x5f, 0x63, 0x69, 0x72, 0x63, 0x6c, 0x65, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x15, 0x2e, 0x72, 0x69, 0x63, 0x2e, 0x67, 0x65, 0x6f, 0x2e, 0x49, 0x6e,
	0x64, 0x6f, 0x6f, 0x72, 0x43, 0x69, 0x72, 0x63, 0x6c, 0x65, 0x52, 0x0c, 0x69, 0x6e, 0x64, 0x6f,
	0x6f, 0x72, 0x43, 0x69, 0x72, 0x63, 0x6c, 0x65, 0x22, 0x37, 0x0a, 0x0b, 0x49, 0x6e, 0x64, 0x6f,
	0x6f, 0x72, 0x50, 0x6f, 0x69, 0x6e, 0x74, 0x12, 0x0c, 0x0a, 0x01, 0x78, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x01, 0x52, 0x01, 0x78, 0x12, 0x0c, 0x0a, 0x01, 0x79, 0x18, 0x02, 0x20, 0x01, 0x28, 0x01,
	0x52, 0x01, 0x79, 0x12, 0x0c, 0x0a, 0x01, 0x7a, 0x18, 0x03, 0x20, 0x01, 0x28, 0x01, 0x52, 0x01,
	0x7a, 0x22, 0x75, 0x0a, 0x08, 0x50, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x2a, 0x0a,
	0x08, 0x6c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x0e, 0x2e, 0x72, 0x69, 0x63, 0x2e, 0x67, 0x65, 0x6f, 0x2e, 0x50, 0x6f, 0x69, 0x6e, 0x74, 0x52,
	0x08, 0x6c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x3d, 0x0a, 0x0f, 0x69, 0x6e, 0x64,
	0x6f, 0x6f, 0x72, 0x5f, 0x6c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x14, 0x2e, 0x72, 0x69, 0x63, 0x2e, 0x67, 0x65, 0x6f, 0x2e, 0x49, 0x6e, 0x64,
	0x6f, 0x6f, 0x72, 0x50, 0x6f, 0x69, 0x6e, 0x74, 0x52, 0x0e, 0x69, 0x6e, 0x64, 0x6f, 0x6f, 0x72,
	0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x22, 0x62, 0x0a, 0x0e, 0x43, 0x68, 0x65, 0x63,
	0x6b, 0x49, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x2d, 0x0a, 0x08, 0x70, 0x6f,
	0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x11, 0x2e, 0x72,
	0x69, 0x63, 0x2e, 0x67, 0x65, 0x6f, 0x2e, 0x50, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x52,
	0x08, 0x70, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x21, 0x0a, 0x04, 0x7a, 0x6f, 0x6e,
	0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0d, 0x2e, 0x72, 0x69, 0x63, 0x2e, 0x67, 0x65,
	0x6f, 0x2e, 0x5a, 0x6f, 0x6e, 0x65, 0x52, 0x04, 0x7a, 0x6f, 0x6e, 0x65, 0x22, 0x21, 0x0a, 0x0f,
	0x43, 0x68, 0x65, 0x63, 0x6b, 0x49, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12,
	0x0e, 0x0a, 0x02, 0x69, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x08, 0x52, 0x02, 0x69, 0x6e, 0x32,
	0x57, 0x0a, 0x05, 0x57, 0x61, 0x74, 0x63, 0x68, 0x12, 0x4e, 0x0a, 0x0d, 0x47, 0x65, 0x74, 0x4f,
	0x62, 0x6a, 0x65, 0x63, 0x74, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x1d, 0x2e, 0x72, 0x69, 0x63, 0x2e,
	0x67, 0x65, 0x6f, 0x2e, 0x47, 0x65, 0x74, 0x4f, 0x62, 0x6a, 0x65, 0x63, 0x74, 0x49, 0x6e, 0x66,
	0x6f, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1e, 0x2e, 0x72, 0x69, 0x63, 0x2e, 0x67,
	0x65, 0x6f, 0x2e, 0x47, 0x65, 0x74, 0x4f, 0x62, 0x6a, 0x65, 0x63, 0x74, 0x49, 0x6e, 0x66, 0x6f,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x32, 0x45, 0x0a, 0x05, 0x43, 0x68, 0x65, 0x63,
	0x6b, 0x12, 0x3c, 0x0a, 0x07, 0x43, 0x68, 0x65, 0x63, 0x6b, 0x49, 0x6e, 0x12, 0x17, 0x2e, 0x72,
	0x69, 0x63, 0x2e, 0x67, 0x65, 0x6f, 0x2e, 0x43, 0x68, 0x65, 0x63, 0x6b, 0x49, 0x6e, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x18, 0x2e, 0x72, 0x69, 0x63, 0x2e, 0x67, 0x65, 0x6f, 0x2e,
	0x43, 0x68, 0x65, 0x63, 0x6b, 0x49, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x42,
	0x12, 0x5a, 0x10, 0x2e, 0x2f, 0x72, 0x69, 0x63, 0x2d, 0x67, 0x65, 0x6f, 0x3b, 0x72, 0x69, 0x63,
	0x67, 0x65, 0x6f, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_ric_geo_ricgeo_proto_rawDescOnce sync.Once
	file_ric_geo_ricgeo_proto_rawDescData = file_ric_geo_ricgeo_proto_rawDesc
)

func file_ric_geo_ricgeo_proto_rawDescGZIP() []byte {
	file_ric_geo_ricgeo_proto_rawDescOnce.Do(func() {
		file_ric_geo_ricgeo_proto_rawDescData = protoimpl.X.CompressGZIP(file_ric_geo_ricgeo_proto_rawDescData)
	})
	return file_ric_geo_ricgeo_proto_rawDescData
}

var file_ric_geo_ricgeo_proto_msgTypes = make([]protoimpl.MessageInfo, 11)
var file_ric_geo_ricgeo_proto_goTypes = []interface{}{
	(*GetObjectInfoRequest)(nil),  // 0: ric.geo.GetObjectInfoRequest
	(*GetObjectInfoResponse)(nil), // 1: ric.geo.GetObjectInfoResponse
	(*IndoorCircle)(nil),          // 2: ric.geo.IndoorCircle
	(*Circle)(nil),                // 3: ric.geo.Circle
	(*Point)(nil),                 // 4: ric.geo.Point
	(*Zone)(nil),                  // 5: ric.geo.Zone
	(*IndoorPoint)(nil),           // 6: ric.geo.IndoorPoint
	(*Position)(nil),              // 7: ric.geo.Position
	(*CheckInRequest)(nil),        // 8: ric.geo.CheckInRequest
	(*CheckInResponse)(nil),       // 9: ric.geo.CheckInResponse
	(*GetObjectInfoResponse_ObjectGeofenceInfo)(nil), // 10: ric.geo.GetObjectInfoResponse.ObjectGeofenceInfo
}
var file_ric_geo_ricgeo_proto_depIdxs = []int32{
	10, // 0: ric.geo.GetObjectInfoResponse.geofences:type_name -> ric.geo.GetObjectInfoResponse.ObjectGeofenceInfo
	3,  // 1: ric.geo.Zone.circle:type_name -> ric.geo.Circle
	2,  // 2: ric.geo.Zone.indoor_circle:type_name -> ric.geo.IndoorCircle
	4,  // 3: ric.geo.Position.location:type_name -> ric.geo.Point
	6,  // 4: ric.geo.Position.indoor_location:type_name -> ric.geo.IndoorPoint
	7,  // 5: ric.geo.CheckInRequest.position:type_name -> ric.geo.Position
	5,  // 6: ric.geo.CheckInRequest.zone:type_name -> ric.geo.Zone
	0,  // 7: ric.geo.Watch.GetObjectInfo:input_type -> ric.geo.GetObjectInfoRequest
	8,  // 8: ric.geo.Check.CheckIn:input_type -> ric.geo.CheckInRequest
	1,  // 9: ric.geo.Watch.GetObjectInfo:output_type -> ric.geo.GetObjectInfoResponse
	9,  // 10: ric.geo.Check.CheckIn:output_type -> ric.geo.CheckInResponse
	9,  // [9:11] is the sub-list for method output_type
	7,  // [7:9] is the sub-list for method input_type
	7,  // [7:7] is the sub-list for extension type_name
	7,  // [7:7] is the sub-list for extension extendee
	0,  // [0:7] is the sub-list for field type_name
}

func init() { file_ric_geo_ricgeo_proto_init() }
func file_ric_geo_ricgeo_proto_init() {
	if File_ric_geo_ricgeo_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_ric_geo_ricgeo_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetObjectInfoRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_ric_geo_ricgeo_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetObjectInfoResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_ric_geo_ricgeo_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*IndoorCircle); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_ric_geo_ricgeo_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Circle); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_ric_geo_ricgeo_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Point); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_ric_geo_ricgeo_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Zone); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_ric_geo_ricgeo_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*IndoorPoint); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_ric_geo_ricgeo_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Position); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_ric_geo_ricgeo_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CheckInRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_ric_geo_ricgeo_proto_msgTypes[9].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CheckInResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_ric_geo_ricgeo_proto_msgTypes[10].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetObjectInfoResponse_ObjectGeofenceInfo); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_ric_geo_ricgeo_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   11,
			NumExtensions: 0,
			NumServices:   2,
		},
		GoTypes:           file_ric_geo_ricgeo_proto_goTypes,
		DependencyIndexes: file_ric_geo_ricgeo_proto_depIdxs,
		MessageInfos:      file_ric_geo_ricgeo_proto_msgTypes,
	}.Build()
	File_ric_geo_ricgeo_proto = out.File
	file_ric_geo_ricgeo_proto_rawDesc = nil
	file_ric_geo_ricgeo_proto_goTypes = nil
	file_ric_geo_ricgeo_proto_depIdxs = nil
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConnInterface

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion6

// WatchClient is the client API for Watch service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type WatchClient interface {
	GetObjectInfo(ctx context.Context, in *GetObjectInfoRequest, opts ...grpc.CallOption) (*GetObjectInfoResponse, error)
}

type watchClient struct {
	cc grpc.ClientConnInterface
}

func NewWatchClient(cc grpc.ClientConnInterface) WatchClient {
	return &watchClient{cc}
}

func (c *watchClient) GetObjectInfo(ctx context.Context, in *GetObjectInfoRequest, opts ...grpc.CallOption) (*GetObjectInfoResponse, error) {
	out := new(GetObjectInfoResponse)
	err := c.cc.Invoke(ctx, "/ric.geo.Watch/GetObjectInfo", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// WatchServer is the server API for Watch service.
type WatchServer interface {
	GetObjectInfo(context.Context, *GetObjectInfoRequest) (*GetObjectInfoResponse, error)
}

// UnimplementedWatchServer can be embedded to have forward compatible implementations.
type UnimplementedWatchServer struct {
}

func (*UnimplementedWatchServer) GetObjectInfo(context.Context, *GetObjectInfoRequest) (*GetObjectInfoResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetObjectInfo not implemented")
}

func RegisterWatchServer(s *grpc.Server, srv WatchServer) {
	s.RegisterService(&_Watch_serviceDesc, srv)
}

func _Watch_GetObjectInfo_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetObjectInfoRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WatchServer).GetObjectInfo(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ric.geo.Watch/GetObjectInfo",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WatchServer).GetObjectInfo(ctx, req.(*GetObjectInfoRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _Watch_serviceDesc = grpc.ServiceDesc{
	ServiceName: "ric.geo.Watch",
	HandlerType: (*WatchServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetObjectInfo",
			Handler:    _Watch_GetObjectInfo_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "ric-geo/ricgeo.proto",
}

// CheckClient is the client API for Check service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type CheckClient interface {
	CheckIn(ctx context.Context, in *CheckInRequest, opts ...grpc.CallOption) (*CheckInResponse, error)
}

type checkClient struct {
	cc grpc.ClientConnInterface
}

func NewCheckClient(cc grpc.ClientConnInterface) CheckClient {
	return &checkClient{cc}
}

func (c *checkClient) CheckIn(ctx context.Context, in *CheckInRequest, opts ...grpc.CallOption) (*CheckInResponse, error) {
	out := new(CheckInResponse)
	err := c.cc.Invoke(ctx, "/ric.geo.Check/CheckIn", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// CheckServer is the server API for Check service.
type CheckServer interface {
	CheckIn(context.Context, *CheckInRequest) (*CheckInResponse, error)
}

// UnimplementedCheckServer can be embedded to have forward compatible implementations.
type UnimplementedCheckServer struct {
}

func (*UnimplementedCheckServer) CheckIn(context.Context, *CheckInRequest) (*CheckInResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CheckIn not implemented")
}

func RegisterCheckServer(s *grpc.Server, srv CheckServer) {
	s.RegisterService(&_Check_serviceDesc, srv)
}

func _Check_CheckIn_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CheckInRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CheckServer).CheckIn(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ric.geo.Check/CheckIn",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CheckServer).CheckIn(ctx, req.(*CheckInRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _Check_serviceDesc = grpc.ServiceDesc{
	ServiceName: "ric.geo.Check",
	HandlerType: (*CheckServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CheckIn",
			Handler:    _Check_CheckIn_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "ric-geo/ricgeo.proto",
}

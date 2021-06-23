// Generated by the gRPC C++ plugin.
// If you make any local change, they will be lost.
// source: ric-packet-spy/ricpacketspy.proto

#include "ric-packet-spy/ricpacketspy.pb.h"
#include "ric-packet-spy/ricpacketspy.grpc.pb.h"

#include <functional>
#include <grpcpp/impl/codegen/async_stream.h>
#include <grpcpp/impl/codegen/async_unary_call.h>
#include <grpcpp/impl/codegen/channel_interface.h>
#include <grpcpp/impl/codegen/client_unary_call.h>
#include <grpcpp/impl/codegen/client_callback.h>
#include <grpcpp/impl/codegen/method_handler_impl.h>
#include <grpcpp/impl/codegen/rpc_service_method.h>
#include <grpcpp/impl/codegen/server_callback.h>
#include <grpcpp/impl/codegen/service_type.h>
#include <grpcpp/impl/codegen/sync_stream.h>
namespace ric {
namespace packet {
namespace spy {

static const char* RicPacketSpy_method_names[] = {
  "/ric.packet.spy.RicPacketSpy/GetState",
  "/ric.packet.spy.RicPacketSpy/StartWatch",
  "/ric.packet.spy.RicPacketSpy/CancelWatch",
  "/ric.packet.spy.RicPacketSpy/CommitModel",
  "/ric.packet.spy.RicPacketSpy/WatchUpdate",
};

std::unique_ptr< RicPacketSpy::Stub> RicPacketSpy::NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options) {
  (void)options;
  std::unique_ptr< RicPacketSpy::Stub> stub(new RicPacketSpy::Stub(channel));
  return stub;
}

RicPacketSpy::Stub::Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel)
  : channel_(channel), rpcmethod_GetState_(RicPacketSpy_method_names[0], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_StartWatch_(RicPacketSpy_method_names[1], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_CancelWatch_(RicPacketSpy_method_names[2], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_CommitModel_(RicPacketSpy_method_names[3], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_WatchUpdate_(RicPacketSpy_method_names[4], ::grpc::internal::RpcMethod::SERVER_STREAMING, channel)
  {}

::grpc::Status RicPacketSpy::Stub::GetState(::grpc::ClientContext* context, const ::ric::packet::spy::GetStateRequest& request, ::ric::packet::spy::GetStateResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_GetState_, context, request, response);
}

void RicPacketSpy::Stub::experimental_async::GetState(::grpc::ClientContext* context, const ::ric::packet::spy::GetStateRequest* request, ::ric::packet::spy::GetStateResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_GetState_, context, request, response, std::move(f));
}

void RicPacketSpy::Stub::experimental_async::GetState(::grpc::ClientContext* context, const ::grpc::ByteBuffer* request, ::ric::packet::spy::GetStateResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_GetState_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::ric::packet::spy::GetStateResponse>* RicPacketSpy::Stub::AsyncGetStateRaw(::grpc::ClientContext* context, const ::ric::packet::spy::GetStateRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::ric::packet::spy::GetStateResponse>::Create(channel_.get(), cq, rpcmethod_GetState_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::ric::packet::spy::GetStateResponse>* RicPacketSpy::Stub::PrepareAsyncGetStateRaw(::grpc::ClientContext* context, const ::ric::packet::spy::GetStateRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::ric::packet::spy::GetStateResponse>::Create(channel_.get(), cq, rpcmethod_GetState_, context, request, false);
}

::grpc::Status RicPacketSpy::Stub::StartWatch(::grpc::ClientContext* context, const ::ric::packet::spy::StartWatchRequest& request, ::ric::packet::spy::StartWatchResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_StartWatch_, context, request, response);
}

void RicPacketSpy::Stub::experimental_async::StartWatch(::grpc::ClientContext* context, const ::ric::packet::spy::StartWatchRequest* request, ::ric::packet::spy::StartWatchResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_StartWatch_, context, request, response, std::move(f));
}

void RicPacketSpy::Stub::experimental_async::StartWatch(::grpc::ClientContext* context, const ::grpc::ByteBuffer* request, ::ric::packet::spy::StartWatchResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_StartWatch_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::ric::packet::spy::StartWatchResponse>* RicPacketSpy::Stub::AsyncStartWatchRaw(::grpc::ClientContext* context, const ::ric::packet::spy::StartWatchRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::ric::packet::spy::StartWatchResponse>::Create(channel_.get(), cq, rpcmethod_StartWatch_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::ric::packet::spy::StartWatchResponse>* RicPacketSpy::Stub::PrepareAsyncStartWatchRaw(::grpc::ClientContext* context, const ::ric::packet::spy::StartWatchRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::ric::packet::spy::StartWatchResponse>::Create(channel_.get(), cq, rpcmethod_StartWatch_, context, request, false);
}

::grpc::Status RicPacketSpy::Stub::CancelWatch(::grpc::ClientContext* context, const ::ric::packet::spy::CancelWatchRequest& request, ::ric::packet::spy::CancelWatchResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_CancelWatch_, context, request, response);
}

void RicPacketSpy::Stub::experimental_async::CancelWatch(::grpc::ClientContext* context, const ::ric::packet::spy::CancelWatchRequest* request, ::ric::packet::spy::CancelWatchResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_CancelWatch_, context, request, response, std::move(f));
}

void RicPacketSpy::Stub::experimental_async::CancelWatch(::grpc::ClientContext* context, const ::grpc::ByteBuffer* request, ::ric::packet::spy::CancelWatchResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_CancelWatch_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::ric::packet::spy::CancelWatchResponse>* RicPacketSpy::Stub::AsyncCancelWatchRaw(::grpc::ClientContext* context, const ::ric::packet::spy::CancelWatchRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::ric::packet::spy::CancelWatchResponse>::Create(channel_.get(), cq, rpcmethod_CancelWatch_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::ric::packet::spy::CancelWatchResponse>* RicPacketSpy::Stub::PrepareAsyncCancelWatchRaw(::grpc::ClientContext* context, const ::ric::packet::spy::CancelWatchRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::ric::packet::spy::CancelWatchResponse>::Create(channel_.get(), cq, rpcmethod_CancelWatch_, context, request, false);
}

::grpc::Status RicPacketSpy::Stub::CommitModel(::grpc::ClientContext* context, const ::ric::packet::spy::CommitModelRequest& request, ::ric::packet::spy::CommitModelResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_CommitModel_, context, request, response);
}

void RicPacketSpy::Stub::experimental_async::CommitModel(::grpc::ClientContext* context, const ::ric::packet::spy::CommitModelRequest* request, ::ric::packet::spy::CommitModelResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_CommitModel_, context, request, response, std::move(f));
}

void RicPacketSpy::Stub::experimental_async::CommitModel(::grpc::ClientContext* context, const ::grpc::ByteBuffer* request, ::ric::packet::spy::CommitModelResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_CommitModel_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::ric::packet::spy::CommitModelResponse>* RicPacketSpy::Stub::AsyncCommitModelRaw(::grpc::ClientContext* context, const ::ric::packet::spy::CommitModelRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::ric::packet::spy::CommitModelResponse>::Create(channel_.get(), cq, rpcmethod_CommitModel_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::ric::packet::spy::CommitModelResponse>* RicPacketSpy::Stub::PrepareAsyncCommitModelRaw(::grpc::ClientContext* context, const ::ric::packet::spy::CommitModelRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::ric::packet::spy::CommitModelResponse>::Create(channel_.get(), cq, rpcmethod_CommitModel_, context, request, false);
}

::grpc::ClientReader< ::ric::packet::spy::ObjectUpdate>* RicPacketSpy::Stub::WatchUpdateRaw(::grpc::ClientContext* context, const ::ric::packet::spy::WatchUpdateRequest& request) {
  return ::grpc::internal::ClientReaderFactory< ::ric::packet::spy::ObjectUpdate>::Create(channel_.get(), rpcmethod_WatchUpdate_, context, request);
}

void RicPacketSpy::Stub::experimental_async::WatchUpdate(::grpc::ClientContext* context, ::ric::packet::spy::WatchUpdateRequest* request, ::grpc::experimental::ClientReadReactor< ::ric::packet::spy::ObjectUpdate>* reactor) {
  ::grpc::internal::ClientCallbackReaderFactory< ::ric::packet::spy::ObjectUpdate>::Create(stub_->channel_.get(), stub_->rpcmethod_WatchUpdate_, context, request, reactor);
}

::grpc::ClientAsyncReader< ::ric::packet::spy::ObjectUpdate>* RicPacketSpy::Stub::AsyncWatchUpdateRaw(::grpc::ClientContext* context, const ::ric::packet::spy::WatchUpdateRequest& request, ::grpc::CompletionQueue* cq, void* tag) {
  return ::grpc::internal::ClientAsyncReaderFactory< ::ric::packet::spy::ObjectUpdate>::Create(channel_.get(), cq, rpcmethod_WatchUpdate_, context, request, true, tag);
}

::grpc::ClientAsyncReader< ::ric::packet::spy::ObjectUpdate>* RicPacketSpy::Stub::PrepareAsyncWatchUpdateRaw(::grpc::ClientContext* context, const ::ric::packet::spy::WatchUpdateRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncReaderFactory< ::ric::packet::spy::ObjectUpdate>::Create(channel_.get(), cq, rpcmethod_WatchUpdate_, context, request, false, nullptr);
}

RicPacketSpy::Service::Service() {
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      RicPacketSpy_method_names[0],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< RicPacketSpy::Service, ::ric::packet::spy::GetStateRequest, ::ric::packet::spy::GetStateResponse>(
          std::mem_fn(&RicPacketSpy::Service::GetState), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      RicPacketSpy_method_names[1],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< RicPacketSpy::Service, ::ric::packet::spy::StartWatchRequest, ::ric::packet::spy::StartWatchResponse>(
          std::mem_fn(&RicPacketSpy::Service::StartWatch), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      RicPacketSpy_method_names[2],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< RicPacketSpy::Service, ::ric::packet::spy::CancelWatchRequest, ::ric::packet::spy::CancelWatchResponse>(
          std::mem_fn(&RicPacketSpy::Service::CancelWatch), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      RicPacketSpy_method_names[3],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< RicPacketSpy::Service, ::ric::packet::spy::CommitModelRequest, ::ric::packet::spy::CommitModelResponse>(
          std::mem_fn(&RicPacketSpy::Service::CommitModel), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      RicPacketSpy_method_names[4],
      ::grpc::internal::RpcMethod::SERVER_STREAMING,
      new ::grpc::internal::ServerStreamingHandler< RicPacketSpy::Service, ::ric::packet::spy::WatchUpdateRequest, ::ric::packet::spy::ObjectUpdate>(
          std::mem_fn(&RicPacketSpy::Service::WatchUpdate), this)));
}

RicPacketSpy::Service::~Service() {
}

::grpc::Status RicPacketSpy::Service::GetState(::grpc::ServerContext* context, const ::ric::packet::spy::GetStateRequest* request, ::ric::packet::spy::GetStateResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status RicPacketSpy::Service::StartWatch(::grpc::ServerContext* context, const ::ric::packet::spy::StartWatchRequest* request, ::ric::packet::spy::StartWatchResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status RicPacketSpy::Service::CancelWatch(::grpc::ServerContext* context, const ::ric::packet::spy::CancelWatchRequest* request, ::ric::packet::spy::CancelWatchResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status RicPacketSpy::Service::CommitModel(::grpc::ServerContext* context, const ::ric::packet::spy::CommitModelRequest* request, ::ric::packet::spy::CommitModelResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status RicPacketSpy::Service::WatchUpdate(::grpc::ServerContext* context, const ::ric::packet::spy::WatchUpdateRequest* request, ::grpc::ServerWriter< ::ric::packet::spy::ObjectUpdate>* writer) {
  (void) context;
  (void) request;
  (void) writer;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}


}  // namespace ric
}  // namespace packet
}  // namespace spy


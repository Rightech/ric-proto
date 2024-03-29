// Generated by the gRPC C++ plugin.
// If you make any local change, they will be lost.
// source: ric-code/riccode.proto

#include "ric-code/riccode.pb.h"
#include "ric-code/riccode.grpc.pb.h"

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
namespace code {

static const char* RicCode_method_names[] = {
  "/ric.code.RicCode/TranspileEs6",
  "/ric.code.RicCode/BundleEs",
  "/ric.code.RicCode/ParseCondition",
};

std::unique_ptr< RicCode::Stub> RicCode::NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options) {
  (void)options;
  std::unique_ptr< RicCode::Stub> stub(new RicCode::Stub(channel));
  return stub;
}

RicCode::Stub::Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel)
  : channel_(channel), rpcmethod_TranspileEs6_(RicCode_method_names[0], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_BundleEs_(RicCode_method_names[1], ::grpc::internal::RpcMethod::SERVER_STREAMING, channel)
  , rpcmethod_ParseCondition_(RicCode_method_names[2], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  {}

::grpc::Status RicCode::Stub::TranspileEs6(::grpc::ClientContext* context, const ::ric::code::TranspileRequest& request, ::ric::code::TranspileResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_TranspileEs6_, context, request, response);
}

void RicCode::Stub::experimental_async::TranspileEs6(::grpc::ClientContext* context, const ::ric::code::TranspileRequest* request, ::ric::code::TranspileResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_TranspileEs6_, context, request, response, std::move(f));
}

void RicCode::Stub::experimental_async::TranspileEs6(::grpc::ClientContext* context, const ::grpc::ByteBuffer* request, ::ric::code::TranspileResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_TranspileEs6_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::ric::code::TranspileResponse>* RicCode::Stub::AsyncTranspileEs6Raw(::grpc::ClientContext* context, const ::ric::code::TranspileRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::ric::code::TranspileResponse>::Create(channel_.get(), cq, rpcmethod_TranspileEs6_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::ric::code::TranspileResponse>* RicCode::Stub::PrepareAsyncTranspileEs6Raw(::grpc::ClientContext* context, const ::ric::code::TranspileRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::ric::code::TranspileResponse>::Create(channel_.get(), cq, rpcmethod_TranspileEs6_, context, request, false);
}

::grpc::ClientReader< ::ric::code::BundleEsProgress>* RicCode::Stub::BundleEsRaw(::grpc::ClientContext* context, const ::ric::code::BundleEsRequest& request) {
  return ::grpc::internal::ClientReaderFactory< ::ric::code::BundleEsProgress>::Create(channel_.get(), rpcmethod_BundleEs_, context, request);
}

void RicCode::Stub::experimental_async::BundleEs(::grpc::ClientContext* context, ::ric::code::BundleEsRequest* request, ::grpc::experimental::ClientReadReactor< ::ric::code::BundleEsProgress>* reactor) {
  ::grpc::internal::ClientCallbackReaderFactory< ::ric::code::BundleEsProgress>::Create(stub_->channel_.get(), stub_->rpcmethod_BundleEs_, context, request, reactor);
}

::grpc::ClientAsyncReader< ::ric::code::BundleEsProgress>* RicCode::Stub::AsyncBundleEsRaw(::grpc::ClientContext* context, const ::ric::code::BundleEsRequest& request, ::grpc::CompletionQueue* cq, void* tag) {
  return ::grpc::internal::ClientAsyncReaderFactory< ::ric::code::BundleEsProgress>::Create(channel_.get(), cq, rpcmethod_BundleEs_, context, request, true, tag);
}

::grpc::ClientAsyncReader< ::ric::code::BundleEsProgress>* RicCode::Stub::PrepareAsyncBundleEsRaw(::grpc::ClientContext* context, const ::ric::code::BundleEsRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncReaderFactory< ::ric::code::BundleEsProgress>::Create(channel_.get(), cq, rpcmethod_BundleEs_, context, request, false, nullptr);
}

::grpc::Status RicCode::Stub::ParseCondition(::grpc::ClientContext* context, const ::ric::code::ParseConditionRequest& request, ::ric::code::ParseConditionResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_ParseCondition_, context, request, response);
}

void RicCode::Stub::experimental_async::ParseCondition(::grpc::ClientContext* context, const ::ric::code::ParseConditionRequest* request, ::ric::code::ParseConditionResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_ParseCondition_, context, request, response, std::move(f));
}

void RicCode::Stub::experimental_async::ParseCondition(::grpc::ClientContext* context, const ::grpc::ByteBuffer* request, ::ric::code::ParseConditionResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_ParseCondition_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::ric::code::ParseConditionResponse>* RicCode::Stub::AsyncParseConditionRaw(::grpc::ClientContext* context, const ::ric::code::ParseConditionRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::ric::code::ParseConditionResponse>::Create(channel_.get(), cq, rpcmethod_ParseCondition_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::ric::code::ParseConditionResponse>* RicCode::Stub::PrepareAsyncParseConditionRaw(::grpc::ClientContext* context, const ::ric::code::ParseConditionRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::ric::code::ParseConditionResponse>::Create(channel_.get(), cq, rpcmethod_ParseCondition_, context, request, false);
}

RicCode::Service::Service() {
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      RicCode_method_names[0],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< RicCode::Service, ::ric::code::TranspileRequest, ::ric::code::TranspileResponse>(
          std::mem_fn(&RicCode::Service::TranspileEs6), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      RicCode_method_names[1],
      ::grpc::internal::RpcMethod::SERVER_STREAMING,
      new ::grpc::internal::ServerStreamingHandler< RicCode::Service, ::ric::code::BundleEsRequest, ::ric::code::BundleEsProgress>(
          std::mem_fn(&RicCode::Service::BundleEs), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      RicCode_method_names[2],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< RicCode::Service, ::ric::code::ParseConditionRequest, ::ric::code::ParseConditionResponse>(
          std::mem_fn(&RicCode::Service::ParseCondition), this)));
}

RicCode::Service::~Service() {
}

::grpc::Status RicCode::Service::TranspileEs6(::grpc::ServerContext* context, const ::ric::code::TranspileRequest* request, ::ric::code::TranspileResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status RicCode::Service::BundleEs(::grpc::ServerContext* context, const ::ric::code::BundleEsRequest* request, ::grpc::ServerWriter< ::ric::code::BundleEsProgress>* writer) {
  (void) context;
  (void) request;
  (void) writer;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status RicCode::Service::ParseCondition(::grpc::ServerContext* context, const ::ric::code::ParseConditionRequest* request, ::ric::code::ParseConditionResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}


}  // namespace ric
}  // namespace code


// source: sgn/slash/v1/slash.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
var cosmos_proto_cosmos_pb = require('../../../cosmos_proto/cosmos_pb.js');
goog.object.extend(proto, cosmos_proto_cosmos_pb);
goog.exportSymbol('proto.sgn.slash.v1.AcctAmtPair', null, global);
goog.exportSymbol('proto.sgn.slash.v1.Params', null, global);
goog.exportSymbol('proto.sgn.slash.v1.QuerySlashParams', null, global);
goog.exportSymbol('proto.sgn.slash.v1.Sig', null, global);
goog.exportSymbol('proto.sgn.slash.v1.Slash', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.slash.v1.AcctAmtPair = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.slash.v1.AcctAmtPair, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.slash.v1.AcctAmtPair.displayName = 'proto.sgn.slash.v1.AcctAmtPair';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.slash.v1.Sig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.slash.v1.Sig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.slash.v1.Sig.displayName = 'proto.sgn.slash.v1.Sig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.slash.v1.Slash = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sgn.slash.v1.Slash.repeatedFields_, null);
};
goog.inherits(proto.sgn.slash.v1.Slash, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.slash.v1.Slash.displayName = 'proto.sgn.slash.v1.Slash';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.slash.v1.Params = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.slash.v1.Params, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.slash.v1.Params.displayName = 'proto.sgn.slash.v1.Params';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.slash.v1.QuerySlashParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.slash.v1.QuerySlashParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.slash.v1.QuerySlashParams.displayName = 'proto.sgn.slash.v1.QuerySlashParams';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.slash.v1.AcctAmtPair.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.slash.v1.AcctAmtPair.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.slash.v1.AcctAmtPair} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.slash.v1.AcctAmtPair.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.slash.v1.AcctAmtPair}
 */
proto.sgn.slash.v1.AcctAmtPair.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.slash.v1.AcctAmtPair;
  return proto.sgn.slash.v1.AcctAmtPair.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.slash.v1.AcctAmtPair} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.slash.v1.AcctAmtPair}
 */
proto.sgn.slash.v1.AcctAmtPair.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.slash.v1.AcctAmtPair.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.slash.v1.AcctAmtPair.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.slash.v1.AcctAmtPair} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.slash.v1.AcctAmtPair.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAmount();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string account = 1;
 * @return {string}
 */
proto.sgn.slash.v1.AcctAmtPair.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.slash.v1.AcctAmtPair} returns this
 */
proto.sgn.slash.v1.AcctAmtPair.prototype.setAccount = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string amount = 2;
 * @return {string}
 */
proto.sgn.slash.v1.AcctAmtPair.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.slash.v1.AcctAmtPair} returns this
 */
proto.sgn.slash.v1.AcctAmtPair.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.slash.v1.Sig.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.slash.v1.Sig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.slash.v1.Sig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.slash.v1.Sig.toObject = function(includeInstance, msg) {
  var f, obj = {
    signer: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sig: msg.getSig_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.slash.v1.Sig}
 */
proto.sgn.slash.v1.Sig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.slash.v1.Sig;
  return proto.sgn.slash.v1.Sig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.slash.v1.Sig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.slash.v1.Sig}
 */
proto.sgn.slash.v1.Sig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSigner(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.slash.v1.Sig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.slash.v1.Sig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.slash.v1.Sig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.slash.v1.Sig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSigner();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSig_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string signer = 1;
 * @return {string}
 */
proto.sgn.slash.v1.Sig.prototype.getSigner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.slash.v1.Sig} returns this
 */
proto.sgn.slash.v1.Sig.prototype.setSigner = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes sig = 2;
 * @return {!(string|Uint8Array)}
 */
proto.sgn.slash.v1.Sig.prototype.getSig = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes sig = 2;
 * This is a type-conversion wrapper around `getSig()`
 * @return {string}
 */
proto.sgn.slash.v1.Sig.prototype.getSig_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSig()));
};


/**
 * optional bytes sig = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSig()`
 * @return {!Uint8Array}
 */
proto.sgn.slash.v1.Sig.prototype.getSig_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSig()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sgn.slash.v1.Sig} returns this
 */
proto.sgn.slash.v1.Sig.prototype.setSig = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sgn.slash.v1.Slash.repeatedFields_ = [6,9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.slash.v1.Slash.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.slash.v1.Slash.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.slash.v1.Slash} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.slash.v1.Slash.toObject = function(includeInstance, msg) {
  var f, obj = {
    validator: jspb.Message.getFieldWithDefault(msg, 1, ""),
    nonce: jspb.Message.getFieldWithDefault(msg, 2, 0),
    slashFactor: jspb.Message.getFieldWithDefault(msg, 3, 0),
    expireTime: jspb.Message.getFieldWithDefault(msg, 4, 0),
    jailPeriod: jspb.Message.getFieldWithDefault(msg, 5, 0),
    collectorsList: jspb.Message.toObjectList(msg.getCollectorsList(),
    proto.sgn.slash.v1.AcctAmtPair.toObject, includeInstance),
    reason: jspb.Message.getFieldWithDefault(msg, 7, ""),
    ethSlashBytes: msg.getEthSlashBytes_asB64(),
    sigsList: jspb.Message.toObjectList(msg.getSigsList(),
    proto.sgn.slash.v1.Sig.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.slash.v1.Slash}
 */
proto.sgn.slash.v1.Slash.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.slash.v1.Slash;
  return proto.sgn.slash.v1.Slash.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.slash.v1.Slash} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.slash.v1.Slash}
 */
proto.sgn.slash.v1.Slash.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValidator(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNonce(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSlashFactor(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setExpireTime(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setJailPeriod(value);
      break;
    case 6:
      var value = new proto.sgn.slash.v1.AcctAmtPair;
      reader.readMessage(value,proto.sgn.slash.v1.AcctAmtPair.deserializeBinaryFromReader);
      msg.addCollectors(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 8:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setEthSlashBytes(value);
      break;
    case 9:
      var value = new proto.sgn.slash.v1.Sig;
      reader.readMessage(value,proto.sgn.slash.v1.Sig.deserializeBinaryFromReader);
      msg.addSigs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.slash.v1.Slash.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.slash.v1.Slash.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.slash.v1.Slash} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.slash.v1.Slash.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValidator();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getSlashFactor();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getExpireTime();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getJailPeriod();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getCollectorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.sgn.slash.v1.AcctAmtPair.serializeBinaryToWriter
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getEthSlashBytes_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      8,
      f
    );
  }
  f = message.getSigsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.sgn.slash.v1.Sig.serializeBinaryToWriter
    );
  }
};


/**
 * optional string validator = 1;
 * @return {string}
 */
proto.sgn.slash.v1.Slash.prototype.getValidator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.slash.v1.Slash} returns this
 */
proto.sgn.slash.v1.Slash.prototype.setValidator = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 nonce = 2;
 * @return {number}
 */
proto.sgn.slash.v1.Slash.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.slash.v1.Slash} returns this
 */
proto.sgn.slash.v1.Slash.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 slash_factor = 3;
 * @return {number}
 */
proto.sgn.slash.v1.Slash.prototype.getSlashFactor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.slash.v1.Slash} returns this
 */
proto.sgn.slash.v1.Slash.prototype.setSlashFactor = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 expire_time = 4;
 * @return {number}
 */
proto.sgn.slash.v1.Slash.prototype.getExpireTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.slash.v1.Slash} returns this
 */
proto.sgn.slash.v1.Slash.prototype.setExpireTime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 jail_period = 5;
 * @return {number}
 */
proto.sgn.slash.v1.Slash.prototype.getJailPeriod = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.slash.v1.Slash} returns this
 */
proto.sgn.slash.v1.Slash.prototype.setJailPeriod = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * repeated AcctAmtPair collectors = 6;
 * @return {!Array<!proto.sgn.slash.v1.AcctAmtPair>}
 */
proto.sgn.slash.v1.Slash.prototype.getCollectorsList = function() {
  return /** @type{!Array<!proto.sgn.slash.v1.AcctAmtPair>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sgn.slash.v1.AcctAmtPair, 6));
};


/**
 * @param {!Array<!proto.sgn.slash.v1.AcctAmtPair>} value
 * @return {!proto.sgn.slash.v1.Slash} returns this
*/
proto.sgn.slash.v1.Slash.prototype.setCollectorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.sgn.slash.v1.AcctAmtPair=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sgn.slash.v1.AcctAmtPair}
 */
proto.sgn.slash.v1.Slash.prototype.addCollectors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.sgn.slash.v1.AcctAmtPair, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sgn.slash.v1.Slash} returns this
 */
proto.sgn.slash.v1.Slash.prototype.clearCollectorsList = function() {
  return this.setCollectorsList([]);
};


/**
 * optional string reason = 7;
 * @return {string}
 */
proto.sgn.slash.v1.Slash.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.slash.v1.Slash} returns this
 */
proto.sgn.slash.v1.Slash.prototype.setReason = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional bytes eth_slash_bytes = 8;
 * @return {!(string|Uint8Array)}
 */
proto.sgn.slash.v1.Slash.prototype.getEthSlashBytes = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * optional bytes eth_slash_bytes = 8;
 * This is a type-conversion wrapper around `getEthSlashBytes()`
 * @return {string}
 */
proto.sgn.slash.v1.Slash.prototype.getEthSlashBytes_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getEthSlashBytes()));
};


/**
 * optional bytes eth_slash_bytes = 8;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getEthSlashBytes()`
 * @return {!Uint8Array}
 */
proto.sgn.slash.v1.Slash.prototype.getEthSlashBytes_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getEthSlashBytes()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sgn.slash.v1.Slash} returns this
 */
proto.sgn.slash.v1.Slash.prototype.setEthSlashBytes = function(value) {
  return jspb.Message.setProto3BytesField(this, 8, value);
};


/**
 * repeated Sig sigs = 9;
 * @return {!Array<!proto.sgn.slash.v1.Sig>}
 */
proto.sgn.slash.v1.Slash.prototype.getSigsList = function() {
  return /** @type{!Array<!proto.sgn.slash.v1.Sig>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sgn.slash.v1.Sig, 9));
};


/**
 * @param {!Array<!proto.sgn.slash.v1.Sig>} value
 * @return {!proto.sgn.slash.v1.Slash} returns this
*/
proto.sgn.slash.v1.Slash.prototype.setSigsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.sgn.slash.v1.Sig=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sgn.slash.v1.Sig}
 */
proto.sgn.slash.v1.Slash.prototype.addSigs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.sgn.slash.v1.Sig, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sgn.slash.v1.Slash} returns this
 */
proto.sgn.slash.v1.Slash.prototype.clearSigsList = function() {
  return this.setSigsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.slash.v1.Params.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.slash.v1.Params.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.slash.v1.Params} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.slash.v1.Params.toObject = function(includeInstance, msg) {
  var f, obj = {
    enableSlash: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    signedBlocksWindow: jspb.Message.getFieldWithDefault(msg, 2, 0),
    slashTimeout: jspb.Message.getFieldWithDefault(msg, 3, 0),
    slashFactorDoubleSign: jspb.Message.getFieldWithDefault(msg, 4, 0),
    slashFactorDowntime: jspb.Message.getFieldWithDefault(msg, 5, 0),
    jailPeriod: jspb.Message.getFieldWithDefault(msg, 6, 0),
    minSignedPerWindow: msg.getMinSignedPerWindow_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.slash.v1.Params}
 */
proto.sgn.slash.v1.Params.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.slash.v1.Params;
  return proto.sgn.slash.v1.Params.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.slash.v1.Params} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.slash.v1.Params}
 */
proto.sgn.slash.v1.Params.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableSlash(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSignedBlocksWindow(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSlashTimeout(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSlashFactorDoubleSign(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSlashFactorDowntime(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setJailPeriod(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMinSignedPerWindow(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.slash.v1.Params.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.slash.v1.Params.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.slash.v1.Params} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.slash.v1.Params.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnableSlash();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getSignedBlocksWindow();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getSlashTimeout();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getSlashFactorDoubleSign();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getSlashFactorDowntime();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getJailPeriod();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getMinSignedPerWindow_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      7,
      f
    );
  }
};


/**
 * optional bool enable_slash = 1;
 * @return {boolean}
 */
proto.sgn.slash.v1.Params.prototype.getEnableSlash = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sgn.slash.v1.Params} returns this
 */
proto.sgn.slash.v1.Params.prototype.setEnableSlash = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional int64 signed_blocks_window = 2;
 * @return {number}
 */
proto.sgn.slash.v1.Params.prototype.getSignedBlocksWindow = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.slash.v1.Params} returns this
 */
proto.sgn.slash.v1.Params.prototype.setSignedBlocksWindow = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 slash_timeout = 3;
 * @return {number}
 */
proto.sgn.slash.v1.Params.prototype.getSlashTimeout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.slash.v1.Params} returns this
 */
proto.sgn.slash.v1.Params.prototype.setSlashTimeout = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 slash_factor_double_sign = 4;
 * @return {number}
 */
proto.sgn.slash.v1.Params.prototype.getSlashFactorDoubleSign = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.slash.v1.Params} returns this
 */
proto.sgn.slash.v1.Params.prototype.setSlashFactorDoubleSign = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 slash_factor_downtime = 5;
 * @return {number}
 */
proto.sgn.slash.v1.Params.prototype.getSlashFactorDowntime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.slash.v1.Params} returns this
 */
proto.sgn.slash.v1.Params.prototype.setSlashFactorDowntime = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 jail_period = 6;
 * @return {number}
 */
proto.sgn.slash.v1.Params.prototype.getJailPeriod = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.slash.v1.Params} returns this
 */
proto.sgn.slash.v1.Params.prototype.setJailPeriod = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional bytes min_signed_per_window = 7;
 * @return {!(string|Uint8Array)}
 */
proto.sgn.slash.v1.Params.prototype.getMinSignedPerWindow = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes min_signed_per_window = 7;
 * This is a type-conversion wrapper around `getMinSignedPerWindow()`
 * @return {string}
 */
proto.sgn.slash.v1.Params.prototype.getMinSignedPerWindow_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMinSignedPerWindow()));
};


/**
 * optional bytes min_signed_per_window = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMinSignedPerWindow()`
 * @return {!Uint8Array}
 */
proto.sgn.slash.v1.Params.prototype.getMinSignedPerWindow_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMinSignedPerWindow()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sgn.slash.v1.Params} returns this
 */
proto.sgn.slash.v1.Params.prototype.setMinSignedPerWindow = function(value) {
  return jspb.Message.setProto3BytesField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.slash.v1.QuerySlashParams.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.slash.v1.QuerySlashParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.slash.v1.QuerySlashParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.slash.v1.QuerySlashParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.slash.v1.QuerySlashParams}
 */
proto.sgn.slash.v1.QuerySlashParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.slash.v1.QuerySlashParams;
  return proto.sgn.slash.v1.QuerySlashParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.slash.v1.QuerySlashParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.slash.v1.QuerySlashParams}
 */
proto.sgn.slash.v1.QuerySlashParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNonce(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.slash.v1.QuerySlashParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.slash.v1.QuerySlashParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.slash.v1.QuerySlashParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.slash.v1.QuerySlashParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 nonce = 1;
 * @return {number}
 */
proto.sgn.slash.v1.QuerySlashParams.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.slash.v1.QuerySlashParams} returns this
 */
proto.sgn.slash.v1.QuerySlashParams.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


goog.object.extend(exports, proto.sgn.slash.v1);
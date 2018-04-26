/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

import { BaseResource } from 'ms-rest-azure';
import { CloudError } from 'ms-rest-azure';
import * as moment from 'moment';

export { BaseResource } from 'ms-rest-azure';
export { CloudError } from 'ms-rest-azure';


/**
 * @class
 * Initializes a new instance of the Provider class.
 * @constructor
 * A resource provider.
 *
 * @member {string} providerName The provider name.
 */
export interface Provider {
  providerName: string;
}

/**
 * @class
 * Initializes a new instance of the OperationDisplay class.
 * @constructor
 * Operation details.
 *
 * @member {string} [provider] The service provider.
 * @member {string} [resource] Resource on which the operation is performed.
 * @member {string} [operation] The operation type.
 * @member {string} [description] The operation description.
 */
export interface OperationDisplay {
  provider?: string;
  resource?: string;
  operation?: string;
  description?: string;
}

/**
 * @class
 * Initializes a new instance of the Operation class.
 * @constructor
 * An operation.
 *
 * @member {string} name The operation name.
 * @member {object} [display] The operation display name.
 * @member {string} [display.provider] The service provider.
 * @member {string} [display.resource] Resource on which the operation is
 * performed.
 * @member {string} [display.operation] The operation type.
 * @member {string} [display.description] The operation description.
 */
export interface Operation {
  name: string;
  display?: OperationDisplay;
}

/**
 * @class
 * Initializes a new instance of the EntityNameAvailabilityCheckOutput class.
 * @constructor
 * The response from the check name availability request.
 *
 * @member {boolean} nameAvailable Specifies if the name is available.
 * @member {string} [reason] Specifies the reason if the name is not available.
 * @member {string} [message] Specifies the detailed reason if the name is not
 * available.
 */
export interface EntityNameAvailabilityCheckOutput {
  nameAvailable: boolean;
  reason?: string;
  message?: string;
}

/**
 * @class
 * Initializes a new instance of the StorageAccount class.
 * @constructor
 * The storage account details.
 *
 * @member {string} [id] The ID of the storage account resource. Media Services
 * relies on tables and queues as well as blobs, so the primary storage account
 * must be a Standard Storage account (either Microsoft.ClassicStorage or
 * Microsoft.Storage). Blob only storage accounts can be added as secondary
 * storage accounts.
 * @member {string} type The type of the storage account. Possible values
 * include: 'Primary', 'Secondary'
 */
export interface StorageAccount {
  id?: string;
  type: string;
}

/**
 * @class
 * Initializes a new instance of the SyncStorageKeysInput class.
 * @constructor
 * The input to the sync storage keys request.
 *
 * @member {string} [id] The ID of the storage account resource.
 */
export interface SyncStorageKeysInput {
  id?: string;
}

/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * The core properties of ARM resources.
 *
 * @member {string} [id] Fully qualified resource ID for the resource.
 * @member {string} [name] The name of the resource.
 * @member {string} [type] The type of the resource.
 */
export interface Resource extends BaseResource {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
}

/**
 * @class
 * Initializes a new instance of the TrackedResource class.
 * @constructor
 * The resource model definition for a ARM tracked resource.
 *
 * @member {object} [tags] Resource tags.
 * @member {string} [location] The Azure Region of the resource.
 */
export interface TrackedResource extends Resource {
  tags?: { [propertyName: string]: string };
  location?: string;
}

/**
 * @class
 * Initializes a new instance of the MediaService class.
 * @constructor
 * A Media Services account.
 *
 * @member {uuid} [mediaServiceId] The Media Services account ID.
 * @member {array} [storageAccounts] The storage accounts for this resource.
 */
export interface MediaService extends TrackedResource {
  readonly mediaServiceId?: string;
  storageAccounts?: StorageAccount[];
}

/**
 * @class
 * Initializes a new instance of the SubscriptionMediaService class.
 * @constructor
 * A Media Services account.
 *
 * @member {uuid} [mediaServiceId] The Media Services account ID.
 * @member {array} [storageAccounts] The storage accounts for this resource.
 */
export interface SubscriptionMediaService extends TrackedResource {
  readonly mediaServiceId?: string;
  storageAccounts?: StorageAccount[];
}

/**
 * @class
 * Initializes a new instance of the ODataError class.
 * @constructor
 * Information about an error.
 *
 * @member {string} [code] A language-independent error name.
 * @member {string} [message] The error message.
 * @member {string} [target] The target of the error (for example, the name of
 * the property in error).
 * @member {array} [details] The error details.
 */
export interface ODataError {
  code?: string;
  message?: string;
  target?: string;
  details?: ODataError[];
}

/**
 * @class
 * Initializes a new instance of the ApiError class.
 * @constructor
 * The API error.
 *
 * @member {object} [error] ApiError. The error properties.
 * @member {string} [error.code] A language-independent error name.
 * @member {string} [error.message] The error message.
 * @member {string} [error.target] The target of the error (for example, the
 * name of the property in error).
 * @member {array} [error.details] The error details.
 */
export interface ApiError {
  error?: ODataError;
}

/**
 * @class
 * Initializes a new instance of the CheckNameAvailabilityInput class.
 * @constructor
 * The input to the check name availability request.
 *
 * @member {string} [name] The account name.
 * @member {string} [type] The account type. For a Media Services account, this
 * should be 'MediaServices'.
 */
export interface CheckNameAvailabilityInput {
  name?: string;
  type?: string;
}

/**
 * @class
 * Initializes a new instance of the ProxyResource class.
 * @constructor
 * The resource model definition for a ARM proxy resource.
 *
 */
export interface ProxyResource extends Resource {
}

/**
 * @class
 * Initializes a new instance of the AssetContainerSas class.
 * @constructor
 * The Asset Storage container SAS URLs.
 *
 * @member {array} [assetContainerSasUrls] The list of Asset container SAS
 * URLs.
 */
export interface AssetContainerSas {
  assetContainerSasUrls?: string[];
}

/**
 * @class
 * Initializes a new instance of the AssetStorageEncryptionKey class.
 * @constructor
 * The Asset Storage encryption key.
 *
 * @member {string} [storageEncryptionKey] The Asset storage encryption key.
 */
export interface AssetStorageEncryptionKey {
  storageEncryptionKey?: string;
}

/**
 * @class
 * Initializes a new instance of the Asset class.
 * @constructor
 * An Asset.
 *
 * @member {uuid} [assetId] The Asset ID.
 * @member {date} [created] The creation date of the Asset.
 * @member {date} [lastModified] The last modified date of the Asset.
 * @member {string} [alternateId] The alternate ID of the Asset.
 * @member {string} [description] The Asset description.
 * @member {string} [container] The name of the asset blob container.
 * @member {string} [storageAccountId] The ARM resource ID of the Azure Storage
 * account containing the Asset.
 * @member {string} [storageEncryptionFormat] The Asset encryption format. One
 * of None, MediaStorageEncryption, StaticCommonEncryption or
 * StaticEnvelopeEncryption. Possible values include: 'None',
 * 'MediaStorageClientEncryption', 'StaticCommonEncryption',
 * 'StaticEnvelopeEncryption'
 * @member {string} [storageEncryptionKey] The Base64 encoded key for the Asset
 * storage encryption.
 */
export interface Asset extends ProxyResource {
  readonly assetId?: string;
  readonly created?: Date;
  readonly lastModified?: Date;
  alternateId?: string;
  description?: string;
  container?: string;
  storageAccountId?: string;
  storageEncryptionFormat?: string;
  storageEncryptionKey?: string;
}

/**
 * @class
 * Initializes a new instance of the ListContainerSasInput class.
 * @constructor
 * The parameters to the list SAS requet.
 *
 * @member {string} [permissions] The permissions to set on the SAS URL.
 * Possible values include: 'Read', 'ReadWrite', 'ReadWriteDelete'
 * @member {date} [expiryTime] The SAS URL expiry time.
 */
export interface ListContainerSasInput {
  permissions?: string;
  expiryTime?: Date;
}

/**
 * @class
 * Initializes a new instance of the ContentKeyPolicyPlayReadyExplicitAnalogTelevisionRestriction class.
 * @constructor
 * Configures the Explicit Analog Television Output Restriction control bits.
 * For further details see the PlayReady Compliance Rules.
 *
 * @member {boolean} bestEffort Indicates whether this restriction is enforced
 * on a Best Effort basis.
 * @member {number} configurationData Configures the restriction control bits.
 * Must be between 0 and 3 inclusive.
 */
export interface ContentKeyPolicyPlayReadyExplicitAnalogTelevisionRestriction {
  bestEffort: boolean;
  configurationData: number;
}

/**
 * @class
 * Initializes a new instance of the ContentKeyPolicyPlayReadyContentKeyLocation class.
 * @constructor
 * Base class for content key ID location. A derived class must be used to
 * represent the location.
 *
 * @member {string} odatatype Polymorphic Discriminator
 */
export interface ContentKeyPolicyPlayReadyContentKeyLocation {
  odatatype: string;
}

/**
 * @class
 * Initializes a new instance of the ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeader class.
 * @constructor
 * Specifies that the content key ID is in the PlayReady header.
 *
 */
export interface ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeader extends ContentKeyPolicyPlayReadyContentKeyLocation {
}

/**
 * @class
 * Initializes a new instance of the ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier class.
 * @constructor
 * Specifies that the content key ID is specified in the PlayReady
 * configuration.
 *
 * @member {uuid} keyId The content key ID.
 */
export interface ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier extends ContentKeyPolicyPlayReadyContentKeyLocation {
  keyId: string;
}

/**
 * @class
 * Initializes a new instance of the ContentKeyPolicyPlayReadyPlayRight class.
 * @constructor
 * Configures the Play Right in the PlayReady license.
 *
 * @member {moment.duration} [firstPlayExpiration] The amount of time that the
 * license is valid after the license is first used to play content.
 * @member {number} [scmsRestriction] Configures the Serial Copy Management
 * System (SCMS) in the license. Must be between 0 and 3 inclusive.
 * @member {number} [agcAndColorStripeRestriction] Configures Automatic Gain
 * Control (AGC) and Color Stripe in the license. Must be between 0 and 3
 * inclusive.
 * @member {object} [explicitAnalogTelevisionOutputRestriction] Configures the
 * Explicit Analog Television Output Restriction in the license. Configuration
 * data must be between 0 and 3 inclusive.
 * @member {boolean} [explicitAnalogTelevisionOutputRestriction.bestEffort]
 * Indicates whether this restriction is enforced on a Best Effort basis.
 * @member {number}
 * [explicitAnalogTelevisionOutputRestriction.configurationData] Configures the
 * restriction control bits. Must be between 0 and 3 inclusive.
 * @member {boolean} digitalVideoOnlyContentRestriction Enables the Image
 * Constraint For Analog Component Video Restriction in the license.
 * @member {boolean} imageConstraintForAnalogComponentVideoRestriction Enables
 * the Image Constraint For Analog Component Video Restriction in the license.
 * @member {boolean} imageConstraintForAnalogComputerMonitorRestriction Enables
 * the Image Constraint For Analog Component Video Restriction in the license.
 * @member {string} allowPassingVideoContentToUnknownOutput Configures Unknown
 * output handling settings of the license. Possible values include: 'Unknown',
 * 'NotAllowed', 'Allowed', 'AllowedWithVideoConstriction'
 * @member {number} [uncompressedDigitalVideoOpl] Specifies the output
 * protection level for uncompressed digital video.
 * @member {number} [compressedDigitalVideoOpl] Specifies the output protection
 * level for compressed digital video.
 * @member {number} [analogVideoOpl] Specifies the output protection level for
 * compressed digital audio.
 * @member {number} [compressedDigitalAudioOpl] Specifies the output protection
 * level for compressed digital audio.
 * @member {number} [uncompressedDigitalAudioOpl] Specifies the output
 * protection level for uncompressed digital audio.
 */
export interface ContentKeyPolicyPlayReadyPlayRight {
  firstPlayExpiration?: moment.Duration;
  scmsRestriction?: number;
  agcAndColorStripeRestriction?: number;
  explicitAnalogTelevisionOutputRestriction?: ContentKeyPolicyPlayReadyExplicitAnalogTelevisionRestriction;
  digitalVideoOnlyContentRestriction: boolean;
  imageConstraintForAnalogComponentVideoRestriction: boolean;
  imageConstraintForAnalogComputerMonitorRestriction: boolean;
  allowPassingVideoContentToUnknownOutput: string;
  uncompressedDigitalVideoOpl?: number;
  compressedDigitalVideoOpl?: number;
  analogVideoOpl?: number;
  compressedDigitalAudioOpl?: number;
  uncompressedDigitalAudioOpl?: number;
}

/**
 * @class
 * Initializes a new instance of the ContentKeyPolicyTokenClaim class.
 * @constructor
 * Represents a token claim.
 *
 * @member {string} [claimType] Token claim type.
 * @member {string} [claimValue] Token claim value.
 */
export interface ContentKeyPolicyTokenClaim {
  claimType?: string;
  claimValue?: string;
}

/**
 * @class
 * Initializes a new instance of the ContentKeyPolicyPlayReadyLicense class.
 * @constructor
 * The PlayReady license
 *
 * @member {boolean} allowTestDevices A flag indicating whether test devices
 * can use the license.
 * @member {date} [beginDate] The begin date of license
 * @member {date} [expirationDate] The expiration date of license.
 * @member {moment.duration} [relativeBeginDate] The relative begin date of
 * license.
 * @member {moment.duration} [relativeExpirationDate] The relative expiration
 * date of license.
 * @member {moment.duration} [gracePeriod] The grace period of license.
 * @member {object} [playRight] The license PlayRight
 * @member {moment.duration} [playRight.firstPlayExpiration] The amount of time
 * that the license is valid after the license is first used to play content.
 * @member {number} [playRight.scmsRestriction] Configures the Serial Copy
 * Management System (SCMS) in the license. Must be between 0 and 3 inclusive.
 * @member {number} [playRight.agcAndColorStripeRestriction] Configures
 * Automatic Gain Control (AGC) and Color Stripe in the license. Must be
 * between 0 and 3 inclusive.
 * @member {object} [playRight.explicitAnalogTelevisionOutputRestriction]
 * Configures the Explicit Analog Television Output Restriction in the license.
 * Configuration data must be between 0 and 3 inclusive.
 * @member {boolean}
 * [playRight.explicitAnalogTelevisionOutputRestriction.bestEffort] Indicates
 * whether this restriction is enforced on a Best Effort basis.
 * @member {number}
 * [playRight.explicitAnalogTelevisionOutputRestriction.configurationData]
 * Configures the restriction control bits. Must be between 0 and 3 inclusive.
 * @member {boolean} [playRight.digitalVideoOnlyContentRestriction] Enables the
 * Image Constraint For Analog Component Video Restriction in the license.
 * @member {boolean}
 * [playRight.imageConstraintForAnalogComponentVideoRestriction] Enables the
 * Image Constraint For Analog Component Video Restriction in the license.
 * @member {boolean}
 * [playRight.imageConstraintForAnalogComputerMonitorRestriction] Enables the
 * Image Constraint For Analog Component Video Restriction in the license.
 * @member {string} [playRight.allowPassingVideoContentToUnknownOutput]
 * Configures Unknown output handling settings of the license. Possible values
 * include: 'Unknown', 'NotAllowed', 'Allowed', 'AllowedWithVideoConstriction'
 * @member {number} [playRight.uncompressedDigitalVideoOpl] Specifies the
 * output protection level for uncompressed digital video.
 * @member {number} [playRight.compressedDigitalVideoOpl] Specifies the output
 * protection level for compressed digital video.
 * @member {number} [playRight.analogVideoOpl] Specifies the output protection
 * level for compressed digital audio.
 * @member {number} [playRight.compressedDigitalAudioOpl] Specifies the output
 * protection level for compressed digital audio.
 * @member {number} [playRight.uncompressedDigitalAudioOpl] Specifies the
 * output protection level for uncompressed digital audio.
 * @member {string} licenseType The license type. Possible values include:
 * 'Unknown', 'NonPersistent', 'Persistent'
 * @member {object} contentKeyLocation The content key location.
 * @member {string} [contentKeyLocation.odatatype] Polymorphic Discriminator
 * @member {string} contentType The PlayReady content type. Possible values
 * include: 'Unknown', 'Unspecified', 'UltraVioletDownload',
 * 'UltraVioletStreaming'
 */
export interface ContentKeyPolicyPlayReadyLicense {
  allowTestDevices: boolean;
  beginDate?: Date;
  expirationDate?: Date;
  relativeBeginDate?: moment.Duration;
  relativeExpirationDate?: moment.Duration;
  gracePeriod?: moment.Duration;
  playRight?: ContentKeyPolicyPlayReadyPlayRight;
  licenseType: string;
  contentKeyLocation: ContentKeyPolicyPlayReadyContentKeyLocation;
  contentType: string;
}

/**
 * @class
 * Initializes a new instance of the ContentKeyPolicyRestriction class.
 * @constructor
 * Base class for Content Key Policy restrictions. A derived class must be used
 * to create a restriction.
 *
 * @member {string} odatatype Polymorphic Discriminator
 */
export interface ContentKeyPolicyRestriction {
  odatatype: string;
}

/**
 * @class
 * Initializes a new instance of the ContentKeyPolicyOpenRestriction class.
 * @constructor
 * Represents an open restriction. License or key will be delivered on every
 * request.
 *
 */
export interface ContentKeyPolicyOpenRestriction extends ContentKeyPolicyRestriction {
}

/**
 * @class
 * Initializes a new instance of the ContentKeyPolicyUnknownRestriction class.
 * @constructor
 * Represents a ContentKeyPolicyRestriction that is unavailable in the current
 * API version.
 *
 */
export interface ContentKeyPolicyUnknownRestriction extends ContentKeyPolicyRestriction {
}

/**
 * @class
 * Initializes a new instance of the ContentKeyPolicyConfiguration class.
 * @constructor
 * Base class for Content Key Policy configuration. A derived class must be
 * used to create a configuration.
 *
 * @member {string} odatatype Polymorphic Discriminator
 */
export interface ContentKeyPolicyConfiguration {
  odatatype: string;
}

/**
 * @class
 * Initializes a new instance of the ContentKeyPolicyRestrictionTokenKey class.
 * @constructor
 * Base class for Content Key Policy key for token validation. A derived class
 * must be used to create a token key.
 *
 * @member {string} odatatype Polymorphic Discriminator
 */
export interface ContentKeyPolicyRestrictionTokenKey {
  odatatype: string;
}

/**
 * @class
 * Initializes a new instance of the ContentKeyPolicySymmetricTokenKey class.
 * @constructor
 * Specifies a symmetric key for token validation.
 *
 * @member {buffer} keyValue The key value of the key
 */
export interface ContentKeyPolicySymmetricTokenKey extends ContentKeyPolicyRestrictionTokenKey {
  keyValue: Buffer;
}

/**
 * @class
 * Initializes a new instance of the ContentKeyPolicyRsaTokenKey class.
 * @constructor
 * Specifies a RSA key for token validation
 *
 * @member {buffer} exponent The RSA Parameter exponent
 * @member {buffer} modulus The RSA Parameter modulus
 */
export interface ContentKeyPolicyRsaTokenKey extends ContentKeyPolicyRestrictionTokenKey {
  exponent: Buffer;
  modulus: Buffer;
}

/**
 * @class
 * Initializes a new instance of the ContentKeyPolicyX509CertificateTokenKey class.
 * @constructor
 * Specifies a certificate for token validation.
 *
 * @member {buffer} rawBody The raw data field of a certificate in PKCS 12
 * format (X509Certificate2 in .NET)
 */
export interface ContentKeyPolicyX509CertificateTokenKey extends ContentKeyPolicyRestrictionTokenKey {
  rawBody: Buffer;
}

/**
 * @class
 * Initializes a new instance of the ContentKeyPolicyTokenRestriction class.
 * @constructor
 * Represents a token restriction. Provided token must match these requirements
 * for successful license or key delivery.
 *
 * @member {string} issuer The token issuer.
 * @member {string} audience The audience for the token.
 * @member {object} primaryVerificationKey The primary verification key.
 * @member {string} [primaryVerificationKey.odatatype] Polymorphic
 * Discriminator
 * @member {array} [alternateVerificationKeys] A list of alternative
 * verification keys.
 * @member {array} [requiredClaims] A list of required token claims.
 * @member {string} restrictionTokenType The type of token. Possible values
 * include: 'Unknown', 'Swt', 'Jwt'
 * @member {string} [openIdConnectDiscoveryDocument] The OpenID connect
 * discovery document.
 */
export interface ContentKeyPolicyTokenRestriction extends ContentKeyPolicyRestriction {
  issuer: string;
  audience: string;
  primaryVerificationKey: ContentKeyPolicyRestrictionTokenKey;
  alternateVerificationKeys?: ContentKeyPolicyRestrictionTokenKey[];
  requiredClaims?: ContentKeyPolicyTokenClaim[];
  restrictionTokenType: string;
  openIdConnectDiscoveryDocument?: string;
}

/**
 * @class
 * Initializes a new instance of the ContentKeyPolicyClearKeyConfiguration class.
 * @constructor
 * Represents a configuration for non-DRM keys.
 *
 */
export interface ContentKeyPolicyClearKeyConfiguration extends ContentKeyPolicyConfiguration {
}

/**
 * @class
 * Initializes a new instance of the ContentKeyPolicyUnknownConfiguration class.
 * @constructor
 * Represents a ContentKeyPolicyConfiguration that is unavailable in the
 * current API version.
 *
 */
export interface ContentKeyPolicyUnknownConfiguration extends ContentKeyPolicyConfiguration {
}

/**
 * @class
 * Initializes a new instance of the ContentKeyPolicyWidevineConfiguration class.
 * @constructor
 * Specifies a configuration for Widevine licenses.
 *
 * @member {string} widevineTemplate The Widevine template.
 */
export interface ContentKeyPolicyWidevineConfiguration extends ContentKeyPolicyConfiguration {
  widevineTemplate: string;
}

/**
 * @class
 * Initializes a new instance of the ContentKeyPolicyPlayReadyConfiguration class.
 * @constructor
 * Specifies a configuration for PlayReady licenses.
 *
 * @member {array} licenses The PlayReady licenses.
 * @member {string} [responseCustomData] The custom response data.
 */
export interface ContentKeyPolicyPlayReadyConfiguration extends ContentKeyPolicyConfiguration {
  licenses: ContentKeyPolicyPlayReadyLicense[];
  responseCustomData?: string;
}

/**
 * @class
 * Initializes a new instance of the ContentKeyPolicyFairPlayConfiguration class.
 * @constructor
 * Specifies a configuration for FairPlay licenses.
 *
 * @member {buffer} ask The key that must be used as FairPlay ASk.
 * @member {string} fairPlayPfxPassword The password encrypting FairPlay
 * certificate in PKCS 12 (pfx) format.
 * @member {string} fairPlayPfx The Base64 representation of FairPlay
 * certificate in PKCS 12 (pfx) format (including private key).
 * @member {string} rentalAndLeaseKeyType The rental and lease key type.
 * Possible values include: 'Unknown', 'Undefined', 'PersistentUnlimited',
 * 'PersistentLimited'
 * @member {number} rentalDuration The rental duration. Must be greater than or
 * equal to 0.
 */
export interface ContentKeyPolicyFairPlayConfiguration extends ContentKeyPolicyConfiguration {
  ask: Buffer;
  fairPlayPfxPassword: string;
  fairPlayPfx: string;
  rentalAndLeaseKeyType: string;
  rentalDuration: number;
}

/**
 * @class
 * Initializes a new instance of the ContentKeyPolicyOption class.
 * @constructor
 * Represents a policy option.
 *
 * @member {uuid} [policyOptionId] The legacy Policy Option ID.
 * @member {string} [name] The Policy Option description.
 * @member {object} configuration The key delivery configuration.
 * @member {string} [configuration.odatatype] Polymorphic Discriminator
 * @member {object} restriction The requirements that must be met to deliver
 * keys with this configuration
 * @member {string} [restriction.odatatype] Polymorphic Discriminator
 */
export interface ContentKeyPolicyOption {
  readonly policyOptionId?: string;
  name?: string;
  configuration: ContentKeyPolicyConfiguration;
  restriction: ContentKeyPolicyRestriction;
}

/**
 * @class
 * Initializes a new instance of the ContentKeyPolicyProperties class.
 * @constructor
 * The properties of the Content Key Policy.
 *
 * @member {uuid} [policyId] The legacy Policy ID.
 * @member {date} [created] The creation date of the Policy
 * @member {date} [lastModified] The last modified date of the Policy
 * @member {string} [description] A description for the Policy.
 * @member {array} options The Key Policy options.
 */
export interface ContentKeyPolicyProperties {
  readonly policyId?: string;
  readonly created?: Date;
  readonly lastModified?: Date;
  description?: string;
  options: ContentKeyPolicyOption[];
}

/**
 * @class
 * Initializes a new instance of the ContentKeyPolicy class.
 * @constructor
 * A Content Key Policy resource.
 *
 * @member {uuid} [policyId] The legacy Policy ID.
 * @member {date} [created] The creation date of the Policy
 * @member {date} [lastModified] The last modified date of the Policy
 * @member {string} [description] A description for the Policy.
 * @member {array} options The Key Policy options.
 */
export interface ContentKeyPolicy extends ProxyResource {
  readonly policyId?: string;
  readonly created?: Date;
  readonly lastModified?: Date;
  description?: string;
  options: ContentKeyPolicyOption[];
}

/**
 * @class
 * Initializes a new instance of the Preset class.
 * @constructor
 * Base type for all Presets, which define the recipe or instructions on how
 * the input media files should be processed.
 *
 * @member {string} odatatype Polymorphic Discriminator
 */
export interface Preset {
  odatatype: string;
}

/**
 * @class
 * Initializes a new instance of the Codec class.
 * @constructor
 * Describes the basic properties of all codecs.
 *
 * @member {string} [label] Describes the optional label for the codec.
 * @member {string} odatatype Polymorphic Discriminator
 */
export interface Codec {
  label?: string;
  odatatype: string;
}

/**
 * @class
 * Initializes a new instance of the Audio class.
 * @constructor
 * Defines the common properties for all audio codecs.
 *
 * @member {number} [channels] Gets or sets number of channels in the Audio.
 * @member {number} [samplingRate] Gets or sets the sampling rate to use for
 * encoding.
 * @member {number} [bitrate] Gets or sets the bitrate of the encoded audio.
 */
export interface Audio extends Codec {
  channels?: number;
  samplingRate?: number;
  bitrate?: number;
}

/**
 * @class
 * Initializes a new instance of the AacAudio class.
 * @constructor
 * Describes Advanced Audio Codec or AAC audio encoding settings.
 *
 * @member {string} [profile] Gets or sets the encoding profile to be used when
 * encoding audio with AAC. Possible values include: 'AacLc', 'HeAacV1',
 * 'HeAacV2'
 */
export interface AacAudio extends Audio {
  profile?: string;
}

/**
 * @class
 * Initializes a new instance of the AudioAnalyzerPreset class.
 * @constructor
 * The Audio Analyzer preset applies a pre-defined set of AI-based analysis
 * operations, including speech transcription, on the input.
 *
 * @member {string} [audioLanguage] Specifies the language for the audio
 * payload in the input. Typically in the format of "language
 * code-country/region" (e.g: "en-US").
 */
export interface AudioAnalyzerPreset extends Preset {
  audioLanguage?: string;
}

/**
 * @class
 * Initializes a new instance of the Overlay class.
 * @constructor
 * Base type for all overlays - image, audio or video.
 *
 * @member {string} [inputLabel] Gets or sets the label of the Input which is
 * to be used as an Overlay. The Input must specify exactly one file.
 * @member {boolean} [inputLoop] Gets or sets a value indicating whether the
 * overlay media is looped to match the duration of the input video. The
 * default is true. For example, you may have a 5 second animation that needs
 * to be overlaid onto an hour-long video - you would set inputLoop to true in
 * this case.
 * @member {moment.duration} [start] Gets or sets the start position, with
 * reference to the input video, at which the overlay starts. The value should
 * be in ISO 8601 format. The default is zero, which means the overlay starts
 * from the beginning of the input video.
 * @member {moment.duration} [end] Gets or sets the position in the input video
 * at which the overlay ends. The value should be in ISO 8601 format. The
 * default behavior is that overlay will be applied until the end of the input
 * video if InputLoop is true. Else, if inputLoop is false, then overlay will
 * last as long as the duration of the overlay media.
 * @member {moment.duration} [fadeInDuration] Gets or sets the duration over
 * which the overlay fades in onto the input video. The value should be in ISO
 * 8601 format. The default is to have no fade in
 * @member {moment.duration} [fadeOutDuration] Gets or sets the duration over
 * which the overlay fades out of the input video. The value should be in ISO
 * 8601 format. The default is to have no fade out."
 * @member {number} [audioGainLevel] Gets or sets the gain level of audio in
 * the overlay. The value should be in the range [0, ..., 1.0]. Defaults to a
 * value of 1.0.
 * @member {string} odatatype Polymorphic Discriminator
 */
export interface Overlay {
  inputLabel?: string;
  inputLoop?: boolean;
  start?: moment.Duration;
  end?: moment.Duration;
  fadeInDuration?: moment.Duration;
  fadeOutDuration?: moment.Duration;
  audioGainLevel?: number;
  odatatype: string;
}

/**
 * @class
 * Initializes a new instance of the AudioOverlay class.
 * @constructor
 * Describes the properties of an audio overlay.
 *
 */
export interface AudioOverlay extends Overlay {
}

/**
 * @class
 * Initializes a new instance of the CopyVideo class.
 * @constructor
 * A special codec flag, which tells the encoder to simply copy the input video
 * bitstream.
 *
 */
export interface CopyVideo extends Codec {
}

/**
 * @class
 * Initializes a new instance of the Video class.
 * @constructor
 * Describes the basic properties for encoding a video.
 *
 * @member {moment.duration} [keyFrameInterval] Describes the distance between
 * one key frame and the next, thereby defining a GOP or group of pictures. The
 * value should be a non-zero integer in the range [1, .., 30], specified in
 * ISO 8601 format. The default is 2 seconds.
 * @member {string} [stretchMode] Describes the resizing mode - how the input
 * video will be resized to fit the desired output resolution(s). Default is
 * AutoSize. Possible values include: 'None', 'AutoSize', 'AutoFit'
 */
export interface Video extends Codec {
  keyFrameInterval?: moment.Duration;
  stretchMode?: string;
}

/**
 * @class
 * Initializes a new instance of the Image class.
 * @constructor
 * Describes the basic properties for generating thumbnails from the input
 * video
 *
 * @member {string} [start] Describes the position in the input video from
 * where to start generating thumbnails. The value can be in absolute timestamp
 * (ISO 8601, e.g: PT05S), or a frame count (e.g: 10 for the 10th frame), or a
 * relative value (e.g: 1%). Also supports a special value {Best}, which tells
 * the encoder to select the best thumbnail from the first few seconds of the
 * video.
 * @member {string} [step] Describes the intervals at which thumbnails are
 * generated. The value can be in absolute timestamp (ISO 8601, e.g: PT05S for
 * one image every 5 seconds), or a frame count (e.g: 30 for every 30 frames),
 * or a relative value (e.g: 1%).
 * @member {string} [range] Describes the position in the input video at which
 * to stop generating thumbnails. The value can be in absolute timestamp (ISO
 * 8601, e.g: PT5M30S to stop at 5 minutes and 30 seconds), or a frame count
 * (e.g: 300 to stop at the 300th frame), or a relative value (e.g: 100%).
 */
export interface Image extends Video {
  start?: string;
  step?: string;
  range?: string;
}

/**
 * @class
 * Initializes a new instance of the Format class.
 * @constructor
 * Base class for output.
 *
 * @member {string} [filenamePattern] Describes the pattern of the file names
 * for the generated output files. The following macros are supported in the
 * file name: {Basename} - The base name of the input video {Extension} - The
 * appropriate extension for this format. {Label} - The label assigned to the
 * codec/layer. {Index} - A unique index for thumbnails. Only applicable to
 * thumbnails. {Bitrate} - The audio/video bitrate. Not applicable to
 * thumbnails. {Codec} - The type of the audio/video codec. Any unsubstituted
 * macros will be collapsed and removed from the filename.
 * @member {string} odatatype Polymorphic Discriminator
 */
export interface Format {
  filenamePattern?: string;
  odatatype: string;
}

/**
 * @class
 * Initializes a new instance of the ImageFormat class.
 * @constructor
 * Describes the properties for an output image file.
 *
 */
export interface ImageFormat extends Format {
}

/**
 * @class
 * Initializes a new instance of the JpgFormat class.
 * @constructor
 * Describes the settings for producing JPEG thumbnails.
 *
 */
export interface JpgFormat extends ImageFormat {
}

/**
 * @class
 * Initializes a new instance of the PngFormat class.
 * @constructor
 * Describes the settings to produce PNG thumbnail output.
 *
 */
export interface PngFormat extends ImageFormat {
}

/**
 * @class
 * Initializes a new instance of the BmpImage class.
 * @constructor
 * Describes the basic properties for generating BMP thumbnails from the input
 * video.
 *
 */
export interface BmpImage extends Image {
}

/**
 * @class
 * Initializes a new instance of the Layer class.
 * @constructor
 * Describes the basic properties for an output video layer.
 *
 * @member {string} [width] Describes the width of the output video for this
 * layer. The value can be absolute (in pixels) or relative (in percentage).
 * For example 50% means the output video has half as many pixels in width as
 * the input.
 * @member {string} [height] Describes the height of the output video for this
 * layer. The value can be absolute (in pixels) or relative (in percentage).
 * For example 50% means the output video has half as many pixels in height as
 * the input.
 * @member {string} [label] Describes the alphanumeric label for this layer,
 * which can be used in multiplexing different video and audio layers, or in
 * naming the output file.
 * @member {string} odatatype Polymorphic Discriminator
 */
export interface Layer {
  width?: string;
  height?: string;
  label?: string;
  odatatype: string;
}

/**
 * @class
 * Initializes a new instance of the BmpLayer class.
 * @constructor
 * This represents a layer in the BmpImage class.
 *
 */
export interface BmpLayer extends Layer {
}

/**
 * @class
 * Initializes a new instance of the CopyAudio class.
 * @constructor
 * A special codec flag, which tells the encoder to simply copy the input audio
 * bitstream.
 *
 */
export interface CopyAudio extends Codec {
}

/**
 * @class
 * Initializes a new instance of the Deinterlace class.
 * @constructor
 * Describes the de-interlacing settings.
 *
 * @member {string} [parity] Describes the field parity for de-interlacing,
 * defaults to Auto. Possible values include: 'Auto', 'TopFieldFirst',
 * 'BottomFieldFirst'
 * @member {string} [mode] Describes the deinterlacing mode, defaults to
 * AutoPixelAdaptive. Possible values include: 'Off', 'AutoPixelAdaptive'
 */
export interface Deinterlace {
  parity?: string;
  mode?: string;
}

/**
 * @class
 * Initializes a new instance of the Rectangle class.
 * @constructor
 * Describes the properties of a rectangular window applied to the input media
 * before processing it.
 *
 * @member {string} [left] Describes the number of pixels from the left-margin.
 * This can be absolute pixel value (e.g 100), or relative to the size of the
 * video (e.g: 50%).
 * @member {string} [top] Describes the number of pixels from the top-margin.
 * This can be absolute pixel value (e.g 100), or relative to the size of the
 * video (e.g: 50%).
 * @member {string} [width] Describes the width of the rectangular region in
 * pixels. This can be absolute pixel value (e.g 100), or relative to the size
 * of the video (e.g: 50%).
 * @member {string} [height] Describes the height of the rectangular region in
 * pixels. This can be absolute pixel value (e.g 100), or relative to the size
 * of the video (e.g: 50%).
 */
export interface Rectangle {
  left?: string;
  top?: string;
  width?: string;
  height?: string;
}

/**
 * @class
 * Initializes a new instance of the Filters class.
 * @constructor
 * Describes all the filtering operations that are to be applied to the input
 * video before encoding.
 *
 * @member {object} [deinterlace] Describes the de-interlacing settings.
 * @member {string} [deinterlace.parity] Describes the field parity for
 * de-interlacing, defaults to Auto. Possible values include: 'Auto',
 * 'TopFieldFirst', 'BottomFieldFirst'
 * @member {string} [deinterlace.mode] Describes the deinterlacing mode,
 * defaults to AutoPixelAdaptive. Possible values include: 'Off',
 * 'AutoPixelAdaptive'
 * @member {string} [rotation] Describes the rotation, if any, to be applied to
 * the input video, before it is encoded. Possible values include: 'Auto',
 * 'None', 'Rotate0', 'Rotate90', 'Rotate180', 'Rotate270'
 * @member {object} [crop] Describes the parameters for the rectangular window
 * with which to crop the input video.
 * @member {string} [crop.left] Describes the number of pixels from the
 * left-margin. This can be absolute pixel value (e.g 100), or relative to the
 * size of the video (e.g: 50%).
 * @member {string} [crop.top] Describes the number of pixels from the
 * top-margin. This can be absolute pixel value (e.g 100), or relative to the
 * size of the video (e.g: 50%).
 * @member {string} [crop.width] Describes the width of the rectangular region
 * in pixels. This can be absolute pixel value (e.g 100), or relative to the
 * size of the video (e.g: 50%).
 * @member {string} [crop.height] Describes the height of the rectangular
 * region in pixels. This can be absolute pixel value (e.g 100), or relative to
 * the size of the video (e.g: 50%).
 * @member {array} [overlays] Describes the properties of overlays to be
 * applied to the input video. These could be audio, image or video overlays.
 */
export interface Filters {
  deinterlace?: Deinterlace;
  rotation?: string;
  crop?: Rectangle;
  overlays?: Overlay[];
}

/**
 * @class
 * Initializes a new instance of the VideoLayer class.
 * @constructor
 * Describes the settings to be used when encoding the input video into a
 * desired output bitrate layer.
 *
 * @member {number} [bitrate] Describes the average bitrate (in bits per
 * second) at which to encode the input video when generating this layer. This
 * is a required field.
 * @member {number} [maxBitrate] Describes the maximum bitrate (in bits per
 * second), at which the VBV buffer should be assumed to refill. If not
 * specified, defaults to the same value as bitrate.
 * @member {number} [bFrames] Describes the number of B-frames to be used when
 * encoding this layer. If not specified, the encoder chooses an appropriate
 * number based on the video Profile and Level.
 * @member {string} [frameRate] Describes the frame rate (in frames per second)
 * at which to encode this layer. The value can be in the form of M/N where M
 * and N are integers (e.g. 30000/1001), or in the form of a number (e.g. 30,
 * or 29.97). The encoder enforces constraints on allowed frame rates based on
 * the Profile and Level. If it is not specified, the encoder will use the same
 * frame rate as the input video.
 * @member {number} [slices] Describes the number of slices to be used when
 * encoding this layer. If not specified, default is zero, which means that
 * encoder will use a single slice for each frame.
 * @member {boolean} [adaptiveBFrame] Determines whether or not adaptive
 * B-frames are to be used when encoding this layer. If not specified, the
 * encoder will turn it on whenever the video Profile permits its use.
 */
export interface VideoLayer extends Layer {
  bitrate?: number;
  maxBitrate?: number;
  bFrames?: number;
  frameRate?: string;
  slices?: number;
  adaptiveBFrame?: boolean;
}

/**
 * @class
 * Initializes a new instance of the H264Layer class.
 * @constructor
 * Describes the settings to be used when encoding the input video into a
 * desired output bitrate layer with the H264 video codec.
 *
 * @member {string} [profile] Describes which Profile of the H.264 standard
 * should be used when encoding this layer. Default is Auto. Possible values
 * include: 'Auto', 'Baseline', 'Main', 'High', 'High422', 'High444'
 * @member {string} [level] Describes which Level of the H.264 standard should
 * be used when encoding this layer. The value can be Auto, or a number that
 * matches the H264 Profile. If not specified, the default is Auto, which lets
 * the encoder choose the Level that is appropriate for this layer.
 * @member {moment.duration} [bufferWindow] Describes the VBV buffer window
 * length. The value should be in ISO 8601 format. The default is PT5S or 5
 * seconds.
 * @member {number} [referenceFrames] Describes the number of reference frames
 * to be used when encoding this layer. If not specified, the encoder
 * determines an appropriate number based on the encoder complexity setting.
 * @member {string} [entropyMode] Describes the entropy mode to be used for
 * this layer. If not specified, the encoder chooses the mode that is
 * appropriate for the Profile and Level. Possible values include: 'Cabac',
 * 'Cavlc'
 */
export interface H264Layer extends VideoLayer {
  profile?: string;
  level?: string;
  bufferWindow?: moment.Duration;
  referenceFrames?: number;
  entropyMode?: string;
}

/**
 * @class
 * Initializes a new instance of the H264Video class.
 * @constructor
 * Describes all the properties for encoding a video with the H264 codec.
 *
 * @member {boolean} [sceneChangeDetection] Determines whether or not the
 * encoder should insert key frames at scene changes. If not specified, the
 * default is false.
 * @member {string} [complexity] Tells the encoder how to choose its low-level
 * settings. The default is Balanced. Possible values include: 'Speed',
 * 'Balanced', 'Quality'
 * @member {array} [layers] Describes a collection of output H264 layers to be
 * produced by the encoder.
 */
export interface H264Video extends Video {
  sceneChangeDetection?: boolean;
  complexity?: string;
  layers?: H264Layer[];
}

/**
 * @class
 * Initializes a new instance of the JpgLayer class.
 * @constructor
 * Describes the settings to produce a JPEG image from the input video.
 *
 * @member {number} [quality] Describes the compression quality of the JPEG
 * output. Range is from 0-100 and the default is 70.
 */
export interface JpgLayer extends Layer {
  quality?: number;
}

/**
 * @class
 * Initializes a new instance of the JpgImage class.
 * @constructor
 * Describes the properties for producing a series of JPEG images from the
 * input video.
 *
 * @member {array} [layers] Describes a collection of output JPEG layers to be
 * produced by the encoder.
 */
export interface JpgImage extends Image {
  layers?: JpgLayer[];
}

/**
 * @class
 * Initializes a new instance of the OutputFile class.
 * @constructor
 * Represents an output file produced.
 *
 * @member {array} [trackLabels] Describes the list of track labels that would
 * be muxed together to produce the file.
 */
export interface OutputFile {
  trackLabels?: string[];
}

/**
 * @class
 * Initializes a new instance of the MultiBitrateFormat class.
 * @constructor
 * Describes the properties for producing a collection of GOP aligned multi
 * bitrate files.
 *
 * @member {array} [outputFiles] Describes a list of output files to produce.
 * Each entry in the list is a set of labels to be muxed together .
 */
export interface MultiBitrateFormat extends Format {
  outputFiles?: OutputFile[];
}

/**
 * @class
 * Initializes a new instance of the Mp4Format class.
 * @constructor
 * Describes the properties for an output ISO MP4 file.
 *
 */
export interface Mp4Format extends MultiBitrateFormat {
}

/**
 * @class
 * Initializes a new instance of the PngLayer class.
 * @constructor
 * Describes the settings to produce a PNG image from the input video.
 *
 */
export interface PngLayer extends Layer {
}

/**
 * @class
 * Initializes a new instance of the PngImage class.
 * @constructor
 * This class represents a video encoder which outputs a sequence of Png
 * images.
 *
 * @member {array} [layers] Describes a collection of output PNG layers to be
 * produced by the encoder.
 */
export interface PngImage extends Image {
  layers?: PngLayer[];
}

/**
 * @class
 * Initializes a new instance of the BuiltInStandardEncoderPreset class.
 * @constructor
 * Describes a built-in preset for encoding the input video with the Standard
 * Encoder.
 *
 * @member {string} presetName Describes the built-in prese to be used for
 * encoding videos. Possible values include: 'AdaptiveStreaming',
 * 'AACGoodQualityAudio', 'H264MultipleBitrate1080p',
 * 'H264MultipleBitrate720p', 'H264MultipleBitrateSD'
 */
export interface BuiltInStandardEncoderPreset extends Preset {
  presetName: string;
}

/**
 * @class
 * Initializes a new instance of the StandardEncoderPreset class.
 * @constructor
 * Describes all the settings to be used when encoding the input video with the
 * Standard Encoder.
 *
 * @member {object} [filters] Describes the default set of filters to be
 * applied to all the input media (except overlays). Describes operations like
 * rotation, deinterlacing and overlays.
 * @member {object} [filters.deinterlace] Describes the de-interlacing
 * settings.
 * @member {string} [filters.deinterlace.parity] Describes the field parity for
 * de-interlacing, defaults to Auto. Possible values include: 'Auto',
 * 'TopFieldFirst', 'BottomFieldFirst'
 * @member {string} [filters.deinterlace.mode] Describes the deinterlacing
 * mode, defaults to AutoPixelAdaptive. Possible values include: 'Off',
 * 'AutoPixelAdaptive'
 * @member {string} [filters.rotation] Describes the rotation, if any, to be
 * applied to the input video, before it is encoded. Possible values include:
 * 'Auto', 'None', 'Rotate0', 'Rotate90', 'Rotate180', 'Rotate270'
 * @member {object} [filters.crop] Describes the parameters for the rectangular
 * window with which to crop the input video.
 * @member {string} [filters.crop.left] Describes the number of pixels from the
 * left-margin. This can be absolute pixel value (e.g 100), or relative to the
 * size of the video (e.g: 50%).
 * @member {string} [filters.crop.top] Describes the number of pixels from the
 * top-margin. This can be absolute pixel value (e.g 100), or relative to the
 * size of the video (e.g: 50%).
 * @member {string} [filters.crop.width] Describes the width of the rectangular
 * region in pixels. This can be absolute pixel value (e.g 100), or relative to
 * the size of the video (e.g: 50%).
 * @member {string} [filters.crop.height] Describes the height of the
 * rectangular region in pixels. This can be absolute pixel value (e.g 100), or
 * relative to the size of the video (e.g: 50%).
 * @member {array} [filters.overlays] Describes the properties of overlays to
 * be applied to the input video. These could be audio, image or video
 * overlays.
 * @member {array} [codecs] Describes the list of codecs to be used when
 * encoding the input video.
 * @member {array} [formats] Describes the list of outputs to be produced by
 * the encoder.
 */
export interface StandardEncoderPreset extends Preset {
  filters?: Filters;
  codecs?: Codec[];
  formats?: Format[];
}

/**
 * @class
 * Initializes a new instance of the VideoAnalyzerPreset class.
 * @constructor
 * A video analyzer preset that analyzes both audio and video.
 *
 * @member {boolean} [audioInsightsOnly] Gets or sets whether to get insights
 * for audio only.
 */
export interface VideoAnalyzerPreset extends AudioAnalyzerPreset {
  audioInsightsOnly?: boolean;
}

/**
 * @class
 * Initializes a new instance of the TransportStreamFormat class.
 * @constructor
 * Describes the properties for generating an ISO/IEC 13818-1, MPEG-2 Transport
 * Stream output.
 *
 */
export interface TransportStreamFormat extends MultiBitrateFormat {
}

/**
 * @class
 * Initializes a new instance of the VideoOverlay class.
 * @constructor
 * Describes the properties of a video overlay.
 *
 * @member {object} [position] Describes the area in the input video where the
 * overlay is applied.
 * @member {string} [position.left] Describes the number of pixels from the
 * left-margin. This can be absolute pixel value (e.g 100), or relative to the
 * size of the video (e.g: 50%).
 * @member {string} [position.top] Describes the number of pixels from the
 * top-margin. This can be absolute pixel value (e.g 100), or relative to the
 * size of the video (e.g: 50%).
 * @member {string} [position.width] Describes the width of the rectangular
 * region in pixels. This can be absolute pixel value (e.g 100), or relative to
 * the size of the video (e.g: 50%).
 * @member {string} [position.height] Describes the height of the rectangular
 * region in pixels. This can be absolute pixel value (e.g 100), or relative to
 * the size of the video (e.g: 50%).
 * @member {number} [opacity] Describes the opacity of the overlay. This is a
 * value in the range [0 - 1.0]. Default is 1.0
 * @member {object} [cropRectangle] Describes the an optional rectangular
 * window used to crop the overlay image or video.
 * @member {string} [cropRectangle.left] Describes the number of pixels from
 * the left-margin. This can be absolute pixel value (e.g 100), or relative to
 * the size of the video (e.g: 50%).
 * @member {string} [cropRectangle.top] Describes the number of pixels from the
 * top-margin. This can be absolute pixel value (e.g 100), or relative to the
 * size of the video (e.g: 50%).
 * @member {string} [cropRectangle.width] Describes the width of the
 * rectangular region in pixels. This can be absolute pixel value (e.g 100), or
 * relative to the size of the video (e.g: 50%).
 * @member {string} [cropRectangle.height] Describes the height of the
 * rectangular region in pixels. This can be absolute pixel value (e.g 100), or
 * relative to the size of the video (e.g: 50%).
 */
export interface VideoOverlay extends Overlay {
  position?: Rectangle;
  opacity?: number;
  cropRectangle?: Rectangle;
}

/**
 * @class
 * Initializes a new instance of the TransformOutput class.
 * @constructor
 * Describes an Output from the Transform
 *
 * @member {string} [onError] Describes what to do if the output fails with the
 * rest of the other outputs. The default is stop the rest of the outputs.
 * Possible values include: 'StopProcessingJob', 'ContinueJob'
 * @member {string} [relativePriority] Sets the relative priority of the
 * TransformOutputs within a Transform. This gives a hint to the system that
 * one TransformOutput is higher priority than another in the same Transform.
 * The default is normal. Possible values include: 'Low', 'Normal', 'High'
 * @member {object} preset Preset that describes the Media Processor operation
 * that will be used to generate the output.
 * @member {string} [preset.odatatype] Polymorphic Discriminator
 */
export interface TransformOutput {
  onError?: string;
  relativePriority?: string;
  preset: Preset;
}

/**
 * @class
 * Initializes a new instance of the AvailablePresets class.
 * @constructor
 * The response message for available presets.
 *
 * @member {array} [presets] Lists the available presets
 */
export interface AvailablePresets {
  presets?: string[];
}

/**
 * @class
 * Initializes a new instance of the Transform class.
 * @constructor
 * A Media Transform that can be applied to an input by creating Jobs.
 *
 * @member {date} [created] The date and time when the Transform was created.
 * @member {string} [description] Customer supplied description of the
 * transform.
 * @member {date} [lastModified] The date and time when the Transform was last
 * updated.
 * @member {array} outputs The outputs for the Transform.
 */
export interface Transform extends ProxyResource {
  readonly created?: Date;
  description?: string;
  readonly lastModified?: Date;
  outputs: TransformOutput[];
}

/**
 * @class
 * Initializes a new instance of the JobInput class.
 * @constructor
 * Base class for inputs to a Job.
 *
 * @member {string} [label] Customer provided label of the JobInput.
 * @member {string} odatatype Polymorphic Discriminator
 */
export interface JobInput {
  label?: string;
  odatatype: string;
}

/**
 * @class
 * Initializes a new instance of the JobInputClip class.
 * @constructor
 * Represents Job Inputs that can have a start or end time specified to take a
 * subset of the specified media.
 *
 * @member {array} [files] List of files.  Required for JobInputAzureBlob. It
 * optionally can be used for JobInputAsset to tell the service to only use the
 * files specified from the Asset.
 */
export interface JobInputClip extends JobInput {
  files?: string[];
}

/**
 * @class
 * Initializes a new instance of the JobInputs class.
 * @constructor
 * Supports list of inputs to a Job.
 *
 * @member {array} [inputs] List of Job inputs.
 */
export interface JobInputs extends JobInput {
  inputs?: JobInput[];
}

/**
 * @class
 * Initializes a new instance of the JobInputAsset class.
 * @constructor
 * Represents an Asset for input into a Job.
 *
 * @member {string} assetName The name of input Asset.
 */
export interface JobInputAsset extends JobInputClip {
  assetName: string;
}

/**
 * @class
 * Initializes a new instance of the JobInputHttp class.
 * @constructor
 * Represents http job input.
 *
 * @member {string} [baseUri] Base uri for http job input. It will be
 * concatenated with provided file names.   If no base uri is given, then the
 * provided file list is assumed to be fully qualified uris.
 */
export interface JobInputHttp extends JobInputClip {
  baseUri?: string;
}

/**
 * @class
 * Initializes a new instance of the JobErrorDetail class.
 * @constructor
 * Details of JobOutput errors.
 *
 * @member {string} [code] Code describing the error detail.
 * @member {string} [message] A human-readable representation of the error.
 */
export interface JobErrorDetail {
  readonly code?: string;
  readonly message?: string;
}

/**
 * @class
 * Initializes a new instance of the JobError class.
 * @constructor
 * Details of JobOutput errors.
 *
 * @member {string} [code] Code describing the error. Possible values include:
 * 'ServiceError', 'ServiceTransientError', 'DownloadNotAccessible',
 * 'DownloadTransientError', 'UploadNotAccessible', 'UploadTransientError',
 * 'ConfigurationUnsupported', 'ContentMalformed', 'ContentUnsupported'
 * @member {string} [message] A human-readable language-dependent
 * representation of the error.
 * @member {string} [category] Category to help caller categorize the error.
 * Possible values include: 'Service', 'Download', 'Upload', 'Configuration',
 * 'Content'
 * @member {string} [retry] Indication that the job may be retried. If retry is
 * unsuccessful, please contact support. Possible values include: 'DoNotRetry',
 * 'MayRetry'
 * @member {array} [details] An array of details about specific errors that led
 * to this reported error.
 */
export interface JobError {
  readonly code?: string;
  readonly message?: string;
  readonly category?: string;
  readonly retry?: string;
  readonly details?: JobErrorDetail[];
}

/**
 * @class
 * Initializes a new instance of the JobOutput class.
 * @constructor
 * Base class for the output of a Job.
 *
 * @member {object} [error] If the JobOutput is in the error state, it contains
 * the details of the error.
 * @member {string} [error.code] Code describing the error. Possible values
 * include: 'ServiceError', 'ServiceTransientError', 'DownloadNotAccessible',
 * 'DownloadTransientError', 'UploadNotAccessible', 'UploadTransientError',
 * 'ConfigurationUnsupported', 'ContentMalformed', 'ContentUnsupported'
 * @member {string} [error.message] A human-readable language-dependent
 * representation of the error.
 * @member {string} [error.category] Category to help caller categorize the
 * error. Possible values include: 'Service', 'Download', 'Upload',
 * 'Configuration', 'Content'
 * @member {string} [error.retry] Indication that the job may be retried. If
 * retry is unsuccessful, please contact support. Possible values include:
 * 'DoNotRetry', 'MayRetry'
 * @member {array} [error.details] An array of details about specific errors
 * that led to this reported error.
 * @member {string} [state] State of the JobOutput. Possible values include:
 * 'Canceled', 'Canceling', 'Error', 'Finished', 'Processing', 'Queued',
 * 'Scheduled'
 * @member {number} [progress] If the JobOutput is in the processing state, it
 * contains the percentage of the job completed from 0 to 100 percent.
 * @member {string} odatatype Polymorphic Discriminator
 */
export interface JobOutput {
  readonly error?: JobError;
  readonly state?: string;
  readonly progress?: number;
  odatatype: string;
}

/**
 * @class
 * Initializes a new instance of the JobOutputAsset class.
 * @constructor
 * Represents an Asset used as a JobOutput.
 *
 * @member {string} assetName The name of the output Asset.
 */
export interface JobOutputAsset extends JobOutput {
  assetName: string;
}

/**
 * @class
 * Initializes a new instance of the Job class.
 * @constructor
 * A Job resource type.
 *
 * @member {date} [created] The date and time when the Job was created.
 * @member {string} [state] The current state of the job. Possible values
 * include: 'Canceled', 'Canceling', 'Error', 'Finished', 'Processing',
 * 'Queued', 'Scheduled'
 * @member {string} [description] The customer supplied description of the Job.
 * @member {object} input The inputs for the Job.
 * @member {string} [input.label] Customer provided label of the JobInput.
 * @member {string} [input.odatatype] Polymorphic Discriminator
 * @member {date} [lastModified] The date and time when the Job was last
 * updated.
 * @member {array} outputs The outputs for the Job.
 * @member {string} [priority] Priority with which the job should be processed.
 * Higher priority jobs are processed before lower priority jobs if there is
 * resource contention. If not set, the default is normal. Possible values
 * include: 'Low', 'Normal', 'High'
 */
export interface Job extends ProxyResource {
  readonly created?: Date;
  readonly state?: string;
  description?: string;
  input: JobInput;
  readonly lastModified?: Date;
  outputs: JobOutput[];
  priority?: string;
}

/**
 * @class
 * Initializes a new instance of the TrackPropertyCondition class.
 * @constructor
 * Class to specify one track property condition
 *
 * @member {string} property Track property type. Possible values include:
 * 'Unknown', 'FourCC'
 * @member {string} operation Track property condition operation. Possible
 * values include: 'Unknown', 'Equal'
 * @member {string} [value] Track proprty value
 */
export interface TrackPropertyCondition {
  property: string;
  operation: string;
  value?: string;
}

/**
 * @class
 * Initializes a new instance of the TrackSelection class.
 * @constructor
 * Class to select a track
 *
 * @member {array} [trackSelections] TrackSelections is a track property
 * condition list which can specify track(s)
 */
export interface TrackSelection {
  trackSelections?: TrackPropertyCondition[];
}

/**
 * @class
 * Initializes a new instance of the DefaultKey class.
 * @constructor
 * Class to specify properties of default content key for each encryption
 * scheme
 *
 * @member {string} [label] Label can be used to specify Content Key when
 * creating Stremaing Locator
 * @member {string} [policyName] Policy used by Default Key
 */
export interface DefaultKey {
  label?: string;
  policyName?: string;
}

/**
 * @class
 * Initializes a new instance of the StreamingPolicyContentKey class.
 * @constructor
 * Class to specify properties of content key
 *
 * @member {string} [label] Label can be used to specify Content Key when
 * creating Stremaing Locator
 * @member {string} [policyName] Policy used by Content Key
 * @member {array} [tracks] Tracks which use this content key
 */
export interface StreamingPolicyContentKey {
  label?: string;
  policyName?: string;
  tracks?: TrackSelection[];
}

/**
 * @class
 * Initializes a new instance of the StreamingPolicyContentKeys class.
 * @constructor
 * Class to specify properties of all content keys in Streaming Policy
 *
 * @member {object} [defaultKey] Default content key for an encryption scheme
 * @member {string} [defaultKey.label] Label can be used to specify Content Key
 * when creating Stremaing Locator
 * @member {string} [defaultKey.policyName] Policy used by Default Key
 * @member {array} [keyToTrackMappings] Representing tracks needs sepearete
 * content key
 */
export interface StreamingPolicyContentKeys {
  defaultKey?: DefaultKey;
  keyToTrackMappings?: StreamingPolicyContentKey[];
}

/**
 * @class
 * Initializes a new instance of the StreamingPolicyPlayReadyConfiguration class.
 * @constructor
 * Class to specify configurations of PlayReady in Streaming Policy
 *
 * @member {string} [customLicenseAcquisitionUrlTemplate] The template for a
 * customer service to deliver keys to end users.  Not needed if using the
 * built in Key Delivery service.
 * @member {string} [playReadyCustomAttributes] Custom attributes for PlayReady
 */
export interface StreamingPolicyPlayReadyConfiguration {
  customLicenseAcquisitionUrlTemplate?: string;
  playReadyCustomAttributes?: string;
}

/**
 * @class
 * Initializes a new instance of the StreamingPolicyWidevineConfiguration class.
 * @constructor
 * Class to specify configurations of Widevine in Streaming Policy
 *
 * @member {string} [customLicenseAcquisitionUrlTemplate] The template for a
 * customer service to deliver keys to end users.  Not needed if using the
 * built in Key Delivery service.
 */
export interface StreamingPolicyWidevineConfiguration {
  customLicenseAcquisitionUrlTemplate?: string;
}

/**
 * @class
 * Initializes a new instance of the StreamingPolicyFairPlayConfiguration class.
 * @constructor
 * Class to specify configurations of FairPlay in Streaming Policy
 *
 * @member {string} [customLicenseAcquisitionUrlTemplate] The template for a
 * customer service to deliver keys to end users.  Not needed if using the
 * built in Key Delivery service.
 * @member {boolean} allowPersistentLicense All license to be persistent or not
 */
export interface StreamingPolicyFairPlayConfiguration {
  customLicenseAcquisitionUrlTemplate?: string;
  allowPersistentLicense: boolean;
}

/**
 * @class
 * Initializes a new instance of the CbcsDrmConfiguration class.
 * @constructor
 * Class to specify drm configurations of CommonEncryptionCbcs scheme in
 * Streaming Policy
 *
 * @member {object} [fairPlay] Fairplay configurations
 * @member {string} [fairPlay.customLicenseAcquisitionUrlTemplate] The template
 * for a customer service to deliver keys to end users.  Not needed if using
 * the built in Key Delivery service.
 * @member {boolean} [fairPlay.allowPersistentLicense] All license to be
 * persistent or not
 * @member {object} [playReady] PlayReady configurations
 * @member {string} [playReady.customLicenseAcquisitionUrlTemplate] The
 * template for a customer service to deliver keys to end users.  Not needed if
 * using the built in Key Delivery service.
 * @member {string} [playReady.playReadyCustomAttributes] Custom attributes for
 * PlayReady
 * @member {object} [widevine] Widevine configurations
 * @member {string} [widevine.customLicenseAcquisitionUrlTemplate] The template
 * for a customer service to deliver keys to end users.  Not needed if using
 * the built in Key Delivery service.
 */
export interface CbcsDrmConfiguration {
  fairPlay?: StreamingPolicyFairPlayConfiguration;
  playReady?: StreamingPolicyPlayReadyConfiguration;
  widevine?: StreamingPolicyWidevineConfiguration;
}

/**
 * @class
 * Initializes a new instance of the CencDrmConfiguration class.
 * @constructor
 * Class to specify drm configurations of CommonEncryptionCenc scheme in
 * Streaming Policy
 *
 * @member {object} [playReady] PlayReady configurations
 * @member {string} [playReady.customLicenseAcquisitionUrlTemplate] The
 * template for a customer service to deliver keys to end users.  Not needed if
 * using the built in Key Delivery service.
 * @member {string} [playReady.playReadyCustomAttributes] Custom attributes for
 * PlayReady
 * @member {object} [widevine] Widevine configurations
 * @member {string} [widevine.customLicenseAcquisitionUrlTemplate] The template
 * for a customer service to deliver keys to end users.  Not needed if using
 * the built in Key Delivery service.
 */
export interface CencDrmConfiguration {
  playReady?: StreamingPolicyPlayReadyConfiguration;
  widevine?: StreamingPolicyWidevineConfiguration;
}

/**
 * @class
 * Initializes a new instance of the EnabledProtocols class.
 * @constructor
 * Class to specify which protocols are enabled
 *
 * @member {boolean} download Enable Download protocol or not
 * @member {boolean} dash Enable Dash protocol or not
 * @member {boolean} hls Enable Hls protocol or not
 * @member {boolean} smoothStreaming Enable SmoothStreaming protocol or not
 */
export interface EnabledProtocols {
  download: boolean;
  dash: boolean;
  hls: boolean;
  smoothStreaming: boolean;
}

/**
 * @class
 * Initializes a new instance of the NoEncryption class.
 * @constructor
 * Class for NoEncryption scheme
 *
 * @member {object} [enabledProtocols] Representing supported protocols
 * @member {boolean} [enabledProtocols.download] Enable Download protocol or
 * not
 * @member {boolean} [enabledProtocols.dash] Enable Dash protocol or not
 * @member {boolean} [enabledProtocols.hls] Enable Hls protocol or not
 * @member {boolean} [enabledProtocols.smoothStreaming] Enable SmoothStreaming
 * protocol or not
 */
export interface NoEncryption {
  enabledProtocols?: EnabledProtocols;
}

/**
 * @class
 * Initializes a new instance of the EnvelopeEncryption class.
 * @constructor
 * Represents configuration specific to Dynamic Envelope Encryption.  This form
 * of encryption is also referred to as the AES-128 CBC Encryption System in
 * ISO/IEC 23009-4.
 *
 * @member {object} [enabledProtocols] Representing supported protocols
 * @member {boolean} [enabledProtocols.download] Enable Download protocol or
 * not
 * @member {boolean} [enabledProtocols.dash] Enable Dash protocol or not
 * @member {boolean} [enabledProtocols.hls] Enable Hls protocol or not
 * @member {boolean} [enabledProtocols.smoothStreaming] Enable SmoothStreaming
 * protocol or not
 * @member {array} [clearTracks] Representing which tracks should not be
 * encrypted
 * @member {object} [contentKeys] Representing default content key for each
 * encryption scheme and separate content keys for specific tracks
 * @member {object} [contentKeys.defaultKey] Default content key for an
 * encryption scheme
 * @member {string} [contentKeys.defaultKey.label] Label can be used to specify
 * Content Key when creating Stremaing Locator
 * @member {string} [contentKeys.defaultKey.policyName] Policy used by Default
 * Key
 * @member {array} [contentKeys.keyToTrackMappings] Representing tracks needs
 * sepearete content key
 * @member {string} [customLicenseAcquisitionUrlTemplate] The template for a
 * customer service to deliver keys to end users.  Not needed if using the
 * built in Key Delivery service.
 */
export interface EnvelopeEncryption {
  enabledProtocols?: EnabledProtocols;
  clearTracks?: TrackSelection[];
  contentKeys?: StreamingPolicyContentKeys;
  customLicenseAcquisitionUrlTemplate?: string;
}

/**
 * @class
 * Initializes a new instance of the CommonEncryptionCenc class.
 * @constructor
 * Represents configuration specific to Dynamic Encryption using the scheme
 * defined in ISO/IEC 23001-7 (also known as MPEG Common Encryption) using the
 * 'cenc' scheme.
 *
 * @member {object} [enabledProtocols] Representing supported protocols
 * @member {boolean} [enabledProtocols.download] Enable Download protocol or
 * not
 * @member {boolean} [enabledProtocols.dash] Enable Dash protocol or not
 * @member {boolean} [enabledProtocols.hls] Enable Hls protocol or not
 * @member {boolean} [enabledProtocols.smoothStreaming] Enable SmoothStreaming
 * protocol or not
 * @member {array} [clearTracks] Representing which tracks should not be
 * encrypted
 * @member {object} [contentKeys] Representing default content key for each
 * encryption scheme and separate content keys for specific tracks
 * @member {object} [contentKeys.defaultKey] Default content key for an
 * encryption scheme
 * @member {string} [contentKeys.defaultKey.label] Label can be used to specify
 * Content Key when creating Stremaing Locator
 * @member {string} [contentKeys.defaultKey.policyName] Policy used by Default
 * Key
 * @member {array} [contentKeys.keyToTrackMappings] Representing tracks needs
 * sepearete content key
 * @member {object} [drm] Represents configuration specific to Dynamic
 * Encryption using the scheme defined in ISO/IEC 23001-7 (also known as MPEG
 * Common Encryption) using the 'cbcs' scheme.
 * @member {object} [drm.playReady] PlayReady configurations
 * @member {string} [drm.playReady.customLicenseAcquisitionUrlTemplate] The
 * template for a customer service to deliver keys to end users.  Not needed if
 * using the built in Key Delivery service.
 * @member {string} [drm.playReady.playReadyCustomAttributes] Custom attributes
 * for PlayReady
 * @member {object} [drm.widevine] Widevine configurations
 * @member {string} [drm.widevine.customLicenseAcquisitionUrlTemplate] The
 * template for a customer service to deliver keys to end users.  Not needed if
 * using the built in Key Delivery service.
 */
export interface CommonEncryptionCenc {
  enabledProtocols?: EnabledProtocols;
  clearTracks?: TrackSelection[];
  contentKeys?: StreamingPolicyContentKeys;
  drm?: CencDrmConfiguration;
}

/**
 * @class
 * Initializes a new instance of the CommonEncryptionCbcs class.
 * @constructor
 * Class for CommonEncryptionCbcs encryption scheme
 *
 * @member {object} [enabledProtocols] Representing supported protocols
 * @member {boolean} [enabledProtocols.download] Enable Download protocol or
 * not
 * @member {boolean} [enabledProtocols.dash] Enable Dash protocol or not
 * @member {boolean} [enabledProtocols.hls] Enable Hls protocol or not
 * @member {boolean} [enabledProtocols.smoothStreaming] Enable SmoothStreaming
 * protocol or not
 * @member {array} [clearTracks] Representing which tracks should not be
 * encrypted
 * @member {object} [contentKeys] Representing default content key for each
 * encryption scheme and separate content keys for specific tracks
 * @member {object} [contentKeys.defaultKey] Default content key for an
 * encryption scheme
 * @member {string} [contentKeys.defaultKey.label] Label can be used to specify
 * Content Key when creating Stremaing Locator
 * @member {string} [contentKeys.defaultKey.policyName] Policy used by Default
 * Key
 * @member {array} [contentKeys.keyToTrackMappings] Representing tracks needs
 * sepearete content key
 * @member {object} [drm] Configuration of DRMs for current encryption scheme
 * @member {object} [drm.fairPlay] Fairplay configurations
 * @member {string} [drm.fairPlay.customLicenseAcquisitionUrlTemplate] The
 * template for a customer service to deliver keys to end users.  Not needed if
 * using the built in Key Delivery service.
 * @member {boolean} [drm.fairPlay.allowPersistentLicense] All license to be
 * persistent or not
 * @member {object} [drm.playReady] PlayReady configurations
 * @member {string} [drm.playReady.customLicenseAcquisitionUrlTemplate] The
 * template for a customer service to deliver keys to end users.  Not needed if
 * using the built in Key Delivery service.
 * @member {string} [drm.playReady.playReadyCustomAttributes] Custom attributes
 * for PlayReady
 * @member {object} [drm.widevine] Widevine configurations
 * @member {string} [drm.widevine.customLicenseAcquisitionUrlTemplate] The
 * template for a customer service to deliver keys to end users.  Not needed if
 * using the built in Key Delivery service.
 */
export interface CommonEncryptionCbcs {
  enabledProtocols?: EnabledProtocols;
  clearTracks?: TrackSelection[];
  contentKeys?: StreamingPolicyContentKeys;
  drm?: CbcsDrmConfiguration;
}

/**
 * @class
 * Initializes a new instance of the StreamingPolicy class.
 * @constructor
 * A Streaming Policy resource
 *
 * @member {date} [created] Creation time of Streaming Policy
 * @member {string} [defaultContentKeyPolicyName] Default ContentKey used by
 * current Streaming Policy
 * @member {object} [envelopeEncryption] Configuration of EnvelopeEncryption
 * @member {object} [envelopeEncryption.enabledProtocols] Representing
 * supported protocols
 * @member {boolean} [envelopeEncryption.enabledProtocols.download] Enable
 * Download protocol or not
 * @member {boolean} [envelopeEncryption.enabledProtocols.dash] Enable Dash
 * protocol or not
 * @member {boolean} [envelopeEncryption.enabledProtocols.hls] Enable Hls
 * protocol or not
 * @member {boolean} [envelopeEncryption.enabledProtocols.smoothStreaming]
 * Enable SmoothStreaming protocol or not
 * @member {array} [envelopeEncryption.clearTracks] Representing which tracks
 * should not be encrypted
 * @member {object} [envelopeEncryption.contentKeys] Representing default
 * content key for each encryption scheme and separate content keys for
 * specific tracks
 * @member {object} [envelopeEncryption.contentKeys.defaultKey] Default content
 * key for an encryption scheme
 * @member {string} [envelopeEncryption.contentKeys.defaultKey.label] Label can
 * be used to specify Content Key when creating Stremaing Locator
 * @member {string} [envelopeEncryption.contentKeys.defaultKey.policyName]
 * Policy used by Default Key
 * @member {array} [envelopeEncryption.contentKeys.keyToTrackMappings]
 * Representing tracks needs sepearete content key
 * @member {string} [envelopeEncryption.customLicenseAcquisitionUrlTemplate]
 * The template for a customer service to deliver keys to end users.  Not
 * needed if using the built in Key Delivery service.
 * @member {object} [commonEncryptionCenc] Configuration of
 * CommonEncryptionCenc
 * @member {object} [commonEncryptionCenc.enabledProtocols] Representing
 * supported protocols
 * @member {boolean} [commonEncryptionCenc.enabledProtocols.download] Enable
 * Download protocol or not
 * @member {boolean} [commonEncryptionCenc.enabledProtocols.dash] Enable Dash
 * protocol or not
 * @member {boolean} [commonEncryptionCenc.enabledProtocols.hls] Enable Hls
 * protocol or not
 * @member {boolean} [commonEncryptionCenc.enabledProtocols.smoothStreaming]
 * Enable SmoothStreaming protocol or not
 * @member {array} [commonEncryptionCenc.clearTracks] Representing which tracks
 * should not be encrypted
 * @member {object} [commonEncryptionCenc.contentKeys] Representing default
 * content key for each encryption scheme and separate content keys for
 * specific tracks
 * @member {object} [commonEncryptionCenc.contentKeys.defaultKey] Default
 * content key for an encryption scheme
 * @member {string} [commonEncryptionCenc.contentKeys.defaultKey.label] Label
 * can be used to specify Content Key when creating Stremaing Locator
 * @member {string} [commonEncryptionCenc.contentKeys.defaultKey.policyName]
 * Policy used by Default Key
 * @member {array} [commonEncryptionCenc.contentKeys.keyToTrackMappings]
 * Representing tracks needs sepearete content key
 * @member {object} [commonEncryptionCenc.drm] Represents configuration
 * specific to Dynamic Encryption using the scheme defined in ISO/IEC 23001-7
 * (also known as MPEG Common Encryption) using the 'cbcs' scheme.
 * @member {object} [commonEncryptionCenc.drm.playReady] PlayReady
 * configurations
 * @member {string}
 * [commonEncryptionCenc.drm.playReady.customLicenseAcquisitionUrlTemplate] The
 * template for a customer service to deliver keys to end users.  Not needed if
 * using the built in Key Delivery service.
 * @member {string}
 * [commonEncryptionCenc.drm.playReady.playReadyCustomAttributes] Custom
 * attributes for PlayReady
 * @member {object} [commonEncryptionCenc.drm.widevine] Widevine configurations
 * @member {string}
 * [commonEncryptionCenc.drm.widevine.customLicenseAcquisitionUrlTemplate] The
 * template for a customer service to deliver keys to end users.  Not needed if
 * using the built in Key Delivery service.
 * @member {object} [commonEncryptionCbcs] Configuration of
 * CommonEncryptionCbcs
 * @member {object} [commonEncryptionCbcs.enabledProtocols] Representing
 * supported protocols
 * @member {boolean} [commonEncryptionCbcs.enabledProtocols.download] Enable
 * Download protocol or not
 * @member {boolean} [commonEncryptionCbcs.enabledProtocols.dash] Enable Dash
 * protocol or not
 * @member {boolean} [commonEncryptionCbcs.enabledProtocols.hls] Enable Hls
 * protocol or not
 * @member {boolean} [commonEncryptionCbcs.enabledProtocols.smoothStreaming]
 * Enable SmoothStreaming protocol or not
 * @member {array} [commonEncryptionCbcs.clearTracks] Representing which tracks
 * should not be encrypted
 * @member {object} [commonEncryptionCbcs.contentKeys] Representing default
 * content key for each encryption scheme and separate content keys for
 * specific tracks
 * @member {object} [commonEncryptionCbcs.contentKeys.defaultKey] Default
 * content key for an encryption scheme
 * @member {string} [commonEncryptionCbcs.contentKeys.defaultKey.label] Label
 * can be used to specify Content Key when creating Stremaing Locator
 * @member {string} [commonEncryptionCbcs.contentKeys.defaultKey.policyName]
 * Policy used by Default Key
 * @member {array} [commonEncryptionCbcs.contentKeys.keyToTrackMappings]
 * Representing tracks needs sepearete content key
 * @member {object} [commonEncryptionCbcs.drm] Configuration of DRMs for
 * current encryption scheme
 * @member {object} [commonEncryptionCbcs.drm.fairPlay] Fairplay configurations
 * @member {string}
 * [commonEncryptionCbcs.drm.fairPlay.customLicenseAcquisitionUrlTemplate] The
 * template for a customer service to deliver keys to end users.  Not needed if
 * using the built in Key Delivery service.
 * @member {boolean} [commonEncryptionCbcs.drm.fairPlay.allowPersistentLicense]
 * All license to be persistent or not
 * @member {object} [commonEncryptionCbcs.drm.playReady] PlayReady
 * configurations
 * @member {string}
 * [commonEncryptionCbcs.drm.playReady.customLicenseAcquisitionUrlTemplate] The
 * template for a customer service to deliver keys to end users.  Not needed if
 * using the built in Key Delivery service.
 * @member {string}
 * [commonEncryptionCbcs.drm.playReady.playReadyCustomAttributes] Custom
 * attributes for PlayReady
 * @member {object} [commonEncryptionCbcs.drm.widevine] Widevine configurations
 * @member {string}
 * [commonEncryptionCbcs.drm.widevine.customLicenseAcquisitionUrlTemplate] The
 * template for a customer service to deliver keys to end users.  Not needed if
 * using the built in Key Delivery service.
 * @member {object} [noEncryption] Configuations of NoEncryption
 * @member {object} [noEncryption.enabledProtocols] Representing supported
 * protocols
 * @member {boolean} [noEncryption.enabledProtocols.download] Enable Download
 * protocol or not
 * @member {boolean} [noEncryption.enabledProtocols.dash] Enable Dash protocol
 * or not
 * @member {boolean} [noEncryption.enabledProtocols.hls] Enable Hls protocol or
 * not
 * @member {boolean} [noEncryption.enabledProtocols.smoothStreaming] Enable
 * SmoothStreaming protocol or not
 */
export interface StreamingPolicy extends ProxyResource {
  readonly created?: Date;
  defaultContentKeyPolicyName?: string;
  envelopeEncryption?: EnvelopeEncryption;
  commonEncryptionCenc?: CommonEncryptionCenc;
  commonEncryptionCbcs?: CommonEncryptionCbcs;
  noEncryption?: NoEncryption;
}

/**
 * @class
 * Initializes a new instance of the StreamingLocatorUserDefinedContentKey class.
 * @constructor
 * Describes the properties of a user-defined content key in the Streaming
 * Locator
 *
 * @member {uuid} id ID of Content Key
 * @member {string} [label] The Content Key description
 * @member {string} [value] The Content Key secret
 */
export interface StreamingLocatorUserDefinedContentKey {
  id: string;
  label?: string;
  value?: string;
}

/**
 * @class
 * Initializes a new instance of the StreamingLocatorContentKey class.
 * @constructor
 * Class for content key in Streaming Locator
 *
 * @member {string} [label] Label of Content Key
 * @member {string} type Encryption type of Content Key. Possible values
 * include: 'CommonEncryptionCenc', 'CommonEncryptionCbcs',
 * 'EnvelopeEncryption'
 * @member {uuid} id ID of Content Key
 * @member {string} [value] Value of  of Content Key
 * @member {string} [policyName] ContentKeyPolicy used by Content Key
 * @member {array} [tracks] Tracks which use this Content Key
 */
export interface StreamingLocatorContentKey {
  label?: string;
  type: string;
  id: string;
  value?: string;
  policyName?: string;
  tracks?: TrackSelection[];
}

/**
 * @class
 * Initializes a new instance of the StreamingPath class.
 * @constructor
 * Class of paths for streaming
 *
 * @member {string} streamingProtocol Streaming protocol. Possible values
 * include: 'Hls', 'Dash', 'SmoothStreaming', 'Download'
 * @member {string} encryptionScheme Encryption scheme. Possible values
 * include: 'NoEncryption', 'EnvelopeEncryption', 'CommonEncryptionCenc',
 * 'CommonEncryptionCbcs'
 * @member {array} [paths] Streaming paths for each protocol and
 * encryptionScheme pair
 */
export interface StreamingPath {
  streamingProtocol: string;
  encryptionScheme: string;
  paths?: string[];
}

/**
 * @class
 * Initializes a new instance of the ListContentKeysResponse class.
 * @constructor
 * Class of response for listContentKeys action
 *
 * @member {array} [contentKeys] ContentKeys used by current Streaming Locator
 */
export interface ListContentKeysResponse {
  contentKeys?: StreamingLocatorContentKey[];
}

/**
 * @class
 * Initializes a new instance of the ListPathsResponse class.
 * @constructor
 * Class of response for listPaths action
 *
 * @member {array} [streamingPaths] Streaming Paths supported by current
 * Streaming Locator
 * @member {array} [downloadPaths] Download Paths supported by current
 * Streaming Locator
 */
export interface ListPathsResponse {
  streamingPaths?: StreamingPath[];
  downloadPaths?: string[];
}

/**
 * @class
 * Initializes a new instance of the StreamingLocator class.
 * @constructor
 * A Streaming Locator resource
 *
 * @member {string} [assetName] Asset Name
 * @member {date} [created] Creation time of Streaming Locator
 * @member {date} [startTime] StartTime of Streaming Locator
 * @member {date} [endTime] EndTime of Streaming Locator
 * @member {uuid} [streamingLocatorId] StreamingLocatorId of Streaming Locator
 * @member {string} [streamingPolicyName] Streaming Policy name used by this
 * Streaming Locator
 * @member {string} [defaultContentKeyPolicyName] Default ContentKeyPolicy used
 * by this Streaming Locator
 * @member {array} [contentKeys] ContentKeys used by this Streaming Locator
 */
export interface StreamingLocator extends ProxyResource {
  assetName?: string;
  readonly created?: Date;
  startTime?: Date;
  endTime?: Date;
  streamingLocatorId?: string;
  streamingPolicyName?: string;
  defaultContentKeyPolicyName?: string;
  contentKeys?: StreamingLocatorUserDefinedContentKey[];
}

/**
 * @class
 * Initializes a new instance of the Hls class.
 * @constructor
 * The HLS configuration.
 *
 * @member {number} [fragmentsPerTsSegment] The amount of fragments per HTTP
 * Live Streaming (HLS) segment.
 */
export interface Hls {
  fragmentsPerTsSegment?: number;
}

/**
 * @class
 * Initializes a new instance of the LiveOutput class.
 * @constructor
 * The Live Output.
 *
 * @member {string} [description] The description of the Live Output.
 * @member {string} [assetName] The asset name.
 * @member {moment.duration} [archiveWindowLength] ISO 8601 timespan duration
 * of the archive window length. This is duration that customer want to retain
 * the recorded content.
 * @member {string} [manifestName] The manifest file name.
 * @member {object} [hls] The HLS configuration.
 * @member {number} [hls.fragmentsPerTsSegment] The amount of fragments per
 * HTTP Live Streaming (HLS) segment.
 * @member {number} [outputSnapTime] The output snapshot time.
 * @member {date} [created] The exact time the Live Output was created.
 * @member {date} [lastModified] The exact time the Live Output was last
 * modified.
 * @member {string} [provisioningState] The provisioning state of the Live
 * Output.
 * @member {string} [resourceState] The resource state of the Live Output.
 * Possible values include: 'Creating', 'Running', 'Deleting'
 */
export interface LiveOutput extends ProxyResource {
  description?: string;
  assetName?: string;
  archiveWindowLength?: moment.Duration;
  manifestName?: string;
  hls?: Hls;
  outputSnapTime?: number;
  readonly created?: Date;
  readonly lastModified?: Date;
  readonly provisioningState?: string;
  readonly resourceState?: string;
}

/**
 * @class
 * Initializes a new instance of the LiveEventEndpoint class.
 * @constructor
 * The Live Event endpoint.
 *
 * @member {string} [protocol] The endpoint protocol.
 * @member {string} [url] The endpoint URL.
 */
export interface LiveEventEndpoint {
  protocol?: string;
  url?: string;
}

/**
 * @class
 * Initializes a new instance of the LiveEventInput class.
 * @constructor
 * The Live Event input.
 *
 * @member {string} [streamingProtocol] The streaming protocol for the Live
 * Event. Possible values include: 'FragmentedMP4', 'RTMP', 'RTPMPEG2TS'
 * @member {string} [keyFrameIntervalDuration] ISO 8601 timespan duration of
 * the key frame interval duration.
 * @member {string} [accessToken] The access token.
 * @member {array} [endpoints] The input endpoints for the Live Event.
 */
export interface LiveEventInput {
  streamingProtocol?: string;
  keyFrameIntervalDuration?: string;
  accessToken?: string;
  endpoints?: LiveEventEndpoint[];
}

/**
 * @class
 * Initializes a new instance of the IPRange class.
 * @constructor
 * The IP address range in the CIDR scheme.
 *
 * @member {string} [name] The friendly name for the IP address range.
 * @member {string} [address] The IP address.
 * @member {number} [subnetPrefixLength] The subnet mask prefix length (see
 * CIDR notation).
 */
export interface IPRange {
  name?: string;
  address?: string;
  subnetPrefixLength?: number;
}

/**
 * @class
 * Initializes a new instance of the IPAccessControl class.
 * @constructor
 * The IP access control.
 *
 * @member {array} [allow] The IP allow list.
 */
export interface IPAccessControl {
  allow?: IPRange[];
}

/**
 * @class
 * Initializes a new instance of the LiveEventPreviewAccessControl class.
 * @constructor
 * The IP access control for Live Event preview.
 *
 * @member {object} [ip] The IP access control properties.
 * @member {array} [ip.allow] The IP allow list.
 */
export interface LiveEventPreviewAccessControl {
  ip?: IPAccessControl;
}

/**
 * @class
 * Initializes a new instance of the LiveEventPreview class.
 * @constructor
 * The Live Event preview.
 *
 * @member {array} [endpoints] The endpoints for preview.
 * @member {object} [accessControl] The access control for LiveEvent preview.
 * @member {object} [accessControl.ip] The IP access control properties.
 * @member {array} [accessControl.ip.allow] The IP allow list.
 * @member {string} [previewLocator] The preview locator Guid.
 * @member {string} [streamingPolicyName] The name of streaming policy used for
 * LiveEvent preview
 */
export interface LiveEventPreview {
  endpoints?: LiveEventEndpoint[];
  accessControl?: LiveEventPreviewAccessControl;
  previewLocator?: string;
  streamingPolicyName?: string;
}

/**
 * @class
 * Initializes a new instance of the LiveEventEncoding class.
 * @constructor
 * The Live Event encoding.
 *
 * @member {string} [encodingType] The encoding type for Live Event. Possible
 * values include: 'None', 'Basic'
 * @member {string} [presetName] The encoding preset name.
 */
export interface LiveEventEncoding {
  encodingType?: string;
  presetName?: string;
}

/**
 * @class
 * Initializes a new instance of the CrossSiteAccessPolicies class.
 * @constructor
 * The client access policy.
 *
 * @member {string} [clientAccessPolicy] The content of clientaccesspolicy.xml
 * used by Silverlight.
 * @member {string} [crossDomainPolicy] The content of crossdomain.xml used by
 * Silverlight.
 */
export interface CrossSiteAccessPolicies {
  clientAccessPolicy?: string;
  crossDomainPolicy?: string;
}

/**
 * @class
 * Initializes a new instance of the LiveEventActionInput class.
 * @constructor
 * The LiveEvent action input parameter definition.
 *
 * @member {boolean} [removeOutputsOnStop] The flag indicates if remove
 * LiveOutputs on Stop.
 */
export interface LiveEventActionInput {
  removeOutputsOnStop?: boolean;
}

/**
 * @class
 * Initializes a new instance of the LiveEvent class.
 * @constructor
 * The Live Event.
 *
 * @member {string} [description] The Live Event description.
 * @member {object} [input] The Live Event input.
 * @member {string} [input.streamingProtocol] The streaming protocol for the
 * Live Event. Possible values include: 'FragmentedMP4', 'RTMP', 'RTPMPEG2TS'
 * @member {string} [input.keyFrameIntervalDuration] ISO 8601 timespan duration
 * of the key frame interval duration.
 * @member {string} [input.accessToken] The access token.
 * @member {array} [input.endpoints] The input endpoints for the Live Event.
 * @member {object} [preview] The Live Event preview.
 * @member {array} [preview.endpoints] The endpoints for preview.
 * @member {object} [preview.accessControl] The access control for LiveEvent
 * preview.
 * @member {object} [preview.accessControl.ip] The IP access control
 * properties.
 * @member {array} [preview.accessControl.ip.allow] The IP allow list.
 * @member {string} [preview.previewLocator] The preview locator Guid.
 * @member {string} [preview.streamingPolicyName] The name of streaming policy
 * used for LiveEvent preview
 * @member {object} [encoding] The Live Event encoding.
 * @member {string} [encoding.encodingType] The encoding type for Live Event.
 * Possible values include: 'None', 'Basic'
 * @member {string} [encoding.presetName] The encoding preset name.
 * @member {string} [provisioningState] The provisioning state of the Live
 * Event.
 * @member {string} [resourceState] The resource state of the Live Event.
 * Possible values include: 'Stopped', 'Starting', 'Running', 'Stopping',
 * 'Deleting'
 * @member {object} [crossSiteAccessPolicies] The Live Event access policies.
 * @member {string} [crossSiteAccessPolicies.clientAccessPolicy] The content of
 * clientaccesspolicy.xml used by Silverlight.
 * @member {string} [crossSiteAccessPolicies.crossDomainPolicy] The content of
 * crossdomain.xml used by Silverlight.
 * @member {boolean} [vanityUrl] The Live Event vanity URL flag.
 * @member {array} [streamOptions] The stream options.
 * @member {date} [created] The exact time the Live Event was created.
 * @member {date} [lastModified] The exact time the Live Event was last
 * modified.
 */
export interface LiveEvent extends TrackedResource {
  description?: string;
  input?: LiveEventInput;
  preview?: LiveEventPreview;
  encoding?: LiveEventEncoding;
  readonly provisioningState?: string;
  readonly resourceState?: string;
  crossSiteAccessPolicies?: CrossSiteAccessPolicies;
  vanityUrl?: boolean;
  streamOptions?: string[];
  readonly created?: Date;
  readonly lastModified?: Date;
}

/**
 * @class
 * Initializes a new instance of the AkamaiSignatureHeaderAuthenticationKey class.
 * @constructor
 * Akamai Signature Header authentication key.
 *
 * @member {string} [identifier] identifier of the key
 * @member {string} [base64Key] authentication key
 * @member {date} [expiration] The exact time the authentication key.
 */
export interface AkamaiSignatureHeaderAuthenticationKey {
  identifier?: string;
  base64Key?: string;
  expiration?: Date;
}

/**
 * @class
 * Initializes a new instance of the AkamaiAccessControl class.
 * @constructor
 * Akamai access control
 *
 * @member {array} [akamaiSignatureHeaderAuthenticationKeyList] authentication
 * key list
 */
export interface AkamaiAccessControl {
  akamaiSignatureHeaderAuthenticationKeyList?: AkamaiSignatureHeaderAuthenticationKey[];
}

/**
 * @class
 * Initializes a new instance of the StreamingEndpointAccessControl class.
 * @constructor
 * StreamingEndpoint access control definition.
 *
 * @member {object} [akamai] The access control of Akamai
 * @member {array} [akamai.akamaiSignatureHeaderAuthenticationKeyList]
 * authentication key list
 * @member {object} [ip] The IP access control of the StreamingEndpoint.
 * @member {array} [ip.allow] The IP allow list.
 */
export interface StreamingEndpointAccessControl {
  akamai?: AkamaiAccessControl;
  ip?: IPAccessControl;
}

/**
 * @class
 * Initializes a new instance of the StreamingEntityScaleUnit class.
 * @constructor
 * scale units definition
 *
 * @member {number} [scaleUnit] ScaleUnit. The scale unit number of the
 * StreamingEndpoint.
 */
export interface StreamingEntityScaleUnit {
  scaleUnit?: number;
}

/**
 * @class
 * Initializes a new instance of the StreamingEndpoint class.
 * @constructor
 * The StreamingEndpoint.
 *
 * @member {string} [description] The StreamingEndpoint description.
 * @member {number} [scaleUnits] The number of scale units.
 * @member {string} [availabilitySetName] AvailabilitySet name
 * @member {object} [accessControl] The access control definition of the
 * StreamingEndpoint.
 * @member {object} [accessControl.akamai] The access control of Akamai
 * @member {array}
 * [accessControl.akamai.akamaiSignatureHeaderAuthenticationKeyList]
 * authentication key list
 * @member {object} [accessControl.ip] The IP access control of the
 * StreamingEndpoint.
 * @member {array} [accessControl.ip.allow] The IP allow list.
 * @member {number} [maxCacheAge] Max cache age
 * @member {array} [customHostNames] The custom host names of the
 * StreamingEndpoint
 * @member {string} [hostName] The StreamingEndpoint host name.
 * @member {boolean} [cdnEnabled] The CDN enabled flag.
 * @member {string} [cdnProvider] The CDN provider name.
 * @member {string} [cdnProfile] The CDN profile name.
 * @member {string} [provisioningState] The provisioning state of the
 * StreamingEndpoint.
 * @member {string} [resourceState] The resource state of the
 * StreamingEndpoint. Possible values include: 'Stopped', 'Starting',
 * 'Running', 'Stopping', 'Deleting', 'Scaling'
 * @member {object} [crossSiteAccessPolicies] The StreamingEndpoint access
 * policies.
 * @member {string} [crossSiteAccessPolicies.clientAccessPolicy] The content of
 * clientaccesspolicy.xml used by Silverlight.
 * @member {string} [crossSiteAccessPolicies.crossDomainPolicy] The content of
 * crossdomain.xml used by Silverlight.
 * @member {date} [freeTrialEndTime] The free trial expiration time.
 * @member {date} [created] The exact time the StreamingEndpoint was created.
 * @member {date} [lastModified] The exact time the StreamingEndpoint was last
 * modified.
 */
export interface StreamingEndpoint extends TrackedResource {
  description?: string;
  scaleUnits?: number;
  availabilitySetName?: string;
  accessControl?: StreamingEndpointAccessControl;
  maxCacheAge?: number;
  customHostNames?: string[];
  readonly hostName?: string;
  cdnEnabled?: boolean;
  cdnProvider?: string;
  cdnProfile?: string;
  readonly provisioningState?: string;
  readonly resourceState?: string;
  crossSiteAccessPolicies?: CrossSiteAccessPolicies;
  readonly freeTrialEndTime?: Date;
  readonly created?: Date;
  readonly lastModified?: Date;
}


/**
 * @class
 * Initializes a new instance of the OperationCollection class.
 * @constructor
 * A collection of Operation items.
 *
 * @member {string} [odatanextLink] A link to the next page of the collection
 * (when the collection contains too many results to return in one response).
 */
export interface OperationCollection extends Array<Operation> {
  odatanextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the MediaServiceCollection class.
 * @constructor
 * A collection of MediaService items.
 *
 * @member {string} [odatanextLink] A link to the next page of the collection
 * (when the collection contains too many results to return in one response).
 */
export interface MediaServiceCollection extends Array<MediaService> {
  odatanextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the SubscriptionMediaServiceCollection class.
 * @constructor
 * A collection of SubscriptionMediaService items.
 *
 * @member {string} [odatanextLink] A link to the next page of the collection
 * (when the collection contains too many results to return in one response).
 */
export interface SubscriptionMediaServiceCollection extends Array<SubscriptionMediaService> {
  odatanextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the AssetCollection class.
 * @constructor
 * A collection of Asset items.
 *
 * @member {string} [odatanextLink] A link to the next page of the collection
 * (when the collection contains too many results to return in one response).
 */
export interface AssetCollection extends Array<Asset> {
  odatanextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ContentKeyPolicyCollection class.
 * @constructor
 * A collection of ContentKeyPolicy items.
 *
 * @member {string} [odatanextLink] A link to the next page of the collection
 * (when the collection contains too many results to return in one response).
 */
export interface ContentKeyPolicyCollection extends Array<ContentKeyPolicy> {
  odatanextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the TransformCollection class.
 * @constructor
 * A collection of Transform items.
 *
 * @member {string} [odatanextLink] A link to the next page of the collection
 * (when the collection contains too many results to return in one response).
 */
export interface TransformCollection extends Array<Transform> {
  odatanextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the JobCollection class.
 * @constructor
 * A collection of Job items.
 *
 * @member {string} [odatanextLink] A link to the next page of the collection
 * (when the collection contains too many results to return in one response).
 */
export interface JobCollection extends Array<Job> {
  odatanextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the StreamingPolicyCollection class.
 * @constructor
 * A collection of StreamingPolicy items.
 *
 * @member {string} [odatanextLink] A link to the next page of the collection
 * (when the collection contains too many results to return in one response).
 */
export interface StreamingPolicyCollection extends Array<StreamingPolicy> {
  odatanextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the StreamingLocatorCollection class.
 * @constructor
 * A collection of StreamingLocator items.
 *
 * @member {string} [odatanextLink] A link to the next page of the collection
 * (when the collection contains too many results to return in one response).
 */
export interface StreamingLocatorCollection extends Array<StreamingLocator> {
  odatanextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the LiveEventListResult class.
 * @constructor
 * @summary LiveEventListResult
 *
 * The LiveEvent list result.
 *
 * @member {number} [odatacount] The number of result.
 * @member {string} [odatanextLink] Th link to the next set of results. Not
 * empty if value contains incomplete list of Live Outputs.
 */
export interface LiveEventListResult extends Array<LiveEvent> {
  odatanextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the LiveOutputListResult class.
 * @constructor
 * @summary LiveOutputListResult
 *
 * The LiveOutput list result.
 *
 * @member {number} [odatacount] The number of result.
 * @member {string} [odatanextLink] Th link to the next set of results. Not
 * empty if value contains incomplete list of Live Outputs.
 */
export interface LiveOutputListResult extends Array<LiveOutput> {
  odatanextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the StreamingEndpointListResult class.
 * @constructor
 * @summary StreamingEndpointListResult
 *
 * The StreamingEndpoint list result.
 *
 * @member {number} [odatacount] The number of result.
 * @member {string} [odatanextLink] Th link to the next set of results. Not
 * empty if value contains incomplete list of StreamingEndpoints.
 */
export interface StreamingEndpointListResult extends Array<StreamingEndpoint> {
  odatanextLink?: string;
}
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const models = require('./index');

/**
 * Represents an Asset used as a JobOutput.
 *
 * @extends models['JobOutput']
 */
class JobOutputAsset extends models['JobOutput'] {
  /**
   * Create a JobOutputAsset.
   * @member {string} assetName The name of the output Asset.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of JobOutputAsset
   *
   * @returns {object} metadata of JobOutputAsset
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.JobOutputAsset',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'JobOutput',
        className: 'JobOutputAsset',
        modelProperties: {
          error: {
            required: false,
            readOnly: true,
            serializedName: 'error',
            type: {
              name: 'Composite',
              className: 'JobError'
            }
          },
          state: {
            required: false,
            readOnly: true,
            serializedName: 'state',
            type: {
              name: 'String'
            }
          },
          progress: {
            required: false,
            readOnly: true,
            serializedName: 'progress',
            type: {
              name: 'Number'
            }
          },
          odatatype: {
            required: true,
            serializedName: '@odata\\.type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          assetName: {
            required: true,
            serializedName: 'assetName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = JobOutputAsset;

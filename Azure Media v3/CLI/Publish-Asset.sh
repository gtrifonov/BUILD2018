#!/bin/bash

# Update the following variables for your own settings:
resourceGroup=build2018
amsAccountName=build18
assetName="myAsset-uniqueID"
locatorName="myStreamingLocator"
streamingPolicyName="Predefined_DownloadAndClearStreaming"
#contentPolicyName=""

# Delete the locator if it already exists
az ams streaming locator delete \
    -a $amsAccountName \
    -g $resourceGroup \
    -n $locatorName \

# Create a new Streaming Locator. Modify the assetName variable to point to the Asset you want to publish
# This uses the predefined Clear Streaming Only policy, which allows for unencypted deliver over HLS, Smooth and DASH protocols. 
az ams streaming locator create \
    -a $amsAccountName \
    -g $resourceGroup \
    --asset-name $assetName \
    -n $locatorName \
    --streaming-policy-name $streamingPolicyName \
    #--end-time 2100-10-10T00:00:00Z \
    #--start-time 2018-04-28T00:00:00Z \
    #--content-policy-name $contentPolicyName \

# List the Streming URLs relative paths for the new locator.  You must append your Streaming Endpoint "hostname" path to these to resolve the full URL. 
# Note that the asset must have an .ismc and be encoded for Adaptive streaming in order to get Streaming URLs back. You can get download paths for any content type.
az ams streaming locator get-paths \
    -a $amsAccountName \
    -g $resourceGroup \
    -n $locatorName \


echo "press  [ENTER]  to continue."
read continue
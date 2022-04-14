<div align="center">
	<p>
		<a href="https://www.npmjs.com/package/onetap-cloud-api"><img src="https://nodei.co/npm/onetap-cloud-api.png?compact=true" alt="" /></a>
	</p>
	<p>
		<a href="https://www.npmjs.com/package/onetap-cloud-api"><img src="https://img.shields.io/npm/v/onetap-cloud-api.svg?maxAge=3600" alt="NPM" /></a>
	</p>
</div>

## Setup
### Installation
```
npm i onetap-cloud-api
```
### Getting an Authorization Keys
Your Onetap Cloud API Keys Can Be Found By going to (https://www.onetap.com/account/cloud) Then clicking Generate
### Usage

```js
const OnetapCloud = require('onetap-cloud-api');
const OnetapAPI = new OnetapCloud(apiId, apiSecret, apiKey); 

(you need to provide the X-Api-Id, X-Api-Secret and X-Api-Key to the Object)

```
We call Methods with the `OnetapAPI` Object

Heres a example of the `GetAllScripts` Function.
```js
OnetapAPI.GetAllScripts().then(result => {
    console.log(result)
});
```

# Documentation
<a name="Onetap Cloud API"></a>

**The Offical Onetap Cloud Documention can be Found** <a href="https://www.onetap.com/threads/cloud-api.37180/">Here</a>





## Methods
### **OnetapAPI.DeleteScriptInvite(script_id, invite_id)**	
```JS
Onetap.DeleteScriptInvite("Script_ID", "Invite_ID").then(result => {
	console.log(result)
})
```
#### Delete a certain Script's Invite
| Pamaremter      | Type | Description    |
| :---        |    :---   |          :--- |
| script_id   | <code>str</code>       | The ID of the script.  |
| invite_id   | <code>str</code>          | The ID of the particular invite you want to delete.     |

### **OnetapAPI.CreateScriptInvite(script_id, max_age, max_uses)**	
```JS
OnetapAPI.CreateScriptInvite("script_id", max_age, max_uses).then(result => {
	console.log(result)
})
```
#### Create a Script Invite
| Pamaremter      | Type | Description    |
| :---        |    :---   |          :--- |
| script_id   | <code>str</code>       | The ID of the script. |
| max_age     | <code>int</code>       | Maximum age of invite. 1 - 1 hour, 2 - 3 hours, 3 - 6 hours, 4 - 12 hours, 5 - 24 hours, 6 - 48 hours     |
| max_uses     | <code>int</code>       | Maximum uses of invite. 1 - 1 use, 2 - 5 uses, 3 - 10 uses, 4 - 25 uses, 5 - 50 uses, 6 - 100 uses |

### **OnetapAPI.UpdateScript(script_id, name)**	
```JS
OnetapAPI.UpdateScript("script_id", "name").then(result => {
	console.log(result)
})
```
#### Update a Script
| Pamaremter      | Type | Description    |
| :---        |    :---   |          :--- |
| script_id   | <code>str</code>       | The ID of the script.|
| name     | <code>str</code>       | Name of the script.|

### **OnetapAPI.GetAllScripts()**	
```JS
OnetapAPI.GetAllScripts().then(result => {
	console.log(result)
})
```
#### Gets all Scripts you Currently Own or Subscribed to. (Does not require Parameters)

### **OnetapAPI.GetScript(script_id)**	
```JS
OnetapAPI.GetScript("script_id").then(result => {
	console.log(result)
})
```
#### Gets a certain Script by their `script_id`.
| Pamaremter      | Type | Description    |
| :---        |    :---   |          :--- |
| script_id   | <code>str</code>       | The ID of the script. |

### **OnetapAPI.GetScriptInvites(script_id)**	
```JS
OnetapAPI.GetScriptInvites("script_id").then(result => {
	console.log(result)
})
```
#### Gets all the active invites for a certain Script.
| Pamaremter      | Type | Description    |
| :---        |    :---   |          :--- |
| script_id   | <code>str</code>       | The ID of the script.|

### **OnetapAPI.GetAllScriptsInvites()**	
```JS
OnetapAPI.GetAllScriptsInvites().then(result => {
	console.log(result)
})
```
#### Gets all the active invites for every Script you own. (Does not require Parameters)

### **OnetapAPI.GetAllScriptsSubscriptions()**	
```JS
OnetapAPI.GetAllScriptsSubscriptions().then(result => {
	console.log(result)
})
```
#### Gets all the active Subscriptions for every Script you own. (Does not require Parameters)

### **OnetapAPI.GetScriptSubscriptions(script_id)**	
```JS
OnetapAPI.GetScriptSubscriptions("script_id").then(result => {
	console.log(result)
})
```
#### Gets all the active Subscriptions for a certain Script.
| Pamaremter      | Type | Description    |
| :---        |    :---   |          :--- |
| script_id   | <code>str</code>       | The ID of the script.|

### **OnetapAPI.CreateScriptSubscription(script_id, user_id)**	
```JS
OnetapAPI.CreateScriptSubscription("script_id", "user_id").then(result => {
	console.log(result)
})
```
#### Creates a Script Subscription for a included user_id
| Pamaremter      | Type | Description    |
| :---        |    :---   |          :--- |
| script_id   | <code>str</code>       | The ID of the script.|
| user_id   | <code>str</code>       | The ID of the User.|

### **OnetapAPI.DeleteScriptSubscription(script_id, user_id)**	
```JS
OnetapAPI.DeleteScriptSubscription("script_id", "user_id").then(result => {
	console.log(result)
})
```
#### Deletes a Script Subscription for a included user_id
| Pamaremter      | Type | Description    |
| :---        |    :---   |          :--- |
| script_id   | <code>str</code>       | The ID of the script.|
| user_id   | <code>str</code>       | The ID of the User.|

### **OnetapAPI.GetAllConfigs()**	
```JS
OnetapAPI.GetAllConfigs().then(result => {
	console.log(result)
})
```
#### Gets all Configs that you own or are currently subscribed to. (Does not require Parameters)

### **OnetapAPI.GetConfig(config_id)**	
```JS
OnetapAPI.GetConfig("config_id").then(result => {
	console.log(result)
})
```
#### Gets details about a certain config you own or are subscribed to.
| Pamaremter      | Type | Description    |
| :---        |    :---   |          :--- |
| config_id   | <code>str</code>       | The ID of the config.|

### **OnetapAPI.DeleteConfig(config_id)**	
```JS
OnetapAPI.DeleteConfig("config_id").then(result => {
	console.log(result)
})
```
#### Deletes a certain config you own or are subscribed to.
| Pamaremter      | Type | Description    |
| :---        |    :---   |          :--- |
| config_id   | <code>str</code>       | The ID of the config.|

### **OnetapAPI.UpdateConfig(config_id, name, data)**	
```JS
OnetapAPI.UpdateConfig("config_id", "name", "data").then(result => {
	console.log(result)
})
```
#### Updates a certain config you own.
| Pamaremter      | Type | Description    |
| :---        |    :---   |          :--- |
| config_id   | <code>str</code>       | The ID of the config.|
| name   | <code>str</code>       | The name of the Config.|
| data   | <code>str</code>       | The Config Data.|

### **OnetapAPI.GetAllConfigsInvites()**	
```JS
OnetapAPI.GetAllConfigsInvites().then(result => {
	console.log(result)
})
```
#### Gets all currently valid invites to every Config you Own. (Does not require Parameters)

### **OnetapAPI.GetConfigInvites(config_id)**	
```JS
OnetapAPI.GetConfigInvites("config_id").then(result => {
	console.log(result)
})
```
#### Gets all currently valid invites For a certain Config.
| Pamaremter      | Type | Description    |
| :---        |    :---   |          :--- |
| config_id   | <code>str</code>       | The ID of the config.|

### **OnetapAPI.CreateConfigInvite(config_id, max_uses, max_age)**	
```JS
OnetapAPI.CreateConfigInvite("config_id", max_uses, max_age).then(result => {
	console.log(result)
})
```
#### Creates a invite For a certain Config.
| Pamaremter      | Type | Description    |
| :---        |    :---   |          :--- |
| config_id   | <code>str</code>       | The ID of the Config. |
| max_age     | <code>int</code>       | Maximum age of invite. 1 - 1 hour, 2 - 3 hours, 3 - 6 hours, 4 - 12 hours, 5 - 24 hours, 6 - 48 hours     |
| max_uses     | <code>int</code>       | Maximum uses of invite. 1 - 1 use, 2 - 5 uses, 3 - 10 uses, 4 - 25 uses, 5 - 50 uses, 6 - 100 uses |

### **OnetapAPI.DeleteConfigInvite(config_id, invite_id)**	
```JS
OnetapAPI.DeleteConfigInvite("config_id", "invite_id").then(result => {
	console.log(result)
})
```
#### Deletes a Certain Config Invite.
| Pamaremter      | Type | Description    |
| :---        |    :---   |          :--- |
| config_id   | <code>str</code>       | The ID of the config.|
| invite_id   | <code>str</code>       | The ID of the invite.|

### **OnetapAPI.GetAllConfigSubscriptions()**	
```JS
OnetapAPI.GetAllConfigSubscriptions().then(result => {
	console.log(result)
})
```
#### Gets all current Subscribed Configs. (Does not require Parameters)

### **OnetapAPI.GetConfigSubscriptions(config_id)**	
```JS
OnetapAPI.GetConfigSubscriptions("config_id").then(result => {
	console.log(result)
})
```
#### Gets all Subscribtions to a Certain Config.
| Pamaremter      | Type | Description    |
| :---        |    :---   |          :--- |
| config_id   | <code>str</code>       | The ID of the config.|

#### Gets all current Subscribed Configs. (Does not require Parameters)

### **OnetapAPI.CreateConfigSubscription(config_id, user_id)**	
```JS
OnetapAPI.CreateConfigSubscription("config_id", "user_id").then(result => {
	console.log(result)
})
```
#### Creates a Config Subscription for a included user_id
| Pamaremter      | Type | Description    |
| :---        |    :---   |          :--- |
| config_id   | <code>str</code>       | The ID of the config.|
| user_id   | <code>str</code>       | The ID of the user.|

### **OnetapAPI.DeleteScriptSubscription(config_id, user_id)**	
```JS
OnetapAPI.DeleteScriptSubscription("config_id", "user_id").then(result => {
	console.log(result)
})
```
#### Deletes a Certain Config Subscription.
| Pamaremter      | Type | Description    |
| :---        |    :---   |          :--- |
| config_id   | <code>str</code>       | The ID of the config.|
| user_id   | <code>str</code>       | The ID of the user.|

## Examples
examples will be added shortly

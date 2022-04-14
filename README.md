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
We call Methods with the `ot` Object

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

### **OnetapAPI ```openapi2.ymal.```
`` {
## "name": "Onetap-Cloud-Api-1.0.0",
  "lockfileVersion": 2,
  "requires": true,
  "packages": {
    "": {
      "dependencies": {
        "package.json": "^2.0.1"
      }
  },
  ## "node_modules/abs": {
      "version": "1.3.14",
      "resolved": "https://registry.npmjs.org/abs/-/abs-1.3.14.tgz",
      "integrity": "sha512-PrS26IzwKLWwuURpiKl8wRmJ2KdR/azaVrLEBWG/TALwT20Y7qjtYp1qcMLHA4206hBHY5phv3w4pjf9NPv4Vw==",
      "dependencies": {
        "ul": "^5.0.0"
      }
    },
  ## "node_modules/capture-stack-trace": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/capture-stack-trace/-/capture-stack-trace-1.0.1.tgz",
      "integrity": "sha512-mYQLZnx5Qt1JgB1WEiMCf2647plpGeQ2NMR/5L0HNZzGQo4fuSPnK+wjfPnKZV0aiJDgzmWqqkV/g7JD+DW0qw==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
  ##  "node_modules/core-util-is": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.3.tgz",
      "integrity": "sha512-ZQBvi1DcpJ4GDqanjucZ2Hj3wEO5pZDS89BWbkcrvdxksJorwUDDZamX9ldFkp9aw2lmBDLgkObEA4DWNJ9FYQ=="
    },
   ## "node_modules/create-error-class": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/create-error-class/-/create-error-class-3.0.2.tgz",
      "integrity": "sha1-Br56vvlHo/FKMP1hBnHUAbyot7Y=",
      "dependencies": {
        "capture-stack-trace": "^1.0.0"
      },
     ## "engines": {
        "node": ">=0.10.0"
      }
    },
   ## "node_modules/deep-extend": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/deep-extend/-/deep-extend-0.6.0.tgz",
      "integrity": "sha512-LOHxIOaPYdHlJRtCQfDIVZtfw/ufM8+rVj649RIHzcm/vGwQRXFt6OPqIFWsm2XEMrNIEtWR64sY1LEKD2vAOA==",
      "engines": {
        "node": ">=4.0.0"
      }
    },
  ##  "node_modules/deffy": {
      "version": "2.2.4",
      "resolved": "https://registry.npmjs.org/deffy/-/deffy-2.2.4.tgz",
      "integrity": "sha512-pLc9lsbsWjr6RxmJ2OLyvm+9l4j1yK69h+TML/gUit/t3vTijpkNGh8LioaJYTGO7F25m6HZndADcUOo2PsiUg==",
      "dependencies": {
        "typpy": "^2.0.0"
      }
    },
  ##  "node_modules/duplexer2": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/duplexer2/-/duplexer2-0.1.4.tgz",
      "integrity": "sha1-ixLauHjA1p4+eJEFFmKjL8a93ME=",
      "dependencies": {
        "readable-stream": "^2.0.2"
      }
    },
 ##   "node_modules/err": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/err/-/err-1.1.1.tgz",
      "integrity": "sha1-65KOLhGjFmSPeCgz0PlyWLpDwvg=",
      "dependencies": {
        "typpy": "^2.2.0"
      }
    },
 ##   "node_modules/error-ex": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/error-ex/-/error-ex-1.3.2.tgz",
      "integrity": "sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==",
      "dependencies": {
        "is-arrayish": "^0.2.1"
      }
    },
 ##   "node_modules/exec-limiter": {
      "version": "3.2.13",
      "resolved": "https://registry.npmjs.org/exec-limiter/-/exec-limiter-3.2.13.tgz",
      "integrity": "sha512-86Ri699bwiHZVBzTzNj8gspqAhCPchg70zPVWIh3qzUOA1pUMcb272Em3LPk8AE0mS95B9yMJhtqF8vFJAn0dA==",
      "dependencies": {
        "limit-it": "^3.0.0",
        "typpy": "^2.1.0"
      }
    },
##    "node_modules/function-bind": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz",
      "integrity": "sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A=="
    },
  ##  "node_modules/function.name": {
      "version": "1.0.13",
      "resolved": "https://registry.npmjs.org/function.name/-/function.name-1.0.13.tgz",
      "integrity": "sha512-mVrqdoy5npWZyoXl4DxCeuVF6delDcQjVS9aPdvLYlBxtMTZDR2B5GVEQEoM1jJyspCqg3C0v4ABkLE7tp9xFA==",
      "dependencies": {
        "noop6": "^1.0.1"
      }
    },
  ##  "node_modules/git-package-json": {
      "version": "1.4.10",
      "resolved": "https://registry.npmjs.org/git-package-json/-/git-package-json-1.4.10.tgz",
      "integrity": "sha512-DRAcvbzd2SxGK7w8OgYfvKqhFliT5keX0lmSmVdgScgf1kkl5tbbo7Pam6uYoCa1liOiipKxQZG8quCtGWl/fA==",
      "dependencies": {
        "deffy": "^2.2.1",
        "err": "^1.1.1",
        "gry": "^5.0.0",
        "normalize-package-data": "^2.3.5",
        "oargv": "^3.4.1",
        "one-by-one": "^3.1.0",
        "r-json": "^1.2.1",
        "r-package-json": "^1.0.0",
        "tmp": "0.0.28"
      }
    },
##    "node_modules/git-source": {
      "version": "1.1.10",
      "resolved": "https://registry.npmjs.org/git-source/-/git-source-1.1.10.tgz",
      "integrity": "sha512-XZZ7ZgnLL35oLgM/xjnLYgtlKlxJG0FohC1kWDvGkU7s1VKGXK0pFF/g1itQEwQ3D+uTQzBnzPi8XbqOv7Wc1Q==",
      "dependencies": {
        "git-url-parse": "^5.0.1"
      }
    },
 ##   "node_modules/git-up": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/git-up/-/git-up-1.2.1.tgz",
      "integrity": "sha1-JkSAoAax2EJhrB/gmjpRacV+oZ0=",
      "dependencies": {
        "is-ssh": "^1.0.0",
        "parse-url": "^1.0.0"
      }
    },
 ##   "node_modules/git-url-parse": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/git-url-parse/-/git-url-parse-5.0.1.tgz",
      "integrity": "sha1-/j15xnRq4FBIz6UIyB553du6OEM=",
      "dependencies": {
        "git-up": "^1.0.0"
      }
    },
 ##   "node_modules/got": {
      "version": "5.6.0",
      "resolved": "https://registry.npmjs.org/got/-/got-5.6.0.tgz",
      "integrity": "sha1-ux1+4WO3gIK7yOuDbz85UATqb78=",
      "dependencies": {
        "create-error-class": "^3.0.1",
        "duplexer2": "^0.1.4",
        "is-plain-obj": "^1.0.0",
        "is-redirect": "^1.0.0",
        "is-retry-allowed": "^1.0.0",
        "is-stream": "^1.0.0",
        "lowercase-keys": "^1.0.0",
        "node-status-codes": "^1.0.0",
        "object-assign": "^4.0.1",
        "parse-json": "^2.1.0",
        "pinkie-promise": "^2.0.0",
        "read-all-stream": "^3.0.0",
        "readable-stream": "^2.0.5",
        "timed-out": "^2.0.0",
        "unzip-response": "^1.0.0",
        "url-parse-lax": "^1.0.0"
      },
   ##   "engines": {
        "node": ">=0.10.0"
      }
    },
  ##  "node_modules/gry": {
      "version": "5.0.8",
      "resolved": "https://registry.npmjs.org/gry/-/gry-5.0.8.tgz",
      "integrity": "sha512-meq9ZjYVpLzZh3ojhTg7IMad9grGsx6rUUKHLqPnhLXzJkRQvEL2U3tQpS5/WentYTtHtxkT3Ew/mb10D6F6/g==",
      "dependencies": {
        "abs": "^1.2.1",
        "exec-limiter": "^3.0.0",
        "one-by-one": "^3.0.0",
        "ul": "^5.0.0"
      }
    },
 ##   "node_modules/has": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/has/-/has-1.0.3.tgz",
      "integrity": "sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==",
      "dependencies": {
        "function-bind": "^1.1.1"
      },
  ##    "engines": {
        "node": ">= 0.4.0"
      }
    },
 ##   "node_modules/hosted-git-info": {
      "version": "2.8.9",
      "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.8.9.tgz",
      "integrity": "sha512-mxIDAb9Lsm6DoOJ7xH+5+X4y1LU/4Hi50L9C5sIswK3JzULS4bwk1FvjdBgvYR4bzT4tuUQiC15FE2f5HbLvYw=="
    },
 ##   "node_modules/inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ=="
    },
 ##   "node_modules/ini": {
      "version": "1.3.8",
      "resolved": "https://registry.npmjs.org/ini/-/ini-1.3.8.tgz",
      "integrity": "sha512-JV/yugV2uzW5iMRSiZAyDtQd+nxtUnjeLt0acNdw98kKLrvuRVyB80tsREOE7yvGVgalhZ6RNXCmEHkUKBKxew=="
    },
 ##   "node_modules/is-arrayish": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
      "integrity": "sha1-d8mYQFJ6qOyxqLppe4BkWnqSap0="
    },
 ##   "node_modules/is-core-module": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.8.1.tgz",
      "integrity": "sha512-SdNCUs284hr40hFTFP6l0IfZ/RSrMXF3qgoRHd3/79unUTvrFO/JoXwkGm+5J/Oe3E/b5GsnG330uUNgRpu1PA==",
      "dependencies": {
        "has": "^1.0.3"
      },
  ##    "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
 ##   "node_modules/is-plain-obj": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-plain-obj/-/is-plain-obj-1.1.0.tgz",
      "integrity": "sha1-caUMhCnfync8kqOQpKA7OfzVHT4=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
 ##   "node_modules/is-redirect": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-redirect/-/is-redirect-1.0.0.tgz",
      "integrity": "sha1-HQPd7VO9jbDzDCbk+V02/HyH3CQ=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
##   "node_modules/is-retry-allowed": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/is-retry-allowed/-/is-retry-allowed-1.2.0.tgz",
      "integrity": "sha512-RUbUeKwvm3XG2VYamhJL1xFktgjvPzL0Hq8C+6yrWIswDy3BIXGqCxhxkc30N9jqK311gVU137K8Ei55/zVJRg==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
 ##   "node_modules/is-ssh": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/is-ssh/-/is-ssh-1.3.3.tgz",
      "integrity": "sha512-NKzJmQzJfEEma3w5cJNcUMxoXfDjz0Zj0eyCalHn2E6VOwlzjZo0yuO2fcBSf8zhFuVCL/82/r5gRcoi6aEPVQ==",
      "dependencies": {
        "protocols": "^1.1.0"
      }
    },
 ##   "node_modules/is-stream": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-1.1.0.tgz",
      "integrity": "sha1-EtSj3U5o4Lec6428hBc66A2RykQ=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
##    "node_modules/isarray": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
      "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE="
    },
 ##   "node_modules/iterate-object": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/iterate-object/-/iterate-object-1.3.4.tgz",
      "integrity": "sha512-4dG1D1x/7g8PwHS9aK6QV5V94+ZvyP4+d19qDv43EzImmrndysIl4prmJ1hWWIGCqrZHyaHBm6BSEWHOLnpoNw=="
    },
 ##   "node_modules/limit-it": {
      "version": "3.2.10",
      "resolved": "https://registry.npmjs.org/limit-it/-/limit-it-3.2.10.tgz",
      "integrity": "sha512-T0NK99pHnkimldr1WUqvbGV1oWDku/xC9J/OqzJFsV1jeOS6Bwl8W7vkeQIBqwiON9dTALws+rX/XPMQqWerDQ==",
      "dependencies": {
        "typpy": "^2.0.0"
      }
    },
 ##   "node_modules/lowercase-keys": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/lowercase-keys/-/lowercase-keys-1.0.1.tgz",
      "integrity": "sha512-G2Lj61tXDnVFFOi8VZds+SoQjtQC3dgokKdDG2mTm1tx4m50NUHBOZSBwQQHyy0V12A0JTG4icfZQH+xPyh8VA==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
 ##   "node_modules/minimist": {
      "version": "1.2.6",
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.6.tgz",
      "integrity": "sha512-Jsjnk4bw3YJqYzbdyBiNsPWHPfO++UGG749Cxs6peCu5Xg4nrena6OVxOYxrQTqww0Jmwt+Ref8rggumkTLz9Q=="
    },
  ##  "node_modules/node-status-codes": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/node-status-codes/-/node-status-codes-1.0.0.tgz",
      "integrity": "sha1-WuVUHQJGRdMqWPzdyc7s6nrjrC8=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
   ## "node_modules/noop6": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/noop6/-/noop6-1.0.9.tgz",
      "integrity": "sha512-DB3Hwyd89dPr5HqEPg3YHjzvwh/mCqizC1zZ8vyofqc+TQRyPDnT4wgXXbLGF4z9YAzwwTLi8pNLhGqcbSjgkA=="
    },
  ##  "node_modules/normalize-package-data": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-2.5.0.tgz",
      "integrity": "sha512-/5CMN3T0R4XTj4DcGaexo+roZSdSFW/0AOOTROrjxzCG1wrWXEsGbRKevjlIL+ZDE4sZlJr5ED4YW0yqmkK+eA==",
      "dependencies": {
        "hosted-git-info": "^2.1.4",
        "resolve": "^1.10.0",
        "semver": "2 || 3 || 4 || 5",
        "validate-npm-package-license": "^3.0.1"
      }
    },
 ##   "node_modules/oargv": {
      "version": "3.4.10",
      "resolved": "https://registry.npmjs.org/oargv/-/oargv-3.4.10.tgz",
      "integrity": "sha512-SXaMANv9sr7S/dP0vj0+Ybipa47UE1ntTWQ2rpPRhC6Bsvfl+Jg03Xif7jfL0sWKOYWK8oPjcZ5eJ82t8AP/8g==",
      "dependencies": {
        "iterate-object": "^1.1.0",
        "ul": "^5.0.0"
      }
    },
 ##   "node_modules/obj-def": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/obj-def/-/obj-def-1.0.9.tgz",
      "integrity": "sha512-bQ4ya3VYD6FAA1+s6mEhaURRHSmw4+sKaXE6UyXZ1XDYc5D+c7look25dFdydmLd18epUegh398gdDkMUZI9xg==",
      "dependencies": {
        "deffy": "^2.2.2"
      }
    },
 ##   "node_modules/object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
 ##   "node_modules/one-by-one": {
      "version": "3.2.8",
      "resolved": "https://registry.npmjs.org/one-by-one/-/one-by-one-3.2.8.tgz",
      "integrity": "sha512-HR/pSzZdm46Xqj58K+Bu64kMbSTw8/u77AwWvV+rprO/OsuR++pPlkUJn+SmwqBGRgHKwSKQ974V3uls7crIeQ==",
      "dependencies": {
        "obj-def": "^1.0.0",
        "sliced": "^1.0.1"
      }
    },
##    "node_modules/os-tmpdir": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/os-tmpdir/-/os-tmpdir-1.0.2.tgz",
      "integrity": "sha1-u+Z0BseaqFxc/sdm/lc0VV36EnQ=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
##    "node_modules/package-json": {
      "version": "2.4.0",
      "resolved": "https://registry.npmjs.org/package-json/-/package-json-2.4.0.tgz",
      "integrity": "sha1-DRW9Z9HLvduyyiIv8u24a8sxqLs=",
      "dependencies": {
        "got": "^5.0.0",
        "registry-auth-token": "^3.0.1",
        "registry-url": "^3.0.3",
        "semver": "^5.1.0"
      },
   ##   "engines": {
        "node": ">=0.10.0"
      }
    },
  ##  "node_modules/package-json-path": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/package-json-path/-/package-json-path-1.0.9.tgz",
      "integrity": "sha512-uNu7f6Ef7tQHZRnkyVnCtzdSYVN9uBtge/sG7wzcUaawFWkPYUq67iXxRGrQSg/q0tzxIB8jSyIYUKjG2Jn//A==",
      "dependencies": {
        "abs": "^1.2.1"
      }
    },
  ##  "node_modules/package.json": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/package.json/-/package.json-2.0.1.tgz",
      "integrity": "sha1-+IYFnSpJ7QduZIg2ldc7K0bSHW0=",
      "deprecated": "Use pkg.json instead.",
      "dependencies": {
        "git-package-json": "^1.4.0",
        "git-source": "^1.1.0",
        "package-json": "^2.3.1"
      }
    },
  ##  "node_modules/parse-json": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-2.2.0.tgz",
      "integrity": "sha1-9ID0BDTvgHQfhGkJn43qGPVaTck=",
      "dependencies": {
        "error-ex": "^1.2.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
   ## "node_modules/parse-url": {
      "version": "1.3.11",
      "resolved": "https://registry.npmjs.org/parse-url/-/parse-url-1.3.11.tgz",
      "integrity": "sha1-V8FUKKuKiSsfQ4aWRccR0OFEtVQ=",
      "dependencies": {
        "is-ssh": "^1.3.0",
        "protocols": "^1.4.0"
      }
    },
   ## "node_modules/path-parse": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
      "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw=="
    },
  ##  "node_modules/pinkie": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/pinkie/-/pinkie-2.0.4.tgz",
      "integrity": "sha1-clVrgM+g1IqXToDnckjoDtT3+HA=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
   ## "node_modules/pinkie-promise": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/pinkie-promise/-/pinkie-promise-2.0.1.tgz",
      "integrity": "sha1-ITXW36ejWMBprJsXh3YogihFD/o=",
      "dependencies": {
        "pinkie": "^2.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
  ##  "node_modules/prepend-http": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/prepend-http/-/prepend-http-1.0.4.tgz",
      "integrity": "sha1-1PRWKwzjaW5BrFLQ4ALlemNdxtw=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
   ## "node_modules/process-nextick-args": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",
      "integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag=="
    },
   ## "node_modules/protocols": {
      "version": "1.4.8",
      "resolved": "https://registry.npmjs.org/protocols/-/protocols-1.4.8.tgz",
      "integrity": "sha512-IgjKyaUSjsROSO8/D49Ab7hP8mJgTYcqApOqdPhLoPxAplXmkp+zRvsrSQjFn5by0rhm4VH0GAUELIPpx7B1yg=="
    },
  ## "node_modules/r-json": {
      "version": "1.2.10",
      "resolved": "https://registry.npmjs.org/r-json/-/r-json-1.2.10.tgz",
      "integrity": "sha512-hu9vyLjSlHXT62NAS7DjI9WazDlvjN0lgp3n431dCVnirVcLkZIpzSwA3orhZEKzdDD2jqNYI+w0yG0aFf4kpA=="
    },
   ## "node_modules/r-package-json": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/r-package-json/-/r-package-json-1.0.9.tgz",
      "integrity": "sha512-G4Vpf1KImWmmPFGdtWQTU0L9zk0SjqEC4qs/jE7AQ+Ylmr5kizMzGeC4wnHp5+ijPqNN+2ZPpvyjVNdN1CDVcg==",
      "dependencies": {
        "package-json-path": "^1.0.0",
        "r-json": "^1.2.1"
      }
    },
  ## "node_modules/rc": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/rc/-/rc-1.2.8.tgz",
      "integrity": "sha512-y3bGgqKj3QBdxLbLkomlohkvsA8gdAiUQlSBJnBhfn+BPxg4bc62d8TcBW15wavDfgexCgccckhcZvywyQYPOw==",
      "dependencies": {
        "deep-extend": "^0.6.0",
        "ini": "~1.3.0",
        "minimist": "^1.2.0",
        "strip-json-comments": "~2.0.1"
      },
   ##   "bin": {
        "rc": "cli.js"
      }
    },
  ##  "node_modules/read-all-stream": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/read-all-stream/-/read-all-stream-3.1.0.tgz",
      "integrity": "sha1-NcPhd/IHjveJ7kv6+kNzB06u9Po=",
      "dependencies": {
        "pinkie-promise": "^2.0.0",
        "readable-stream": "^2.0.0"
      },
    ##  "engines": {
        "node": ">=0.10.0"
      }
    },
  ##  "node_modules/readable-stream": {
      "version": "2.3.7",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.7.tgz",
      "integrity": "sha512-Ebho8K4jIbHAxnuxi7o42OrZgF/ZTNcsZj6nRKyUmkhLFq8CHItp/fy6hQZuZmP/n3yZ9VBUbp4zz/mX8hmYPw==",
      "dependencies": {
        "core-util-is": "~1.0.0",
        "inherits": "~2.0.3",
        "isarray": "~1.0.0",
        "process-nextick-args": "~2.0.0",
        "safe-buffer": "~5.1.1",
        "string_decoder": "~1.1.1",
        "util-deprecate": "~1.0.1"
      }
    },
  ##  "node_modules/registry-auth-token": {
      "version": "3.4.0",
      "resolved": "https://registry.npmjs.org/registry-auth-token/-/registry-auth-token-3.4.0.tgz",
      "integrity": "sha512-4LM6Fw8eBQdwMYcES4yTnn2TqIasbXuwDx3um+QRs7S55aMKCBKBxvPXl2RiUjHwuJLTyYfxSpmfSAjQpcuP+A==",
      "dependencies": {
        "rc": "^1.1.6",
        "safe-buffer": "^5.0.1"
      }
    },
 ##   "node_modules/registry-url": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/registry-url/-/registry-url-3.1.0.tgz",
      "integrity": "sha1-PU74cPc93h138M+aOBQyRE4XSUI=",
      "dependencies": {
        "rc": "^1.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
##    "node_modules/resolve": {
      "version": "1.22.0",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.22.0.tgz",
      "integrity": "sha512-Hhtrw0nLeSrFQ7phPp4OOcVjLPIeMnRlr5mcnVuMe7M/7eBn98A3hmFRLoFo3DLZkivSYwhRUJTyPyWAk56WLw==",
      "dependencies": {
        "is-core-module": "^2.8.1",
        "path-parse": "^1.0.7",
        "supports-preserve-symlinks-flag": "^1.0.0"
      },
   ##   "bin": {
        "resolve": "bin/resolve"
      },
   ##   "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
  ##  "node_modules/safe-buffer": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
      "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g=="
    },
   ## "node_modules/semver": {
      "version": "5.7.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
      "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
      "bin": {
        "semver": "bin/semver"
      }
    },
 ##   "node_modules/sliced": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/sliced/-/sliced-1.0.1.tgz",
      "integrity": "sha1-CzpmK10Ewxd7GSa+qCsD+Dei70E="
    },
  ##  "node_modules/spdx-correct": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/spdx-correct/-/spdx-correct-3.1.1.tgz",
      "integrity": "sha512-cOYcUWwhCuHCXi49RhFRCyJEK3iPj1Ziz9DpViV3tbZOwXD49QzIN3MpOLJNxh2qwq2lJJZaKMVw9qNi4jTC0w==",
      "dependencies": {
        "spdx-expression-parse": "^3.0.0",
        "spdx-license-ids": "^3.0.0"
      }
    },
  ##  "node_modules/spdx-exceptions": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/spdx-exceptions/-/spdx-exceptions-2.3.0.tgz",
      "integrity": "sha512-/tTrYOC7PPI1nUAgx34hUpqXuyJG+DTHJTnIULG4rDygi4xu/tfgmq1e1cIRwRzwZgo4NLySi+ricLkZkw4i5A=="
    },
  ##  "node_modules/spdx-expression-parse": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/spdx-expression-parse/-/spdx-expression-parse-3.0.1.tgz",
      "integrity": "sha512-cbqHunsQWnJNE6KhVSMsMeH5H/L9EpymbzqTQ3uLwNCLZ1Q481oWaofqH7nO6V07xlXwY6PhQdQ2IedWx/ZK4Q==",
      "dependencies": {
        "spdx-exceptions": "^2.1.0",
        "spdx-license-ids": "^3.0.0"
      }
    },
 ##   "node_modules/spdx-license-ids": {
      "version": "3.0.11",
      "resolved": "https://registry.npmjs.org/spdx-license-ids/-/spdx-license-ids-3.0.11.tgz",
      "integrity": "sha512-Ctl2BrFiM0X3MANYgj3CkygxhRmr9mi6xhejbdO960nF6EDJApTYpn0BQnDKlnNBULKiCN1n3w9EBkHK8ZWg+g=="
    },
 ##   "node_modules/string_decoder": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
      "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
      "dependencies": {
        "safe-buffer": "~5.1.0"
      }
    },
 ##   "node_modules/strip-json-comments": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-2.0.1.tgz",
      "integrity": "sha1-PFMZQukIwml8DsNEhYwobHygpgo=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
 ##   "node_modules/supports-preserve-symlinks-flag": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",
      "integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
 ##   "node_modules/timed-out": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/timed-out/-/timed-out-2.0.0.tgz",
      "integrity": "sha1-84sK6B03R9YoAB9B2vxlKs5nHAo=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
##    "node_modules/tmp": {
      "version": "0.0.28",
      "resolved": "https://registry.npmjs.org/tmp/-/tmp-0.0.28.tgz",
      "integrity": "sha1-Fyc1t/YU6nrzlmT6hM8N5OUV0SA=",
      "dependencies": {
        "os-tmpdir": "~1.0.1"
      },
   ##   "engines": {
        "node": ">=0.4.0"
      }
    },
##    "node_modules/typpy": {
      "version": "2.3.13",
      "resolved": "https://registry.npmjs.org/typpy/-/typpy-2.3.13.tgz",
      "integrity": "sha512-vOxIcQz9sxHi+rT09SJ5aDgVgrPppQjwnnayTrMye1ODaU8gIZTDM19t9TxmEElbMihx2Nq/0/b/MtyKfayRqA==",
      "dependencies": {
        "function.name": "^1.0.3"
      }
    },
 ##   "node_modules/ul": {
      "version": "5.2.15",
      "resolved": "https://registry.npmjs.org/ul/-/ul-5.2.15.tgz",
      "integrity": "sha512-svLEUy8xSCip5IWnsRa0UOg+2zP0Wsj4qlbjTmX6GJSmvKMHADBuHOm1dpNkWqWPIGuVSqzUkV3Cris5JrlTRQ==",
      "dependencies": {
        "deffy": "^2.2.2",
        "typpy": "^2.3.4"
      }
    },
 ##   "node_modules/unzip-response": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/unzip-response/-/unzip-response-1.0.2.tgz",
      "integrity": "sha1-uYTwh3/AqJwsdzzB73tbIytbBv4=",
      "engines": {
        "node": ">=0.10"
      }
    },
 ##   "node_modules/url-parse-lax": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/url-parse-lax/-/url-parse-lax-1.0.0.tgz",
      "integrity": "sha1-evjzA2Rem9eaJy56FKxovAYJ2nM=",
      "dependencies": {
        "prepend-http": "^1.0.1"
      },
  ##    "engines": {
        "node": ">=0.10.0"
      }
    },
 ##   "node_modules/util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha1-RQ1Nyfpw3nMnYvvS1KKJgUGaDM8="
    },
  ##  "node_modules/validate-npm-package-license": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/validate-npm-package-license/-/validate-npm-package-license-3.0.4.tgz",
      "integrity": "sha512-DpKm2Ui/xN7/HQKCtpZxoRWBhZ9Z0kqtygG8XCgNQ8ZlDnxuQmWhj566j8fN4Cu3/JmbhsDo7fcAJq4s9h27Ew==",
      "dependencies": {
        "spdx-correct": "^3.0.0",
        "spdx-expression-parse": "^3.0.0"
      }
    }
  },
##  "dependencies": {
    "abs": {
      "version": "1.3.14",
      "resolved": "https://registry.npmjs.org/abs/-/abs-1.3.14.tgz",
      "integrity": "sha512-PrS26IzwKLWwuURpiKl8wRmJ2KdR/azaVrLEBWG/TALwT20Y7qjtYp1qcMLHA4206hBHY5phv3w4pjf9NPv4Vw==",
      "requires": {
        "ul": "^5.0.0"
      }
    },
##    "capture-stack-trace": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/capture-stack-trace/-/capture-stack-trace-1.0.1.tgz",
      "integrity": "sha512-mYQLZnx5Qt1JgB1WEiMCf2647plpGeQ2NMR/5L0HNZzGQo4fuSPnK+wjfPnKZV0aiJDgzmWqqkV/g7JD+DW0qw=="
    },
 ##   "core-util-is": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.3.tgz",
      "integrity": "sha512-ZQBvi1DcpJ4GDqanjucZ2Hj3wEO5pZDS89BWbkcrvdxksJorwUDDZamX9ldFkp9aw2lmBDLgkObEA4DWNJ9FYQ=="
    },
 ##   "create-error-class": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/create-error-class/-/create-error-class-3.0.2.tgz",
      "integrity": "sha1-Br56vvlHo/FKMP1hBnHUAbyot7Y=",
      "requires": {
        "capture-stack-trace": "^1.0.0"
      }
    },
 ##   "deep-extend": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/deep-extend/-/deep-extend-0.6.0.tgz",
      "integrity": "sha512-LOHxIOaPYdHlJRtCQfDIVZtfw/ufM8+rVj649RIHzcm/vGwQRXFt6OPqIFWsm2XEMrNIEtWR64sY1LEKD2vAOA=="
    },
  ##  "deffy": {
      "version": "2.2.4",
      "resolved": "https://registry.npmjs.org/deffy/-/deffy-2.2.4.tgz",
      "integrity": "sha512-pLc9lsbsWjr6RxmJ2OLyvm+9l4j1yK69h+TML/gUit/t3vTijpkNGh8LioaJYTGO7F25m6HZndADcUOo2PsiUg==",
      "requires": {
        "typpy": "^2.0.0"
      }
    },
  ##  "duplexer2": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/duplexer2/-/duplexer2-0.1.4.tgz",
      "integrity": "sha1-ixLauHjA1p4+eJEFFmKjL8a93ME=",
      "requires": {
        "readable-stream": "^2.0.2"
      }
    },
  ##  "err": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/err/-/err-1.1.1.tgz",
      "integrity": "sha1-65KOLhGjFmSPeCgz0PlyWLpDwvg=",
      "requires": {
        "typpy": "^2.2.0"
      }
    },
  ##  "error-ex": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/error-ex/-/error-ex-1.3.2.tgz",
      "integrity": "sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==",
      "requires": {
        "is-arrayish": "^0.2.1"
      }
    },
 ##   "exec-limiter": {
      "version": "3.2.13",
      "resolved": "https://registry.npmjs.org/exec-limiter/-/exec-limiter-3.2.13.tgz",
      "integrity": "sha512-86Ri699bwiHZVBzTzNj8gspqAhCPchg70zPVWIh3qzUOA1pUMcb272Em3LPk8AE0mS95B9yMJhtqF8vFJAn0dA==",
      "requires": {
        "limit-it": "^3.0.0",
        "typpy": "^2.1.0"
      }
    },
 ##   "function-bind": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz",
      "integrity": "sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A=="
    },
 ##   "function.name": {
      "version": "1.0.13",
      "resolved": "https://registry.npmjs.org/function.name/-/function.name-1.0.13.tgz",
      "integrity": "sha512-mVrqdoy5npWZyoXl4DxCeuVF6delDcQjVS9aPdvLYlBxtMTZDR2B5GVEQEoM1jJyspCqg3C0v4ABkLE7tp9xFA==",
      "requires": {
        "noop6": "^1.0.1"
      }
    },
  ##  "git-package-json": {
      "version": "1.4.10",
      "resolved": "https://registry.npmjs.org/git-package-json/-/git-package-json-1.4.10.tgz",
      "integrity": "sha512-DRAcvbzd2SxGK7w8OgYfvKqhFliT5keX0lmSmVdgScgf1kkl5tbbo7Pam6uYoCa1liOiipKxQZG8quCtGWl/fA==",
      "requires": {
        "deffy": "^2.2.1",
        "err": "^1.1.1",
        "gry": "^5.0.0",
        "normalize-package-data": "^2.3.5",
        "oargv": "^3.4.1",
        "one-by-one": "^3.1.0",
        "r-json": "^1.2.1",
        "r-package-json": "^1.0.0",
        "tmp": "0.0.28"
      }
    },
##    "git-source": {
      "version": "1.1.10",
      "resolved": "https://registry.npmjs.org/git-source/-/git-source-1.1.10.tgz",
      "integrity": "sha512-XZZ7ZgnLL35oLgM/xjnLYgtlKlxJG0FohC1kWDvGkU7s1VKGXK0pFF/g1itQEwQ3D+uTQzBnzPi8XbqOv7Wc1Q==",
      "requires": {
        "git-url-parse": "^5.0.1"
      }
    },
 ##   "git-up": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/git-up/-/git-up-1.2.1.tgz",
      "integrity": "sha1-JkSAoAax2EJhrB/gmjpRacV+oZ0=",
      "requires": {
        "is-ssh": "^1.0.0",
        "parse-url": "^1.0.0"
      }
    },
  ##  "git-url-parse": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/git-url-parse/-/git-url-parse-5.0.1.tgz",
      "integrity": "sha1-/j15xnRq4FBIz6UIyB553du6OEM=",
      "requires": {
        "git-up": "^1.0.0"
      }
    },
  ##  "got": {
      "version": "5.6.0",
      "resolved": "https://registry.npmjs.org/got/-/got-5.6.0.tgz",
      "integrity": "sha1-ux1+4WO3gIK7yOuDbz85UATqb78=",
      "requires": {
        "create-error-class": "^3.0.1",
        "duplexer2": "^0.1.4",
        "is-plain-obj": "^1.0.0",
        "is-redirect": "^1.0.0",
        "is-retry-allowed": "^1.0.0",
        "is-stream": "^1.0.0",
        "lowercase-keys": "^1.0.0",
        "node-status-codes": "^1.0.0",
        "object-assign": "^4.0.1",
        "parse-json": "^2.1.0",
        "pinkie-promise": "^2.0.0",
        "read-all-stream": "^3.0.0",
        "readable-stream": "^2.0.5",
        "timed-out": "^2.0.0",
        "unzip-response": "^1.0.0",
        "url-parse-lax": "^1.0.0"
      }
    },
  ##  "gry": {
      "version": "5.0.8",
      "resolved": "https://registry.npmjs.org/gry/-/gry-5.0.8.tgz",
      "integrity": "sha512-meq9ZjYVpLzZh3ojhTg7IMad9grGsx6rUUKHLqPnhLXzJkRQvEL2U3tQpS5/WentYTtHtxkT3Ew/mb10D6F6/g==",
      "requires": {
        "abs": "^1.2.1",
        "exec-limiter": "^3.0.0",
        "one-by-one": "^3.0.0",
        "ul": "^5.0.0"
      }
    },
##    "has": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/has/-/has-1.0.3.tgz",
      "integrity": "sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==",
      "requires": {
        "function-bind": "^1.1.1"
      }
    },
 ##   "hosted-git-info": {
      "version": "2.8.9",
      "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.8.9.tgz",
      "integrity": "sha512-mxIDAb9Lsm6DoOJ7xH+5+X4y1LU/4Hi50L9C5sIswK3JzULS4bwk1FvjdBgvYR4bzT4tuUQiC15FE2f5HbLvYw=="
    },
 ##   "inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ=="
    },
 ##   "ini": {
      "version": "1.3.8",
      "resolved": "https://registry.npmjs.org/ini/-/ini-1.3.8.tgz",
      "integrity": "sha512-JV/yugV2uzW5iMRSiZAyDtQd+nxtUnjeLt0acNdw98kKLrvuRVyB80tsREOE7yvGVgalhZ6RNXCmEHkUKBKxew=="
    },
  ##  "is-arrayish": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
      "integrity": "sha1-d8mYQFJ6qOyxqLppe4BkWnqSap0="
    },
 ##   "is-core-module": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.8.1.tgz",
      "integrity": "sha512-SdNCUs284hr40hFTFP6l0IfZ/RSrMXF3qgoRHd3/79unUTvrFO/JoXwkGm+5J/Oe3E/b5GsnG330uUNgRpu1PA==",
      "requires": {
        "has": "^1.0.3"
      }
    },
 ##   "is-plain-obj": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-plain-obj/-/is-plain-obj-1.1.0.tgz",
      "integrity": "sha1-caUMhCnfync8kqOQpKA7OfzVHT4="
    },
 ##   "is-redirect": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-redirect/-/is-redirect-1.0.0.tgz",
      "integrity": "sha1-HQPd7VO9jbDzDCbk+V02/HyH3CQ="
    },
  ##  "is-retry-allowed": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/is-retry-allowed/-/is-retry-allowed-1.2.0.tgz",
      "integrity": "sha512-RUbUeKwvm3XG2VYamhJL1xFktgjvPzL0Hq8C+6yrWIswDy3BIXGqCxhxkc30N9jqK311gVU137K8Ei55/zVJRg=="
    },
  ##  "is-ssh": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/is-ssh/-/is-ssh-1.3.3.tgz",
      "integrity": "sha512-NKzJmQzJfEEma3w5cJNcUMxoXfDjz0Zj0eyCalHn2E6VOwlzjZo0yuO2fcBSf8zhFuVCL/82/r5gRcoi6aEPVQ==",
      "requires": {
        "protocols": "^1.1.0"
      }
    },
  ##  "is-stream": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-1.1.0.tgz",
      "integrity": "sha1-EtSj3U5o4Lec6428hBc66A2RykQ="
    },
   ## "isarray": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
      "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE="
    },
   ## "iterate-object": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/iterate-object/-/iterate-object-1.3.4.tgz",
      "integrity": "sha512-4dG1D1x/7g8PwHS9aK6QV5V94+ZvyP4+d19qDv43EzImmrndysIl4prmJ1hWWIGCqrZHyaHBm6BSEWHOLnpoNw=="
    },
  ##  "limit-it": {
      "version": "3.2.10",
      "resolved": "https://registry.npmjs.org/limit-it/-/limit-it-3.2.10.tgz",
      "integrity": "sha512-T0NK99pHnkimldr1WUqvbGV1oWDku/xC9J/OqzJFsV1jeOS6Bwl8W7vkeQIBqwiON9dTALws+rX/XPMQqWerDQ==",
      "requires": {
        "typpy": "^2.0.0"
      }
    },
  ##  "lowercase-keys": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/lowercase-keys/-/lowercase-keys-1.0.1.tgz",
      "integrity": "sha512-G2Lj61tXDnVFFOi8VZds+SoQjtQC3dgokKdDG2mTm1tx4m50NUHBOZSBwQQHyy0V12A0JTG4icfZQH+xPyh8VA=="
    },
 ##   "minimist": {
      "version": "1.2.6",
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.6.tgz",
      "integrity": "sha512-Jsjnk4bw3YJqYzbdyBiNsPWHPfO++UGG749Cxs6peCu5Xg4nrena6OVxOYxrQTqww0Jmwt+Ref8rggumkTLz9Q=="
    },
 ##   "node-status-codes": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/node-status-codes/-/node-status-codes-1.0.0.tgz",
      "integrity": "sha1-WuVUHQJGRdMqWPzdyc7s6nrjrC8="
    },
##    "noop6": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/noop6/-/noop6-1.0.9.tgz",
      "integrity": "sha512-DB3Hwyd89dPr5HqEPg3YHjzvwh/mCqizC1zZ8vyofqc+TQRyPDnT4wgXXbLGF4z9YAzwwTLi8pNLhGqcbSjgkA=="
    },
 ##   "normalize-package-data": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-2.5.0.tgz",
      "integrity": "sha512-/5CMN3T0R4XTj4DcGaexo+roZSdSFW/0AOOTROrjxzCG1wrWXEsGbRKevjlIL+ZDE4sZlJr5ED4YW0yqmkK+eA==",
      "requires": {
        "hosted-git-info": "^2.1.4",
        "resolve": "^1.10.0",
        "semver": "2 || 3 || 4 || 5",
        "validate-npm-package-license": "^3.0.1"
      }
    },
##    "oargv": {
      "version": "3.4.10",
      "resolved": "https://registry.npmjs.org/oargv/-/oargv-3.4.10.tgz",
      "integrity": "sha512-SXaMANv9sr7S/dP0vj0+Ybipa47UE1ntTWQ2rpPRhC6Bsvfl+Jg03Xif7jfL0sWKOYWK8oPjcZ5eJ82t8AP/8g==",
      "requires": {
        "iterate-object": "^1.1.0",
        "ul": "^5.0.0"
      }
    },
  ##  "obj-def": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/obj-def/-/obj-def-1.0.9.tgz",
      "integrity": "sha512-bQ4ya3VYD6FAA1+s6mEhaURRHSmw4+sKaXE6UyXZ1XDYc5D+c7look25dFdydmLd18epUegh398gdDkMUZI9xg==",
      "requires": {
        "deffy": "^2.2.2"
      }
    },
 ##   "object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM="
    },
  ##  "one-by-one": {
      "version": "3.2.8",
      "resolved": "https://registry.npmjs.org/one-by-one/-/one-by-one-3.2.8.tgz",
      "integrity": "sha512-HR/pSzZdm46Xqj58K+Bu64kMbSTw8/u77AwWvV+rprO/OsuR++pPlkUJn+SmwqBGRgHKwSKQ974V3uls7crIeQ==",
      "requires": {
        "obj-def": "^1.0.0",
        "sliced": "^1.0.1"
      }
    },
##    "os-tmpdir": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/os-tmpdir/-/os-tmpdir-1.0.2.tgz",
      "integrity": "sha1-u+Z0BseaqFxc/sdm/lc0VV36EnQ="
    },
  ##  "package-json": {
      "version": "2.4.0",
      "resolved": "https://registry.npmjs.org/package-json/-/package-json-2.4.0.tgz",
      "integrity": "sha1-DRW9Z9HLvduyyiIv8u24a8sxqLs=",
      "requires": {
        "got": "^5.0.0",
        "registry-auth-token": "^3.0.1",
        "registry-url": "^3.0.3",
        "semver": "^5.1.0"
      }
    },
  ##  "package-json-path": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/package-json-path/-/package-json-path-1.0.9.tgz",
      "integrity": "sha512-uNu7f6Ef7tQHZRnkyVnCtzdSYVN9uBtge/sG7wzcUaawFWkPYUq67iXxRGrQSg/q0tzxIB8jSyIYUKjG2Jn//A==",
      "requires": {
        "abs": "^1.2.1"
      }
    },
   ## "package.json": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/package.json/-/package.json-2.0.1.tgz",
      "integrity": "sha1-+IYFnSpJ7QduZIg2ldc7K0bSHW0=",
      "requires": {
        "git-package-json": "^1.4.0",
        "git-source": "^1.1.0",
        "package-json": "^2.3.1"
      }
    },
  ##  "parse-json": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-2.2.0.tgz",
      "integrity": "sha1-9ID0BDTvgHQfhGkJn43qGPVaTck=",
      "requires": {
        "error-ex": "^1.2.0"
      }
    },
  ##  "parse-url": {
      "version": "1.3.11",
      "resolved": "https://registry.npmjs.org/parse-url/-/parse-url-1.3.11.tgz",
      "integrity": "sha1-V8FUKKuKiSsfQ4aWRccR0OFEtVQ=",
      "requires": {
        "is-ssh": "^1.3.0",
        "protocols": "^1.4.0"
      }
    },
  ##  "path-parse": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
      "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw=="
    },
  ##  "pinkie": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/pinkie/-/pinkie-2.0.4.tgz",
      "integrity": "sha1-clVrgM+g1IqXToDnckjoDtT3+HA="
    },
 ##   "pinkie-promise": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/pinkie-promise/-/pinkie-promise-2.0.1.tgz",
      "integrity": "sha1-ITXW36ejWMBprJsXh3YogihFD/o=",
      "requires": {
        "pinkie": "^2.0.0"
      }
    },
  ##  "prepend-http": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/prepend-http/-/prepend-http-1.0.4.tgz",
      "integrity": "sha1-1PRWKwzjaW5BrFLQ4ALlemNdxtw="
    },
  ##  "process-nextick-args": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",
      "integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag=="
    },
  ##  "protocols": {
      "version": "1.4.8",
      "resolved": "https://registry.npmjs.org/protocols/-/protocols-1.4.8.tgz",
      "integrity": "sha512-IgjKyaUSjsROSO8/D49Ab7hP8mJgTYcqApOqdPhLoPxAplXmkp+zRvsrSQjFn5by0rhm4VH0GAUELIPpx7B1yg=="
    },
   ## "r-json": {
      "version": "1.2.10",
      "resolved": "https://registry.npmjs.org/r-json/-/r-json-1.2.10.tgz",
      "integrity": "sha512-hu9vyLjSlHXT62NAS7DjI9WazDlvjN0lgp3n431dCVnirVcLkZIpzSwA3orhZEKzdDD2jqNYI+w0yG0aFf4kpA=="
    },
  ##  "r-package-json": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/r-package-json/-/r-package-json-1.0.9.tgz",
      "integrity": "sha512-G4Vpf1KImWmmPFGdtWQTU0L9zk0SjqEC4qs/jE7AQ+Ylmr5kizMzGeC4wnHp5+ijPqNN+2ZPpvyjVNdN1CDVcg==",
      "requires": {
        "package-json-path": "^1.0.0",
        "r-json": "^1.2.1"
      }
    },
   ## "rc": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/rc/-/rc-1.2.8.tgz",
      "integrity": "sha512-y3bGgqKj3QBdxLbLkomlohkvsA8gdAiUQlSBJnBhfn+BPxg4bc62d8TcBW15wavDfgexCgccckhcZvywyQYPOw==",
      "requires": {
        "deep-extend": "^0.6.0",
        "ini": "~1.3.0",
        "minimist": "^1.2.0",
        "strip-json-comments": "~2.0.1"
      }
    },
   ## "read-all-stream": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/read-all-stream/-/read-all-stream-3.1.0.tgz",
      "integrity": "sha1-NcPhd/IHjveJ7kv6+kNzB06u9Po=",
      "requires": {
        "pinkie-promise": "^2.0.0",
        "readable-stream": "^2.0.0"
      }
    },
  ##  "readable-stream": {
      "version": "2.3.7",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.7.tgz",
      "integrity": "sha512-Ebho8K4jIbHAxnuxi7o42OrZgF/ZTNcsZj6nRKyUmkhLFq8CHItp/fy6hQZuZmP/n3yZ9VBUbp4zz/mX8hmYPw==",
      "requires": {
        "core-util-is": "~1.0.0",
        "inherits": "~2.0.3",
        "isarray": "~1.0.0",
        "process-nextick-args": "~2.0.0",
        "safe-buffer": "~5.1.1",
        "string_decoder": "~1.1.1",
        "util-deprecate": "~1.0.1"
      }
    },
  ##  "registry-auth-token": {
      "version": "3.4.0",
      "resolved": "https://registry.npmjs.org/registry-auth-token/-/registry-auth-token-3.4.0.tgz",
      "integrity": "sha512-4LM6Fw8eBQdwMYcES4yTnn2TqIasbXuwDx3um+QRs7S55aMKCBKBxvPXl2RiUjHwuJLTyYfxSpmfSAjQpcuP+A==",
      "requires": {
        "rc": "^1.1.6",
        "safe-buffer": "^5.0.1"
      }
    },
    "registry-url": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/registry-url/-/registry-url-3.1.0.tgz",
      "integrity": "sha1-PU74cPc93h138M+aOBQyRE4XSUI=",
      "requires": {
        "rc": "^1.0.1"
      }
    },
 ##   "resolve": {
      "version": "1.22.0",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.22.0.tgz",
      "integrity": "sha512-Hhtrw0nLeSrFQ7phPp4OOcVjLPIeMnRlr5mcnVuMe7M/7eBn98A3hmFRLoFo3DLZkivSYwhRUJTyPyWAk56WLw==",
      "requires": {
        "is-core-module": "^2.8.1",
        "path-parse": "^1.0.7",
        "supports-preserve-symlinks-flag": "^1.0.0"
      }
    },
  ##  "safe-buffer": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
      "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g=="
    },
##    "semver": {
      "version": "5.7.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
      "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ=="
    },
  ##  "sliced": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/sliced/-/sliced-1.0.1.tgz",
      "integrity": "sha1-CzpmK10Ewxd7GSa+qCsD+Dei70E="
    },
  ##  "spdx-correct": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/spdx-correct/-/spdx-correct-3.1.1.tgz",
      "integrity": "sha512-cOYcUWwhCuHCXi49RhFRCyJEK3iPj1Ziz9DpViV3tbZOwXD49QzIN3MpOLJNxh2qwq2lJJZaKMVw9qNi4jTC0w==",
      "requires": {
        "spdx-expression-parse": "^3.0.0",
        "spdx-license-ids": "^3.0.0"
      }
    },
  ##  "spdx-exceptions": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/spdx-exceptions/-/spdx-exceptions-2.3.0.tgz",
      "integrity": "sha512-/tTrYOC7PPI1nUAgx34hUpqXuyJG+DTHJTnIULG4rDygi4xu/tfgmq1e1cIRwRzwZgo4NLySi+ricLkZkw4i5A=="
    },
  ## "spdx-expression-parse": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/spdx-expression-parse/-/spdx-expression-parse-3.0.1.tgz",
      "integrity": "sha512-cbqHunsQWnJNE6KhVSMsMeH5H/L9EpymbzqTQ3uLwNCLZ1Q481oWaofqH7nO6V07xlXwY6PhQdQ2IedWx/ZK4Q==",
      "requires": {
        "spdx-exceptions": "^2.1.0",
        "spdx-license-ids": "^3.0.0"
      }
    },
   ## "spdx-license-ids": {
      "version": "3.0.11",
      "resolved": "https://registry.npmjs.org/spdx-license-ids/-/spdx-license-ids-3.0.11.tgz",
      "integrity": "sha512-Ctl2BrFiM0X3MANYgj3CkygxhRmr9mi6xhejbdO960nF6EDJApTYpn0BQnDKlnNBULKiCN1n3w9EBkHK8ZWg+g=="
    },
  ## "string_decoder": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
      "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
      "requires": {
        "safe-buffer": "~5.1.0"
      }
    },
   ## "strip-json-comments": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-2.0.1.tgz",
      "integrity": "sha1-PFMZQukIwml8DsNEhYwobHygpgo="
    },
  ##  "supports-preserve-symlinks-flag": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",
      "integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w=="
    },
  ##  "timed-out": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/timed-out/-/timed-out-2.0.0.tgz",
      "integrity": "sha1-84sK6B03R9YoAB9B2vxlKs5nHAo="
    },
 ##   "tmp": {
      "version": "0.0.28",
      "resolved": "https://registry.npmjs.org/tmp/-/tmp-0.0.28.tgz",
      "integrity": "sha1-Fyc1t/YU6nrzlmT6hM8N5OUV0SA=",
      "requires": {
        "os-tmpdir": "~1.0.1"
      }
    },
  ##  "typpy": {
      "version": "2.3.13",
      "resolved": "https://registry.npmjs.org/typpy/-/typpy-2.3.13.tgz",
      "integrity": "sha512-vOxIcQz9sxHi+rT09SJ5aDgVgrPppQjwnnayTrMye1ODaU8gIZTDM19t9TxmEElbMihx2Nq/0/b/MtyKfayRqA==",
      "requires": {
        "function.name": "^1.0.3"
      }
    },
 ##   "ul": {
      "version": "5.2.15",
      "resolved": "https://registry.npmjs.org/ul/-/ul-5.2.15.tgz",
      "integrity": "sha512-svLEUy8xSCip5IWnsRa0UOg+2zP0Wsj4qlbjTmX6GJSmvKMHADBuHOm1dpNkWqWPIGuVSqzUkV3Cris5JrlTRQ==",
      "requires": {
        "deffy": "^2.2.2",
        "typpy": "^2.3.4"
      }
    },
  ##  "unzip-response": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/unzip-response/-/unzip-response-1.0.2.tgz",
      "integrity": "sha1-uYTwh3/AqJwsdzzB73tbIytbBv4="
    },
   ## "url-parse-lax": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/url-parse-lax/-/url-parse-lax-1.0.0.tgz",
      "integrity": "sha1-evjzA2Rem9eaJy56FKxovAYJ2nM=",
      "requires": {
        "prepend-http": "^1.0.1"
      }
    },
   ## "util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha1-RQ1Nyfpw3nMnYvvS1KKJgUGaDM8="
    },
   ## "validate-npm-package-license": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/validate-npm-package-license/-/validate-npm-package-license-3.0.4.tgz",
      "integrity": "sha512-DpKm2Ui/xN7/HQKCtpZxoRWBhZ9Z0kqtygG8XCgNQ8ZlDnxuQmWhj566j8fN4Cu3/JmbhsDo7fcAJq4s9h27Ew==",
      "requires": {
        "spdx-correct": "^3.0.0",
        "spdx-expression-parse": "^3.0.0"
      }
    }
  }
}


//   ```## _sendRequest(method, endpoint,parameters, callback) {
//     if(method === 'POST'){
//       const options = {
//         url: `${baseUri}/${endpoint}`,
//       ## headers: {
//           'X-Api-Id': `${this.apiId}`,
//           'X-Api-Secret': `${this.apiSecret}`,
//           'X-Api-Key': `${this.apiKey}`,
//           "Content-Type": "application/x-www-form-urlencoded" 
//         },```
//      body: `${parameters}`
//       };
//      ```##request.post(options, function(error, response, body) {

        

//         ## if (!error & response.statusCode === 200) {
//           callback(response)
//         }
//       }) 
//     }
//     if(method === 'GET'){

// ## sage

// ## {apiKey:'',apiSecret:'',apiId:'701f02d46836e2c2f0f4fdf5719dfc2f'}

// ## const ot = new 
// OnetapCloud('701f02d46836e2c2f0f4fdf5719dfc2f'89016f59a0e6e24a1457dd330f214638f07298efdc58ba947e81ebfea47f54b3','1tgHv0nKwEsBc12s0230D9AzMYf1RRjo')

// ##script stuff

// ## ot.GetAllScripts(function(result) {
//   console.log(result)
// })

// ## ot.GetScript("75535", function(result) {
//    console.log(result.script);
// });

// ## ot.GetScriptInvites("75535", function(result) {
//   console.log(result);
// });

// ## ot.CreateScriptSubscription("67909","30152", function(result) {
//   console.log(result);
// });

// ## ot.CreateScriptInvite("75535", 1, 1, function(result) {
//     console.log(result);
// });

// ## ot.UpdateScript("61784", "coolestjsever", function(result) {
//     console.log(result);
// });

// ## ot.DeleteScriptInvite("75535", 21769, function(result) {
//   console.log(result);
// });

// ## CONFIG STUFF

// ## ot.GetAllConfigs(function(result) {
//   console.log(result)
// })

// ## ot.CreateConfig("Name", "=", function(result) {
//     console.log(result)
//   })

// ## #ot.GetConfig("37886",function(result) {
//   console.log(result)
// })

// ## ot.DeleteConfig("151058",function(result) {
//   console.log(result)
// })

// ## ot.UpdateConfig("185888", "yellowthinting","==", function(result) {
//     console.log(result);
// });

// ## ot.GetAllConfigsInvites(function(result) {
//     console.log(result);
// });

// ## ot.GetConfigInvites("263091",function(result) {
//   console.log(result);
// });

// ## ot.CreateConfigInvite("263091",1,1,function(result) {
//   console.log(result);15858
// });

// ## ot.DeleteConfigInvite("263091", 15858, function(result) {
//   console.log(result);
// });

// ## ot.GetConfigSubscriptions("263091",function(result) {
//   console.log(result);
// });


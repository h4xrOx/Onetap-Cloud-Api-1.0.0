
const request = require('request')

const baseUri = "https://api.onetap.com/cloud"

class OnetapCloud {
  constructor(apiId, apiSecret, apiKey) {
    this.apiId = apiId
    this.apiSecret = apiSecret
    this.apiKey = apiKey
  }
  DeleteScriptInvite(script_id,invite_id, callback) {
    const endpoint = `scripts/${script_id}/invites/`
    const Parameters = {
        'invite_id': invite_id,
    }
    this._sendRequest('DELETE', endpoint, Parameters, callback)
  }
  CreateScriptInvite(script_id, max_age, max_uses, callback) {
    const endpoint = `scripts/${script_id}/invites/`
    const Parameters = {
        'max_age': max_age,
        "max_uses": max_uses
    }
    this._sendRequest('POST', endpoint, Parameters, callback)
  }
  UpdateScript(script_id, name, callback) {
    const endpoint = `scripts/${script_id}/`
    const Parameters = {
        'name': name
    }
    this._sendRequest('POST', endpoint, Parameters, callback)
  }
  GetAllScripts(callback) {
    const endpoint = 'scripts/'
    this._sendGetRequest('GET', endpoint, callback)
  }
  GetScript(script_id, callback) {
    const endpoint = `scripts/${script_id}/`
    this._sendGetRequest('GET', endpoint,callback)
  }
  GetScriptInvites(script_id, callback) {
    const endpoint = `scripts/${script_id}/invites/`
    this._sendGetRequest('GET', endpoint,callback)
  }
  GetAllScriptsInvites(callback) {
    const endpoint = `scripts/invites/`
    this._sendGetRequest('GET', endpoint,callback)
  }
  GetAllScriptsSubscriptions(callback) {
    const endpoint = 'scripts/subscriptions/'
    this._sendGetRequest('GET', endpoint, callback)
  }
  GetScriptSubscriptions(script_id,callback) {
    const endpoint = `scripts/${script_id}/subscriptions/`
    this._sendGetRequest('GET', endpoint, callback)
  }
  CreateScriptSubscription(script_id, user_id, callback) {
    const endpoint = `scripts/${script_id}/subscriptions/`
    const Parameters = {
        'user_id': user_id,
    }
    this._sendRequest('POST', endpoint, Parameters, callback)
  }
  DeleteScriptSubscription(script_id,user_id, callback) {
    const endpoint = `scripts/${script_id}/subscription/`
    const Parameters = {
        'user_id': user_id,
    }
    this._sendRequest('DELETE', endpoint, Parameters, callback)
  }
  GetAllConfigs(callback) {
    const endpoint = 'configs/'
    this._sendGetRequest('GET', endpoint, callback)
  }
  GetConfig(config_id, callback) {
    const endpoint = `configs/${config_id}/`
    this._sendGetRequest('GET', endpoint, callback)
  }
  DeleteConfig(config_id, callback) {
    const endpoint = `configs/${config_id}/`
    const Parameters = {
    }
    this._sendRequest('DELETE', endpoint, Parameters, callback)
  }
  UpdateConfig(config_id, name,data, callback) {
    const endpoint = `configs/${config_id}/`
    const Parameters = {
        'name': name,
        'data': data
    }
    this._sendRequest('POST', endpoint, Parameters, callback)
  }
  GetAllConfigsInvites(callback) {
    const endpoint = `configs/invites/`
    this._sendGetRequest('GET', endpoint, callback)
  }
  GetConfigInvites(config_id,callback) {
    const endpoint = `configs/${config_id}/invites/`
    this._sendGetRequest('GET', endpoint, callback)
  }
  CreateConfigInvite(config_id, max_age, max_uses, callback) {
    const endpoint = `configs/${config_id}/invites/`
    const Parameters = {
        'max_age': max_age,
        'max_uses': max_uses
    }
    this._sendRequest('POST', endpoint, Parameters, callback)
  }
  DeleteConfigInvite(config_id,invite_id, callback) {
    const endpoint = `configs/${config_id}/invites/`
    const Parameters = {
        'invite_id': invite_id,
    }
    this._sendRequest('DELETE', endpoint, Parameters, callback)
  }
  GetAllConfigSubscriptions(callback) {
    const endpoint = 'configs/subscriptions/'
    this._sendGetRequest('GET', endpoint, callback)
  }
  GetConfigSubscriptions(config_id,callback) {
    const endpoint = `configs/${config_id}/subscriptions/`
    this._sendGetRequest('GET', endpoint, callback)
  }
  CreateConfigSubscription(config_id, user_id, callback) {
    const endpoint = `configs/${config_id}/subscriptions/`
    const Parameters = {
        'user_id': user_id,
    }
    this._sendRequest('POST', endpoint, Parameters, callback)
  }
  DeleteScriptSubscription(config_id,user_id, callback) {
    const endpoint = `configs/${config_id}/subscription/`
    const Parameters = {
        'user_id': user_id,
    }
    this._sendRequest('DELETE', endpoint, Parameters, callback)
  }

  _sendGetRequest( method, endpoint, callback) {
    if(method === 'GET'){
        console.log("GET METHOD")
        const options = {
            url: `${baseUri}/${endpoint}`,
            headers: {
              'X-Api-Id': `${this.apiId}`,
              'X-Api-Secret': `${this.apiSecret}`,
              'X-Api-Key': `${this.apiKey}`,
              "Content-Type": "application/x-www-form-urlencoded",
            },
        };
     
    
        request.get(options, function(error, response, body) {
          if (!error & response.statusCode === 200) {
            callback(JSON.parse(response.body))
          }
        })
    }

  }
  _sendRequest( method, endpoint, Parameters,callback) {
    
    if(method === 'POST'){
        console.log("POST METHOD")
        const options = {
            url: `${baseUri}/${endpoint}`,
            headers: {
              'X-Api-Id': `${this.apiId}`,
              'X-Api-Secret': `${this.apiSecret}`,
              'X-Api-Key': `${this.apiKey}`,
              "Content-Type": "application/x-www-form-urlencoded",
              
            },
            form: Parameters
        };
     
    
        request.post(options, function(error, response, body) {
          if (!error & response.statusCode === 200) {
            callback(JSON.parse(response.body))
          }
        })
    }
    if(method === 'DELETE'){
      console.log("DELETE METHOD")
      const options = {
          url: `${baseUri}/${endpoint}`,
          headers: {
            'X-Api-Id': `${this.apiId}`,
            'X-Api-Secret': `${this.apiSecret}`,
            'X-Api-Key': `${this.apiKey}`,
            "Content-Type": "application/x-www-form-urlencoded",
            
          },
          form: Parameters
      };
   
  
      request.delete(options, function(error, response, body) {
        if (!error & response.statusCode === 200) {
          callback(JSON.parse(response.body))
        }
      })
  }
  }
//   _sendRequest(method, endpoint,parameters, callback) {
//     if(method === 'POST'){
//       const options = {
//         url: `${baseUri}/${endpoint}`,
//         headers: {
//           'X-Api-Id': `${this.apiId}`,
//           'X-Api-Secret': `${this.apiSecret}`,
//           'X-Api-Key': `${this.apiKey}`,
//           "Content-Type": "application/x-www-form-urlencoded"
//         },
//         body: `${parameters}`
//       };
//       request.post(options, function(error, response, body) {

        

//         if (!error & response.statusCode === 200) {
//           callback(response)
//         }
//       }) 
//     }
//     if(method === 'GET'){

      
//     }
 
 
//   }

}


// Usage
// {apiKey:'',apiSecret:'',apiId:'701f02d46836e2c2f0f4fdf5719dfc2f'}

const ot = new OnetapCloud('701f02d46836e2c2f0f4fdf5719dfc2f', '89016f59a0e6e24a1457dd330f214638f07298efdc58ba947e81ebfea47f54b3','1tgHv0nKwEsBc12s0230D9AzMYf1RRjo')


//script stuff
// ot.GetAllScripts(function(result) {
//   console.log(result)
// })
ot.GetScript("75535", function(result) {
    console.log(result.script);
});
// ot.GetScriptInvites("75535", function(result) {
//   console.log(result);
// });
// ot.CreateScriptSubscription("67909","30152", function(result) {
//   console.log(result);
// });
// ot.CreateScriptInvite("75535", 1, 1, function(result) {
//     console.log(result);
// });
// ot.UpdateScript("61784", "coolestjsever", function(result) {
//     console.log(result);
// });
// ot.DeleteScriptInvite("75535", 21769, function(result) {
//   console.log(result);
// });

////CONFIG STUFF

// ot.GetAllConfigs(function(result) {
//   console.log(result)
// })
// ot.CreateConfig("Name", "=", function(result) {
//     console.log(result)
//   })
// ot.GetConfig("37886",function(result) {
//   console.log(result)
// })
// ot.DeleteConfig("151058",function(result) {
//   console.log(result)
// })
// ot.UpdateConfig("185888", "yellowthinting","==", function(result) {
//     console.log(result);
// });
// ot.GetAllConfigsInvites(function(result) {
//     console.log(result);
// });
// ot.GetConfigInvites("263091",function(result) {
//   console.log(result);
// });
// ot.CreateConfigInvite("263091",1,1,function(result) {
//   console.log(result);15858
// });
// ot.DeleteConfigInvite("263091", 15858, function(result) {
//   console.log(result);
// });
// ot.GetConfigSubscriptions("263091",function(result) {
//   console.log(result);
// });
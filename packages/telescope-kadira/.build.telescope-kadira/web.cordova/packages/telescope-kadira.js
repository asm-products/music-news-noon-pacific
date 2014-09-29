(function () {

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/telescope-kadira/lib/kadira-settings.js                  //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
var kadiraAppIdProperty = {                                          // 1
  propertyName: 'kadiraAppId',                                       // 2
  propertyGroup: 'kadira',                                           // 3
  propertySchema: {                                                  // 4
    type: String,                                                    // 5
    optional: true,                                                  // 6
    autoform: {                                                      // 7
      group: 'kadira'                                                // 8
    }                                                                // 9
  }                                                                  // 10
}                                                                    // 11
addToSettingsSchema.push(kadiraAppIdProperty);                       // 12
                                                                     // 13
var kadiraAppSecretProperty = {                                      // 14
  propertyName: 'kadiraAppSecret',                                   // 15
  propertyGroup: 'kadira',                                           // 16
  propertySchema: {                                                  // 17
    type: String,                                                    // 18
    optional: true,                                                  // 19
    autoform: {                                                      // 20
      group: 'kadira'                                                // 21
    }                                                                // 22
  }                                                                  // 23
}                                                                    // 24
addToSettingsSchema.push(kadiraAppSecretProperty);                   // 25
///////////////////////////////////////////////////////////////////////

}).call(this);

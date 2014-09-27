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
    optional: true                                                   // 6
  }                                                                  // 7
}                                                                    // 8
addToSettingsSchema.push(kadiraAppIdProperty);                       // 9
                                                                     // 10
var kadiraAppSecretProperty = {                                      // 11
  propertyName: 'kadiraAppSecret',                                   // 12
  propertyGroup: 'kadira',                                           // 13
  propertySchema: {                                                  // 14
    type: String,                                                    // 15
    optional: true                                                   // 16
  }                                                                  // 17
}                                                                    // 18
addToSettingsSchema.push(kadiraAppSecretProperty);                   // 19
///////////////////////////////////////////////////////////////////////

}).call(this);

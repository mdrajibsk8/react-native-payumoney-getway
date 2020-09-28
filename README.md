# react-native-payumoney-getway
![npm](https://img.shields.io/npm/dt/react-native-payumoney-getway?style=flat-square)   ![NPM](https://img.shields.io/npm/l/react-native-payumoney-getway?style=flat-square)   ![npm](https://img.shields.io/npm/v/react-native-payumoney-getway?style=flat-square)   ![npm collaborators](https://img.shields.io/npm/collaborators/react-native-payumoney-getway?style=flat-square)   ![Dependents (via libraries.io)](https://img.shields.io/librariesio/dependents/npm/react-native-payumoney-getway?style=flat-square)

## Getting started

`$ npm install react-native-payumoney-getway --save`

## Usage
```javascript
import PayumoneyGetway from 'react-native-payumoney-getway';

// TODO: What to do with the module?

let sendData = {
        key : "<your key>", 
        amount: "<pay amount>", 
        email : "<email@example.com>", 
        txnId: "<create rand id>", 
        productName: "<product Name>", 
        firstName: "<first Name>", 
        salt:"<go to developer console then put salt>",
        debug: "<test mode is true and live is false boolean value>",
        mobile: "<user mobile>"
    };
    // url is hash Generation
let respons = await PayumoneyGetway.Pay(sendData, url = "https://example.com/payu.php");
console.log('respons', respons);
```

## hash Generation php code 
```javascript

<?php
$key=""; //add key here from your credentials in payUMoney dashboard
$salt=""; // add salt here from your credentials in payUMoney dashboard
$txnId=$_POST["txnid"]; 
$amount=$_POST["amount"]; 
$productName=$_POST["productInfo"]; 
$firstName=$_POST["firstName"]; 
$email=$_POST["email"]; 
$udf1=$_POST["udf1"];
$udf2=$_POST["udf2"];
$udf3=$_POST["udf3"];
$udf4=$_POST["udf4"];
$udf5=$_POST["udf5"];
$payhash_str = $key . '|' . checkNull($txnId) . '|' .checkNull($amount)  . '|' .checkNull($productName)  . '|' . checkNull($firstName) . '|' . checkNull($email) . '|' . checkNull($udf1) . '|' . checkNull($udf2) . '|' . checkNull($udf3) . '|' . checkNull($udf4) . '|' . checkNull($udf5) . '||||||'. $salt;
function checkNull($value) {
            if ($value == null) {
                  return '';
            } else {
                  return $value;
            }
      }
$hash = strtolower(hash('sha512', $payhash_str));
$arr['result'] = $hash;
$arr['status']=0;
$arr['errorCode']=null;
$arr['responseCode']=null;
$output=$arr;
echo json_encode($output);
?>

```

## Issues url
[If your any problem create Issues](https://github.com/mdrajibsk8/react-native-payumoney-getway/issues)


## Android 


- **VERY IMPORTANT** Edit the following to your `build.gradle`'s repositories section. (android/build.gradle)
```gradle
buildscript {
    ext {
        buildToolsVersion = "29.0.2"
        minSdkVersion = 20 // <---- edit this line 
        compileSdkVersion = 29 
        targetSdkVersion = 29
    }
    ...
}
```

- **VERY IMPORTANT** Add following this line In your `android/app/src/main/
AndroidManifest.xml`
```xml
    .....
    <uses-permission android:name="android.permission.INTERNET" />
    <application ....>
    <activity android:name="com.payumoneygetwaymoney.PayAction" />
    ....
```

- **IF any issues** like `Manifest merger failed : Attribute application@usesCleartextTraffic value=(true) from AndroidManifest.xml` 


     ### Comment out this line 

![Alt text](https://raw.githubusercontent.com/soumyadeephalder/upload/master/Screenshot%202020-09-28%20at%2011.39.56%20PM.png?raw=true)



# Supporting the project

Maintaining this project takes time. To help allocate time, you can Buy Me a Coffee :wink:

<a href="https://www.buymeacoffee.com/mdrajibsk8" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-blue.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>


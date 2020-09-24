# react-native-payumoney-getway

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



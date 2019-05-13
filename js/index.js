var rules_basic = {
    condition: 'AND',
    rules: [{
      id: 'paymentMethodType',
      operator: 'less',
      value: 10.25
    }, {
      condition: 'OR',
      rules: [{
        id: 'category',
        operator: 'equal',
        value: 2
      }, {
        id: 'category',
        operator: 'equal',
        value: 1
      }]
    }]
  };

  $('#builder').queryBuilder({
    plugins: ['bt-tooltip-errors'],
    
    filters: [{
      id: 'cardbin',
      label: 'Card Bin',
      type: 'string',
      unique: true,
      description: 'This filter is "unique", it can be used only once'
    }, {
      id: 'cardBrand',
      label: 'Card Brand',
      type: 'integer',
      input: 'checkbox',
      values: {
        1: 'AMEX',
        2: 'VISA',
        3: 'MASTER CARD',
        4: 'RUPAY',
        5: 'DINERS'
      },
      operators: ['equal', 'not_equal', 'in', 'not_in', 'is_null', 'is_not_null']
    }, {
        id: 'cardIssuer',
        label: 'Card Issuer',
        type: 'integer',
        input: 'checkbox',
        values: {
          1: 'HDFC',
          2: 'ICICI',
          3: 'KOTAK',
          4: 'CITI',
          5: 'SBI'
        },
        operators: ['equal', 'not_equal', 'in', 'not_in', 'is_null', 'is_not_null']
      },{
        id: 'cardIssuerCountry',
        label: 'Card Issuer Country',
        input: 'checkbox',
        values: {
          1: 'INDIA',
          2: 'Other',
        },
        operators: ['equal', 'not_equal', 'in', 'not_in', 'is_null', 'is_not_null']
      },{
        id: 'cardType',
        label: 'Card Type',
        input: 'checkbox',
        values: {
          1: 'DEBIT',
          2: 'CREDIT',
        },
        operators: ['equal', 'not_equal', 'in', 'not_in', 'is_null', 'is_not_null']
      },{
        id: 'currentTimeMillis',
        label: 'Current Time Millisecond',
        type: 'string',
        unique: true,
        description: 'This filter is "unique", it can be used only once'
      }, {
        id: 'customerID',
        label: 'Customer ID',
        type: 'string',
        unique: true,
        description: 'This filter is "unique", it can be used only once'
      },{
        id: 'nb_type',
        label: 'Net Banking',
        type: 'integer',
        input: 'checkbox',
        values: {
          1: 'ICICI_NB',
          2: 'HDFC_NB',
          3: 'SBI_NB'
        },
        operators: ['equal', 'not_equal', 'in', 'not_in', 'is_null', 'is_not_null']
      },{
        id: 'paymentMethodType',
        label: 'PaymentMethodType',
        input: 'select',
        values: {
          1: 'CARD',
          2: 'NB',
          3: 'UPI',
          4: 'WALLET',
          5: 'SODEXO'
        },
        operators: ['equal', 'not_equal', 'in', 'not_in', 'is_null', 'is_not_null']
      }, {
        id: 'priority_type',
        label: 'Priority',
        type: 'integer',
        input: 'checkbox',
        values: {
          1: 'AIRPAY',
          2: 'BILLDESK',
          3: 'CCAVENUE_V2',
          4: 'CYBERSOURCE',
          5: 'HDFC',
          6: 'KOTAK',
          7: 'PAYTM',
          8: 'PAYU',
          9: 'RAZORPAY',
          10: 'SODEXO',
          11: 'TPSL',
          12: 'ZAAKPAY'
        },
        operators: ['equal']
      },{
        id: 'udf1',
        label: 'UDF-1',
        type: 'integer',
        input: 'checkbox',
        values: {
          1: 'BUS',
          2: 'HOTEL',
          3: 'TRAIN'
        },
        operators: ['equal', 'not_equal', 'in', 'not_in', 'is_null', 'is_not_null']
      },{
        id: 'upi_type',
        label: 'UPI',
        type: 'integer',
        input: 'checkbox',
        values: {
          1: 'Google Pay',
          2: 'PhonePay',
          3: 'UPI'
        },
        operators: ['equal', 'not_equal', 'in', 'not_in', 'is_null', 'is_not_null']
      },{
        id: 'wallet_type',
        label: 'Wallet',
        type: 'integer',
        input: 'checkbox',
        values: {
          1: 'Paytm',
          2: 'Mobikwik',
          3: 'FreeCharge'
        },
        operators: ['equal', 'not_equal', 'in', 'not_in', 'is_null', 'is_not_null'] 
      },],
    rules: rules_basic
  });
  /****************************************************************
          Triggers and Changers QueryBuilder
*****************************************************************/

  $('#btn-get').on('click', function() {
    var result = $('#builder').queryBuilder('getRules');
    if (!$.isEmptyObject(result)) {
      alert(JSON.stringify(result, null, 2));
    }
    else{
        console.log("invalid object :");
    }
    console.log(result);
  });

  $('#btn-reset').on('click', function() {
    $('#builder').queryBuilder('reset');
  });

  $('#btn-set').on('click', function() {
    //$('#builder').queryBuilder('setRules', rules_basic);
    var result = $('#builder').queryBuilder('getRules');
    if (!$.isEmptyObject(result)) {
        rules_basic = result;
    }
  });

  //When rules changed :
  $('#builder').on('getRules.queryBuilder.filter', function(e) {
      //$log.info(e.value);
  });
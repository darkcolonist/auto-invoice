<!DOCTYPE html
  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>{{$invoice->name}} - {{$range}} - invoicePDF</title>
  <style type="text/css">
    <!--
    .excel1 {
      padding-top: 1px;
      padding-right: 1px;
      padding-left: 1px;
      color: black;
      font-size: 11pt;
      font-weight: 400;
      font-style: normal;
      text-decoration: none;
      font-family: Calibri, sans-serif;
      text-align: left;
      vertical-align: bottom;
      border: none;
      white-space: nowrap;
    }

    .excel24 {
      padding-top: 1px;
      padding-right: 1px;
      padding-left: 1px;
      color: black;
      font-size: 18.0pt;
      font-weight: 700;
      font-style: normal;
      text-decoration: none;
      font-family: Calibri, sans-serif;
      text-align: left;
      vertical-align: middle;
      border: none;
      white-space: nowrap;
      border-top: 1.0pt solid windowtext;
      border-right: .5pt solid black;
      border-bottom: .5pt solid black;
      border-left: 1.0pt solid windowtext;
      background: white;
    }

    .excel26 {
      padding-top: 1px;
      padding-right: 1px;
      padding-left: 1px;
      color: red;
      font-size: 28.0pt;
      font-weight: 400;
      font-style: normal;
      text-decoration: none;
      font-family: "Arial Black", sans-serif;
      text-align: center;
      vertical-align: middle;
      border: none;
      white-space: nowrap;
      border-top: 1.0pt solid windowtext;
      border-right: none;
      border-bottom: none;
      border-left: .5pt solid black;
      background: white;
    }

    .excel30 {
      padding-top: 1px;
      padding-right: 1px;
      padding-left: 1px;
      color: black;
      font-size: 11.0pt;
      font-weight: 700;
      font-style: normal;
      text-decoration: none;
      font-family: Calibri, sans-serif;
      text-align: left;
      vertical-align: top;
      border: none;
      white-space: normal;
      border-top: .5pt solid black;
      border-right: .5pt solid black;
      border-bottom: .5pt solid black;
      border-left: 1.0pt solid windowtext;
      background: white;
    }

    .excel19 {
      padding-top: 1px;
      padding-right: 1px;
      padding-left: 1px;
      color: black;
      font-size: 11.0pt;
      font-weight: 700;
      font-style: normal;
      text-decoration: none;
      font-family: Calibri, sans-serif;
      text-align: left;
      vertical-align: middle;
      border: none;
      white-space: nowrap;
      border-top: .5pt solid black;
      border-right: none;
      border-bottom: none;
      border-left: .5pt solid black;
      background: white;
    }

    .excel34 {
      padding-top: 1px;
      padding-right: 1px;
      padding-left: 1px;
      color: black;
      font-size: 11.0pt;
      font-weight: 700;
      font-style: normal;
      text-decoration: none;
      font-family: Calibri, sans-serif;
      text-align: left;
      vertical-align: bottom;
      border: none;
      white-space: nowrap;
      border-top: .5pt solid black;
      border-right: .5pt solid black;
      border-bottom: .5pt solid black;
      border-left: 1.0pt solid windowtext;
      background: white;
    }

    .excel22 {
      padding-top: 1px;
      padding-right: 1px;
      padding-left: 1px;
      color: black;
      font-size: 11.0pt;
      font-weight: 400;
      font-style: normal;
      text-decoration: none;
      font-family: Calibri, sans-serif;
      text-align: general;
      vertical-align: bottom;
      border: .5pt solid black;
      white-space: nowrap;
      background: white;
    }

    .excel2 {
      padding-top: 1px;
      padding-right: 1px;
      padding-left: 1px;
      color: black;
      font-size: 11.0pt;
      font-weight: 700;
      font-style: normal;
      text-decoration: none;
      font-family: Calibri, sans-serif;
      text-align: general;
      vertical-align: bottom;
      border: none;
      white-space: nowrap;
      border-top: .5pt solid black;
      border-right: none;
      border-bottom: .5pt solid black;
      border-left: .5pt solid black;
      background: white;
    }

    .excel35 {
      padding-top: 1px;
      padding-right: 1px;
      padding-left: 1px;
      color: black;
      font-size: 11.0pt;
      font-weight: 700;
      font-style: normal;
      text-decoration: none;
      font-family: Calibri, sans-serif;
      text-align: general;
      vertical-align: bottom;
      border: none;
      white-space: nowrap;
      border-top: .5pt solid black;
      border-right: 1.0pt solid windowtext;
      border-bottom: .5pt solid black;
      border-left: none;
      background: white;
    }

    .excel36 {
      padding-top: 1px;
      padding-right: 1px;
      padding-left: 1px;
      color: black;
      font-size: 11.0pt;
      font-weight: 700;
      font-style: normal;
      text-decoration: none;
      font-family: Calibri, sans-serif;
      text-align: left;
      vertical-align: top;
      border: none;
      white-space: nowrap;
      border-top: .5pt solid black;
      border-right: none;
      border-bottom: none;
      border-left: 1.0pt solid windowtext;
      background: white;
    }

    .excel13 {
      padding-top: 1px;
      padding-right: 1px;
      padding-left: 1px;
      color: black;
      font-size: 11.0pt;
      font-weight: 400;
      font-style: normal;
      text-decoration: none;
      font-family: Calibri, sans-serif;
      text-align: center;
      vertical-align: bottom;
      border: none;
      white-space: nowrap;
      border-top: .5pt solid black;
      border-right: none;
      border-bottom: none;
      border-left: none;
      background: white;
    }

    .excel38 {
      padding-top: 1px;
      padding-right: 1px;
      padding-left: 1px;
      color: black;
      font-size: 16.0pt;
      font-weight: 700;
      font-style: normal;
      text-decoration: none;
      font-family: Calibri, sans-serif;
      text-align: left;
      vertical-align: top;
      border: none;
      white-space: nowrap;
      border-top: none;
      border-right: none;
      border-bottom: none;
      border-left: 1.0pt solid windowtext;
      background: white;
    }

    .excel42 {
      padding-top: 1px;
      padding-right: 1px;
      padding-left: 1px;
      color: black;
      font-size: 11.0pt;
      font-weight: 400;
      font-style: normal;
      text-decoration: none;
      font-family: Calibri, sans-serif;
      text-align: left;
      vertical-align: top;
      border: none;
      white-space: normal;
      border-top: none;
      border-right: none;
      border-bottom: none;
      border-left: 1.0pt solid windowtext;
      background: white;
    }

    .excel44 {
      padding-top: 1px;
      padding-right: 1px;
      padding-left: 1px;
      font-size: 11.0pt;
      font-weight: 400;
      font-style: normal;
      font-family: Calibri, sans-serif;
      text-align: general;
      vertical-align: bottom;
      border: none;
      white-space: nowrap;
      text-underline-style: single;
      border-top: none;
      border-right: none;
      border-bottom: none;
      border-left: 1.0pt solid windowtext;
      background: white;
    }

    .excel46 {
      padding-top: 1px;
      padding-right: 1px;
      padding-left: 1px;
      color: black;
      font-size: 11.0pt;
      font-weight: 400;
      font-style: normal;
      text-decoration: none;
      font-family: Calibri, sans-serif;
      text-align: left;
      vertical-align: bottom;
      border: none;
      white-space: nowrap;
      border-top: none;
      border-right: none;
      border-bottom: .5pt solid black;
      border-left: 1.0pt solid windowtext;
      background: white;
    }

    .excel48 {
      padding-top: 1px;
      padding-right: 1px;
      padding-left: 1px;
      color: #FFF;
      font-size: 11pt;
      font-weight: 700;
      font-style: normal;
      text-decoration: none;
      font-family: Calibri, sans-serif;
      text-align: center;
      vertical-align: bottom;
      border: none;
      white-space: nowrap;
      border-top: .5pt solid black;
      border-right: .5pt solid black;
      border-bottom: .5pt solid black;
      border-left: 1.0pt solid windowtext;
      background-color: #000;
    }

    .excel10 {
      padding-top: 1px;
      padding-right: 1px;
      padding-left: 1px;
      color: #FFF;
      font-size: 11pt;
      font-weight: 700;
      font-style: normal;
      text-decoration: none;
      font-family: Calibri, sans-serif;
      text-align: center;
      vertical-align: bottom;
      border: none;
      white-space: nowrap;
      border-top: .5pt solid black;
      border-right: none;
      border-bottom: .5pt solid black;
      border-left: .5pt solid black;
      background-color: #000;
    }

    .excel50 {
      padding-top: 1px;
      padding-right: 1px;
      padding-left: 1px;
      color: black;
      font-size: 11.0pt;
      font-weight: 400;
      font-style: normal;
      text-decoration: none;
      font-family: Calibri, sans-serif;
      text-align: left;
      vertical-align: middle;
      border: none;
      white-space: nowrap;
      border-top: .5pt solid black;
      border-right: none;
      border-bottom: .5pt solid black;
      border-left: 1.0pt solid windowtext;
      background: white;
    }

    .excel11 {
      padding-top: 1px;
      padding-right: 1px;
      padding-left: 1px;
      color: black;
      font-size: 11.0pt;
      font-weight: 400;
      font-style: normal;
      text-decoration: none;
      font-family: Calibri, sans-serif;
      text-align: right;
      vertical-align: middle;
      border: .5pt solid black;
      white-space: nowrap;
      background: white;
    }

    .excel6 {
      padding-top: 1px;
      padding-right: 1px;
      padding-left: 1px;
      color: black;
      font-size: 11.0pt;
      font-weight: 400;
      font-style: normal;
      text-decoration: none;
      font-family: Calibri, sans-serif;
      text-align: center;
      vertical-align: bottom;
      border: none;
      white-space: nowrap;
      border-top: .5pt solid black;
      border-right: none;
      border-bottom: .5pt solid black;
      border-left: .5pt solid black;
      background: white;
    }

    .excel53 {
      padding-top: 1px;
      padding-right: 1px;
      padding-left: 1px;
      color: black;
      font-size: 12.0pt;
      font-weight: 700;
      font-style: normal;
      text-decoration: none;
      font-family: Calibri, sans-serif;
      text-align: left;
      vertical-align: middle;
      border: none;
      white-space: nowrap;
      border-top: .5pt solid black;
      border-right: none;
      border-bottom: none;
      border-left: 1.0pt solid windowtext;
      background: white;
    }

    .excel8 {
      padding-top: 1px;
      padding-right: 1px;
      padding-left: 1px;
      color: #FFF;
      font-size: 12pt;
      font-weight: 700;
      font-style: normal;
      text-decoration: none;
      font-family: Calibri, sans-serif;
      text-align: right;
      vertical-align: middle;
      border: none;
      white-space: nowrap;
      border-top: .5pt solid black;
      border-right: .5pt solid black;
      border-bottom: none;
      border-left: .5pt solid black;
      background-color: #000;
    }

    .excel55 {
      padding-top: 1px;
      padding-right: 1px;
      padding-left: 1px;
      color: black;
      font-size: 11.0pt;
      font-weight: 700;
      font-style: normal;
      text-decoration: none;
      font-family: Calibri, sans-serif;
      text-align: left;
      vertical-align: bottom;
      border: none;
      white-space: nowrap;
      border-top: none;
      border-right: none;
      border-bottom: none;
      border-left: 1.0pt solid windowtext;
      background: white;
    }

    .excel56 {
      padding-top: 1px;
      padding-right: 1px;
      padding-left: 1px;
      color: black;
      font-size: 11.0pt;
      font-weight: 700;
      font-style: normal;
      text-decoration: none;
      font-family: Calibri, sans-serif;
      text-align: left;
      vertical-align: bottom;
      border: none;
      white-space: nowrap;
      background: white;
    }

    .excel3 {
      padding-top: 1px;
      padding-right: 1px;
      padding-left: 1px;
      color: black;
      font-size: 11.0pt;
      font-weight: 700;
      font-style: normal;
      text-decoration: none;
      font-family: Calibri, sans-serif;
      text-align: center;
      vertical-align: bottom;
      border: none;
      white-space: nowrap;
      border-top: .5pt solid black;
      border-right: .5pt solid black;
      border-bottom: none;
      border-left: none;
      background: white;
    }

    .excel58 {
      padding-top: 1px;
      padding-right: 1px;
      padding-left: 1px;
      color: black;
      font-size: 11.0pt;
      font-weight: 700;
      font-style: normal;
      text-decoration: none;
      font-family: Calibri, sans-serif;
      text-align: left;
      vertical-align: bottom;
      border: none;
      white-space: nowrap;
      border-top: none;
      border-right: none;
      border-bottom: none;
      border-left: 1.0pt solid windowtext;
      background: white;
    }

    .excel45 {
      padding-top: 1px;
      padding-right: 1px;
      padding-left: 1px;
      color: black;
      font-size: 11.0pt;
      font-weight: 400;
      font-style: normal;
      text-decoration: none;
      font-family: Calibri, sans-serif;
      text-align: general;
      vertical-align: bottom;
      border: none;
      white-space: nowrap;
      background: white;
    }

    .excel60 {
      padding-top: 1px;
      padding-right: 1px;
      padding-left: 1px;
      color: black;
      font-size: 11.0pt;
      font-weight: 400;
      font-style: normal;
      text-decoration: none;
      font-family: Calibri, sans-serif;
      text-align: general;
      vertical-align: bottom;
      border: none;
      white-space: nowrap;
      border-top: none;
      border-right: 1.0pt solid windowtext;
      border-bottom: none;
      border-left: none;
      background: white;
    }

    .excel61 {
      padding-top: 1px;
      padding-right: 1px;
      padding-left: 1px;
      color: black;
      font-size: 11.0pt;
      font-style: normal;
      text-decoration: none;
      font-family: Calibri, sans-serif;
      text-align: general;
      vertical-align: bottom;
      border: none;
      white-space: nowrap;
      background: white;
    }

    .excel62 {
      padding-top: 1px;
      padding-right: 1px;
      padding-left: 1px;
      color: black;
      font-size: 11.0pt;
      font-weight: 400;
      font-style: normal;
      text-decoration: none;
      font-family: Calibri, sans-serif;
      text-align: left;
      vertical-align: bottom;
      border: none;
      white-space: nowrap;
      background: white;
    }

    .excel59 {
      padding-top: 1px;
      padding-right: 1px;
      padding-left: 1px;
      color: black;
      font-size: 11.0pt;
      font-weight: 400;
      font-style: normal;
      text-decoration: none;
      font-family: Calibri, sans-serif;
      text-align: left;
      vertical-align: bottom;
      border: none;
      white-space: nowrap;
      background: white;
    }

    .excel63 {
      padding-top: 1px;
      padding-right: 1px;
      padding-left: 1px;
      color: black;
      font-size: 11.0pt;
      font-weight: 700;
      font-style: normal;
      text-decoration: none;
      font-family: Calibri, sans-serif;
      text-align: center;
      vertical-align: bottom;
      border: none;
      white-space: nowrap;
      border-top: none;
      border-right: none;
      border-bottom: 1.0pt solid windowtext;
      border-left: 1.0pt solid windowtext;
      background: white;
    }
    -->
  </style>
</head>

<body>
  <table cellspacing="0" cellpadding="0" class="excel1">
    <col width="106" span="7" style="width:80pt;" />
    <tr style="height:14.5pt;">
      <td colspan="5" rowspan="2" class="excel24" width="530" style="height:29.0pt;width:400pt;">NAME: {{$invoice->getDetails('contact_details.name')}}</td>
      <td colspan="2" rowspan="2" class="excel26" width="212"
        style="border-right:1.0pt solid black;border-bottom:.5pt solid black;width:160pt;">INVOICE</td>
    </tr>
    <tr style="height:14.5pt;"> </tr>
    <tr style="height:14.5pt;">
      <td colspan="5" rowspan="2" class="excel30" width="530" style="height:29.0pt;width:400pt;">COMPLETE ADDRESS:
        <br />{{$invoice->getDetails('contact_details.address')}}</td>
      <td colspan="2" rowspan="2" class="excel19"
        style="border-right:1.0pt solid black;border-bottom:.5pt solid black;">DATE: {{$date}}</td>
    </tr>
    <tr style="height:14.5pt;"> </tr>
    <tr style="height:14.5pt;">
      <td colspan="2" class="excel34" style="height:14.5pt;">PHONE: {{$invoice->getDetails('contact_details.phone')}}</td>
      <td colspan="3" class="excel22" style="border-left:none;">EMAIL: {{$invoice->getDetails('contact_details.email')}}</td>
      <td class="excel2" style="border-top:none;border-left:none;">INVOICE #: {{$invoice->getInvoiceNo()}}</td>
      <td class="excel35" style="border-top:none;">&nbsp;</td>
    </tr>
    <tr style="height:14.5pt;">
      <td colspan="5" class="excel36" style="height:14.5pt;">BILL TO:</td>
      <td colspan="2" rowspan="5" class="excel13"
        style="border-right:1.0pt solid black;border-bottom:.5pt solid black;">&nbsp;</td>
    </tr>
    <tr style="height:21.0pt;">
      <td colspan="5" class="excel38" style="height:21.0pt;">{{$invoice->getDetails('bill_to_details.name')}}</td>
    </tr>
    <tr style="height:14.5pt;">
      <td colspan="5" class="excel42" width="530" style="height:14.5pt;width:400pt;">{{$invoice->getDetails('bill_to_details.address')}}</td>
    </tr>
    <tr style="height:14.5pt;">
      <td colspan="5" class="excel44" style="height:14.5pt;">{{$invoice->getDetails('bill_to_details.email')}}</td>
    </tr>
    <tr style="height:14.5pt;">
      <td colspan="5" class="excel46" style="height:14.5pt;">&nbsp;</td>
    </tr>
    <tr style="height:14.5pt;">
      <td colspan="5" class="excel48" style="height:14.5pt;">DESCRIPTION</td>
      <td colspan="2" class="excel10" style="border-right:1.0pt solid black;border-left:none;">AMOUNT</td>
    </tr>

    @if($invoiceLines)
      @foreach ($invoiceLines as $invoice_line)
        <tr style="height:14.5pt;">
          <td colspan="5" class="excel50" style="border-right:.5pt solid black;height:14.5pt;">{{$invoice_line['description']}}</td>
          <td colspan="2" class="excel11" style="border-right:1.0pt solid black;border-left:none;">{{$invoice->formatAmount($invoice_line['amount'])}}</td>
        </tr>
      @endforeach
    @else
      <tr style="height:14.5pt;">
        <td colspan="5" class="excel50" style="border-right:.5pt solid black;height:14.5pt;">no items</td>
        <td colspan="2" class="excel11" style="border-right:1.0pt solid black;border-left:none;"></td>
      </tr>
    @endif

    <tr style="height:14.5pt;">
      <td colspan="5" class="excel50" style="border-right:.5pt solid black;height:14.5pt;">&nbsp;</td>
      <td colspan="2" class="excel6" style="border-right:1.0pt solid black;border-left:none;">&nbsp;</td>
    </tr>
    <tr style="height:15.5pt;">
      <td colspan="5" class="excel53" style="height:15.5pt;">TOTAL</td>
      <td colspan="2" class="excel8" style="border-right:1.0pt solid black;">{{$invoice->formatAmount($totalAmount)}}</td>
    </tr>
    <tr style="height:14.5pt;">
      <td class="excel55" style="height:14.5pt;">&nbsp;</td>
      <td class="excel56">&nbsp;</td>
      <td class="excel56">&nbsp;</td>
      <td class="excel56">&nbsp;</td>
      <td class="excel56">&nbsp;</td>
      <td colspan="2" class="excel3" style="border-right:1.0pt solid black;">&nbsp;</td>
    </tr>
    <tr style="height:14.5pt;">
      <td colspan="5" class="excel58" style="height:14.5pt;">MAKE ALL PAYMENTS TO:</td>
      <td class="excel45">&nbsp;</td>
      <td class="excel60">&nbsp;</td>
    </tr>
    <tr style="height:14.5pt;">
      <td class="excel58" style="height:14.5pt;">ACCOUNT NAME:</td>
      <td class="excel61">{{$invoice->getDetails('account_details.name')}}</td>
      <td class="excel61">&nbsp;</td>
      <td class="excel61">&nbsp;</td>
      <td class="excel61">&nbsp;</td>
      <td class="excel45">&nbsp;</td>
      <td class="excel60">&nbsp;</td>
    </tr>
    <tr style="height:14.5pt;">
      <td class="excel58" style="height:14.5pt;">ACCOUNT NO:</td>
      <td class="excel62" colspan="2">{{$invoice->getDetails('account_details.account_number')}}</td>
      <td class="excel45">&nbsp;</td>
      <td class="excel45">&nbsp;</td>
      <td class="excel45">&nbsp;</td>
      <td class="excel60">&nbsp;</td>
    </tr>
    <tr style="height:14.5pt;">
      <td class="excel58" style="height:14.5pt;">BANK NAME:</td>
      <td class="excel62">{{$invoice->getDetails('account_details.bank')}}</td>
      <td class="excel59">&nbsp;</td>
      <td class="excel59">&nbsp;</td>
      <td class="excel59">&nbsp;</td>
      <td class="excel45">&nbsp;</td>
      <td class="excel60">&nbsp;</td>
    </tr>
    <tr style="height:15.0pt;">
      <td colspan="7" class="excel63" style="border-right:1.0pt solid black;height:15.0pt;">THANK YOU FOR YOUR BUSINESS!
      </td>
    </tr>
  </table>
</body>

</html>
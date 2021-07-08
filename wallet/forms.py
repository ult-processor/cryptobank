from django import forms
from django.conf import settings
import requests

class WithdrawalForm(forms.Form):
    fund_uid = forms.CharField(max_length=100)
    amount = forms.CharField(max_length=100)

    def withdrawal(self):
        amount = self.cleaned_data['amount']
        fund_uid = self.cleaned_data['fund_uid']
        endpoint = "https://www.quidax.com/api/v1/users/me/withdraws/?currency=ngn&amount={amount}&fund_uid={fund_uid}"
        url = endpoint.format(amount=amount, fund_id=fund_uid)
        headers= {'Authorization': 'EgouCYytyurrYqxV6snMEshE0k7vPz97EYzQ0FIL'}
        payload = {}
        response = requests.request("GET", url, headers=headers, data = payload)

        btc_withdrawl = response.text.encode('utf8')

        return btc_withdrawl
     
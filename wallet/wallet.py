import requests
from django.conf import settings


def get_ngn_balance():
    url = "https://www.quidax.com/api/v1/users/me/wallets/ngn"
    payload = {}
    headers = {'Authorization': settings.Q_API_KEY}
    
    response = requests.request("GET", url, headers=headers, data=payload)
    ngn_balance = response
    return ngn_balance


def get_btc_balance():
    url = "https://www.quidax.com/api/v1/users/me/wallets/btc"
    payload = {}
    headers = {'Authorization': settings.Q_API_KEY}
    
    response = requests.request("GET", url, headers=headers, data=payload)
    btc_balance = response
    return btc_balance

# def get_btc_balance():
#     url = "https://www.quidax.com/api/v1/users/me/wallets/btc"
#     payload = {}
#     headers = {'Authorization': settings.Q_API_KEY}
    
#     response = requests.request("GET", url, headers=headers, data=payload)
    
#     btc_balance = response.json()
    
#     return btc_balance


def get_btc_address():
    url = "https://www.quidax.com/api/v1/users/me/wallets/btc/address"
    payload = {}
    headers = {'Authorization': settings.Q_API_KEY}

    response = requests.request("GET", url, headers=headers, data=payload)

    btc_address = response.json()

    return btc_address

def btcngn_buysell():
    url = "https://www.quidax.com/api/v1/users/me/orders"
    payload = {'market': 'btcngn', 'side': 'sell', 'ord_type': 'limit', 'price': '12500', 'volume': '0.1'}
    files = [ ]
    headers= {'Authorization': settings.Q_API_KEY}

    response = requests.request("POST", url, headers=headers, data=payload, files=files)

    btc_ngn_buy_sell = response.json()
    return btc_ngn_buy_sell



def get_btc_withdrawal():
    url = "https://www.quidax.com/api/v1/users/me/withdraws/?currency=btc&amount=2000&fund_uid=fwomlhq2"
    payload = {}
    headers= {'Authorization': settings.Q_API_KEY}
    response = requests.request("POST", url, headers=headers, data = payload)
    btc_withdrawal = (response.text.encode('utf8'))
    return btc_withdrawal


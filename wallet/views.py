from django.shortcuts import render

# import requests


from .wallet import get_ngn_balance, get_btc_balance, get_btc_address, \
    get_btc_withdrawal, btcngn_buysell, get_btc_balance
from .forms import WithdrawalForm

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response


# Create your views here.
from django.views.generic import TemplateView


class ngn_balance(APIView):
    def get(self, request):
        ngn = get_ngn_balance()
        return Response(ngn)

class btc_balance(APIView):
    def get(self, request):
        btc = get_btc_balance()
        return Response(btc)


class btc_ngn_buy_sell(APIView):
    def get(self, request):
        btc_ngn_order = btcngn_buysell()
        return Response(btc_ngn_order)


class home(TemplateView):
    template_name = 'wallet.html'

    def get_context_data(self, *args, **kwargs):
        context = {
            # 'ngn_balance': get_ngn_balance(),
            # 'btc_balance': get_btc_balance(),
            # 'btc_address': get_btc_address(),
            # 'get_btc_withdrawal': get_btc_withdrawal(),
            'btcngn_buysell': btcngn_buysell(),
        }
        return context


def withdrawal(request):
    search_result = {}
    form = WithdrawalForm(request.GET)
    if form.is_valid():
        search_result = form.withdrawal()
    else:
        form = WithdrawalForm()
    return render(request, 'withdrawal.html', {'form': form, 'search_result': search_result})

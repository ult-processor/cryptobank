from django.urls import path
from .views import home, withdrawal, ngn_balance, btc_balance, btc_ngn_buy_sell

urlpatterns = [
    path('',  home.as_view(template_name='wallet.html')),
    path('btc_withdrawal/',  withdrawal),
    path('ngn/', ngn_balance.as_view()), 
    path('btc/', btc_balance.as_view()),
    path('btc-ngn-order/', btc_ngn_buy_sell.as_view())
]

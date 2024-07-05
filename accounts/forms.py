from django import forms
from .models import Account,Billing

class AccountsForm(forms.ModelForm):

    def __init__(self, *args, **kwargs):
        super(AccountsForm,self).__init__(*args,**kwargs)
        self.fields['user_id'].label = 'Related to'
        self.fields['ref_code'].label = 'Refference Code'
        self.fields['payment_receipt_image'].label = 'Prof of payment'
        self.fields['amount_paid'].label = 'Amount paid'
        self.fields['payment_type'].label = 'Payment type'
        self.fields['payment_status'].label = 'Select payment status'

        self.fields['ref_code'].required = False
        self.fields['payment_receipt_image'].required = False


    class Meta:
        model = Account
        fields = ["user_id","ref_code","amount_paid","payment_type","payment_receipt_image","payment_status",]

        widgets = {
            'user_id': forms.Select(attrs={'class':'custom-select','required':'true'}),
            'ref_code': forms.TextInput(attrs={'class':'form-control form-control-sm'}),
            'amount_paid': forms.TextInput(attrs={'class':'form-control form-control-sm','required':'true'}),
            'payment_type': forms.Select(attrs={'class':'custom-select','required':'true'}),
            'payment_status': forms.Select(attrs={'class':'custom-select','required':'true'}),
            'payment_receipt_image': forms.FileInput(attrs={'class':'form-control form-control-sm','accept':'image/*'}),
        }


class BillingForm(forms.ModelForm):
    def __init__(self,*args,**kwargs):
        super(BillingForm,self).__init__(*args,**kwargs)
        self.fields['month'].label = "Select month"
        self.fields['due_date'].label = "Select due date"
        self.fields['amount'].label = "Enter amount to be paid"
        
    class Meta:
        model = Billing
        fields = ["month","due_date","amount",]
        widgets = {
            'month': forms.TextInput(attrs={'class':'form-control','type':'date'}),
            'due_date': forms.TextInput(attrs={'class':'form-control form-control-sm','type':'date'}),
            'amount': forms.TextInput(attrs={'class':'form-control form-control-sm','required':'true'}),
        }
from django import forms
from reservation.models import Reservation
from accounts.models import Account
from authentication.models import CustomUser

class ClientReservationForms(forms.ModelForm):  

    def __init__(self,*args,**kwargs):
        super(ClientReservationForms,self).__init__(*args,**kwargs)
        self.fields['dorm_id'].label = 'Select dormitory'
        self.fields['room_id'].label = 'Select dormitory room'
        self.fields['reservation_fee'].label = 'Reservation fee'
        self.fields['move_in_date'].label = 'Select move in date'

    class Meta:
        model = Reservation
        fields = "__all__"
        widgets = {
            'user_id' : forms.HiddenInput(attrs={'class':'form-control form-control-sm','required':'true'}),
            'dorm_id' : forms.Select(attrs={'class':'form-control form-control-sm','required':'true'}),
            'room_id' : forms.Select(attrs={'class':'form-control form-control-sm','required':'true'}),
            'move_in_date' : forms.TextInput(attrs={'class':'form-control form-control-sm','required':'true'}),
            'reservation_fee' : forms.TextInput(attrs={'class':'form-control form-control-sm','required':'true','readonly':'true','value':'1000'}),
        }
        exclude = ["decline_reason","reservation_status",]

class CustomerPaymentForm(forms.ModelForm):

    def __init__(self, *args, **kwargs):
        super(CustomerPaymentForm,self).__init__(*args,**kwargs)
        self.fields['billing_id'].label = 'Select Billing'
        self.fields['ref_code'].label = 'Refference Code'
        self.fields['payment_receipt_image'].label = 'Prof of payment'
        self.fields['amount_paid'].label = 'Amount paid'
        self.fields['payment_type'].label = 'Payment type'
        self.fields['ref_code'].required = True
        self.fields['payment_receipt_image'].required = True
        
        allowed_choices = [('GCASH','GCASH'),('PAYMAYA','PAYMAYA')]
        self.fields['payment_type'].choices = allowed_choices

        if self.instance.id:
            billing_instance = self.instance.billing_id
            self.fields['billing_id'].choices = [(billing_instance.id, str(billing_instance))]

    class Meta:
        model = Account
        fields = ["user_id","billing_id","payment_type","ref_code","amount_paid","payment_receipt_image",]
        widgets = {
           'user_id' : forms.HiddenInput(),
           'billing_id' : forms.Select(attrs={'class':'form-control form-control-sm'}),
           'ref_code' : forms.TextInput(attrs={'class': 'form-control form-control-sm'}),
           'payment_type' : forms.Select(attrs={'class': 'form-control form-control-sm'}),
           'amount_paid' : forms.TextInput(attrs={'class': 'form-control form-control-sm'}),
           'payment_receipt_image' : forms.FileInput(attrs={'class': 'form-control form-control-sm','accept':'image/*'})
        }
        exclude = ["is_deleted","payment_status"]

class UserPasswordForm(forms.ModelForm):
    def __init__(self,*args,**kwargs):
        super(UserPasswordForm,self).__init__(*args,**kwargs)
        self.fields['password'].label = "Password"
        self.fields['password2'].label = "Confirm Password"

    password2 = forms.CharField(required=True,widget=forms.PasswordInput(attrs={'class':'form-control form-control-sm'}))

    class Meta:

        model = CustomUser
        fields = ["password","password2",]
        widgets = {
            'password':forms.PasswordInput(attrs={'class':'form-control form-control-sm'}),
            'password2':forms.PasswordInput(attrs={'class':'form-control form-control-sm'})
        }
        exclude = ("username","first_name","last_name","email","gender","department","college","student_id","contact_number","image")

    def clean(self):
        cleaned_data = super().clean()
        password = cleaned_data.get('password')
        password2 = cleaned_data.get('password2')

        if password and password2 and password != password2:
            raise forms.ValidationError("Passwords do not match.")
    

class UserForm(forms.ModelForm):
    
    class Meta:
        model = CustomUser
        fields = ['password','username','first_name','last_name','email','student_id','college','department','gender','address','contact_number','image']
        widgets = {
            'username' : forms.TextInput(attrs={'class':'form-control form-control-sm','required':'true'}),
            'first_name' : forms.TextInput(attrs={'class':'form-control form-control-sm','required':'true'}),
            'last_name' :forms.TextInput(attrs={'class':'form-control form-control-sm','required':'true'}),
            'email' :forms.EmailInput(attrs={'class':'form-control form-control-sm','required':'true'}),
            'college' : forms.TextInput(attrs={'class':'form-control form-control-sm','required':'true'}),
            'department' :forms.TextInput(attrs={'class':'form-control form-control-sm','required':'true'}),
            'student_id' :forms.TextInput(attrs={'class':'form-control form-control-sm','required':'true'}),
            'gender' :forms.Select(attrs={'class':'custom-select','required':'true'}),
            'contact_number' :forms.TextInput(attrs={'class':'form-control form-control-sm','required':'true'}),
            'address' :forms.Textarea(attrs={'class':'form-control form-control-sm','required':'true','rows':'3'}),
            'image' :forms.FileInput(attrs={'class':'form-control form-control-sm'}),
        }
        exclude = ["password",]

    def clean_password(self):
        instance = getattr(self, 'instance', None)

        if not self.cleaned_data.get('password') and instance:
            return instance.password
        
        return self.cleaned_data['password']
    
from django.contrib.auth.forms import PasswordChangeForm

class CustomPasswordChangeForm(PasswordChangeForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        self.fields['old_password'].widget.attrs['class'] = 'form-control form-control-sm'
        self.fields['new_password1'].widget.attrs['class'] = 'form-control form-control-sm'
        self.fields['new_password2'].widget.attrs['class'] = 'form-control form-control-sm'

        self.fields['new_password2'].label = "Confirm Password"
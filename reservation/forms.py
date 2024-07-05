from django import forms
from .models import Reservation

class ReservationForm(forms.ModelForm):
    def __init__(self,*args,**kwargs):
        super(ReservationForm,self).__init__(*args,**kwargs)
        self.fields['user_id'].label = 'Related to'
        self.fields['dorm_id'].label = 'Select dormitory'
        self.fields['room_id'].label = 'Select dormitory room'
        self.fields['reservation_status'].label = 'Reservation status'
        self.fields['reservation_fee'].label = 'Reservation fee'
        self.fields['move_in_date'].label = 'Select move in date'
        self.fields['decline_reason'].label = 'Decline reason'


    class Meta:
        model = Reservation
        fields = "__all__"
        widgets = {
            'user_id' : forms.Select(attrs={'class':'form-control form-control-sm','required':'true'}),
            'dorm_id' : forms.Select(attrs={'class':'form-control form-control-sm','required':'true'}),
            'room_id' : forms.Select(attrs={'class':'form-control form-control-sm','required':'true'}),
            'move_in_date' : forms.TextInput(attrs={'class':'form-control form-control-sm','required':'true'}),
            'reservation_fee' : forms.TextInput(attrs={'class':'form-control form-control-sm','required':'true'}),
            'reservation_status' : forms.Select(attrs={'class':'form-control form-control-sm'}),
            'decline_reason' : forms.Textarea(attrs={'class':'form-control form-control-sm','rows':'3'}),
        }

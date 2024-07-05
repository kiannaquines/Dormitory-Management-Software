from django import forms
from .models import Dormitory,Room


class DormitoryForm(forms.ModelForm):
    def __init__(self,*args,**kwargs):
        super(DormitoryForm,self).__init__(*args,**kwargs)
        self.fields['dorm_name'].label = 'Enter dormitory name'


    class Meta:
        model = Dormitory
        fields = "__all__"
        widgets = {
            'dorm_name' : forms.TextInput(attrs={'class':'form-control form-control-sm','required':'true'}),
        }


class RoomForm(forms.ModelForm):
    def __init__(self,*args,**kwargs):
        super(RoomForm,self).__init__(*args,**kwargs)
        self.fields['dorm_id'].label = 'Select dormitory'
        self.fields['room_name'].label = 'Enter room name'
        self.fields['room_no'].label = 'Enter room number'
        self.fields['room_capacity'].label = 'Enter room capacity'
        self.fields['room_location'].label = 'Select room location'
        self.fields['room_beds'].label = 'Enter room beds'
        self.fields['room_current_bed_available'].label = 'Enter current bed available'
        self.fields['room_availability'].label = 'Select room availability'
        self.fields['room_image'].label = 'Room Image'
    
    class Meta:
        model = Room
        fields = "__all__"
        widgets = {
            'dorm_id' : forms.Select(attrs={'class':'custom-select','required':'true'}),
            'room_name' : forms.TextInput(attrs={'class':'form-control form-control-sm','required':'true'}),
            'room_no' : forms.TextInput(attrs={'class':'form-control form-control-sm','required':'true'}),
            'room_capacity' :forms.TextInput(attrs={'class':'form-control form-control-sm','required':'true'}),
            'room_image' :forms.FileInput(attrs={'class':'form-control form-control-sm','required':'true'}),
            'room_beds' :forms.TextInput(attrs={'class':'form-control form-control-sm','required':'true'}),
            'room_current_bed_available' : forms.TextInput(attrs={'class':'form-control form-control-sm','required':'true'}),
            'room_availability' :forms.Select(attrs={'class':'form-control form-control-sm','required':'true'}),
            'room_location' :forms.Select(attrs={'class':'form-control form-control-sm','required':'true'}),
        }

from django import forms
from .models import EmergencyInformation,CustomUser


class EmergencyInformationForms(forms.ModelForm):
    def __init__(self,*args,**kwargs):
        super(EmergencyInformationForms,self).__init__(*args,**kwargs)
        self.fields['user_id'].label = "Related to"
        self.fields['emergency_detail_name'].label = "Parent firstname"
        self.fields['emergency_detail_middlename'].label = "Parent middlename"
        self.fields['emergency_detail_lastname'].label = "Parent lastname"
        self.fields['emergency_detail_mobile_number'].label = "Parent contact number"
        self.fields['emergency_detail_gender'].label = "Gender"
        self.fields['emergency_detail_relation'].label = "Relation"
        self.fields['emergency_detail_address'].label = "Permanent Address"



    class Meta:
        model = EmergencyInformation
        fields = ["user_id","emergency_detail_name","emergency_detail_middlename","emergency_detail_lastname","emergency_detail_mobile_number","emergency_detail_gender","emergency_detail_relation","emergency_detail_address",]


        widgets = {
                'user_id': forms.Select(attrs={'class':'custom-select','required':'true'}),
                'emergency_detail_name' : forms.TextInput(attrs={'class':'form-control form-control-sm','required':'true'}),
                'emergency_detail_middlename' : forms.TextInput(attrs={'class':'form-control form-control-sm','required':'true'}),
                'emergency_detail_lastname' :forms.TextInput(attrs={'class':'form-control form-control-sm','required':'true'}),
                'emergency_detail_mobile_number' :forms.TextInput(attrs={'class':'form-control form-control-sm','required':'true'}),
                'emergency_detail_gender' :forms.Select(attrs={'class':'form-control form-control-sm','required':'true'}),
                'emergency_detail_relation' : forms.TextInput(attrs={'class':'form-control form-control-sm','required':'true'}),
                'emergency_detail_address' :forms.Textarea(attrs={'class':'form-control form-control-sm','required':'true','rows':'3'})
            }
        

class UserForm(forms.ModelForm):
    def __init__(self,*args,**kwargs):
        super(UserForm,self).__init__(*args,**kwargs)
        self.fields['username'].label = 'Enter username'
        self.fields['password'].label = 'Enter password'
        self.fields['first_name'].label = 'Enter firstname'
        self.fields['last_name'].label = 'Enter lastname'
        self.fields['email'].label = 'Enter email address'
        self.fields['college'].label = 'Enter college'
        self.fields['department'].label = 'Enter department'
        self.fields['student_id'].label = 'Enter student ID'
        self.fields['gender'].label = 'Gender'
        self.fields['contact_number'].label = 'Enter contact number'
        self.fields['address'].label = 'Enter permanent address'

    
    class Meta:
        model = CustomUser
        fields = "__all__"

        widgets = {
            'username' : forms.TextInput(attrs={'class':'form-control form-control-sm','required':'true'}),
            'password' : forms.PasswordInput(attrs={'class':'form-control form-control-sm'}),
            'first_name' : forms.TextInput(attrs={'class':'form-control form-control-sm','required':'true'}),
            'last_name' :forms.TextInput(attrs={'class':'form-control form-control-sm','required':'true'}),
            'email' :forms.TextInput(attrs={'class':'form-control form-control-sm','required':'true'}),
            'college' : forms.TextInput(attrs={'class':'form-control form-control-sm','required':'true'}),
            'department' :forms.TextInput(attrs={'class':'form-control form-control-sm','required':'true'}),
            'student_id' :forms.TextInput(attrs={'class':'form-control form-control-sm','required':'true'}),
            'gender' :forms.Select(attrs={'class':'custom-select','required':'true'}),
            'contact_number' :forms.TextInput(attrs={'class':'form-control form-control-sm','required':'true'}),
            'address' :forms.Textarea(attrs={'class':'form-control form-control-sm','required':'true','rows':'3'}),
            'date_joined' :forms.TextInput(attrs={'class':'form-control form-control-sm','required':'true','readonly':'true'}),
            'image' :forms.FileInput(attrs={'class':'form-control form-control-sm'}),
        }



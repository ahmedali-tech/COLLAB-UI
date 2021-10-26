from django.shortcuts import render




def home(request):
    return  render(request,'home.html')

def projectview(request):
    return  render(request,'projects/p1.html')

def profileview(request):
    return  render(request,'people/p1.html')

def challenges(request):
    return  render(request,'challenges/home.html')

def ideas(request):
    return  render(request,'ideas/home.html')
    
def submission(request):
    return  render(request,'submission/submission.html')

def signin(request):
    return  render(request,'accounts/signin.html')

def dashboard(request):
    return  render(request,'dashboard/dashboard.html')

def create_project_view(request):
    return  render(request,'assigned_projects/create.html')

def projects(request):
    return  render(request,'projects/home.html')


def studentdash(request):
    return  render(request,'dashboard/student.html')

def people(request):
    return  render(request,'people/home.html')

def drone(request):
    return  render(request,'temporary/drone.html')
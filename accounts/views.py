from django.shortcuts import render, redirect
from django.contrib import messages
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt


def register_view(request):
    return redirect('code_verify')

def login_view(request):
    return render(request, 'accounts/login.html')

def code_verify(request):
    if request.method == 'POST':
        entered_code = request.POST.get('code', '').strip()
        
        if entered_code == '1234321':
            # Store verification in session and redirect to register page
            request.session['code_verified'] = True
            request.session['just_verified'] = True  # Flag to track fresh verification
            return redirect('cashier_register')
        else:
            # Add error message and stay on same page
            messages.error(request, 'Wrong code entered')
            return render(request, 'accounts/code_verify.html')
    
    return render(request, 'accounts/code_verify.html')

def home(request):
    return render(request, 'base.html')

def cashier_register(request):
    # ALWAYS clear the session for security - force re-verification every time
    if 'code_verified' in request.session:
        del request.session['code_verified']
    if 'just_verified' in request.session:
        del request.session['just_verified']
    
    # Check if this is a direct access (not coming from code verification)
    if request.META.get('HTTP_REFERER') is None or 'register' not in request.META.get('HTTP_REFERER', ''):
        messages.error(request, 'Please enter the verification code first.')
        return redirect('code_verify')
    
    # If reached here through proper flow, show the register page
    return render(request, 'accounts/register.html')

@csrf_exempt
def clear_session(request):
    if request.method == 'POST':
        # Clear the code verification from session
        if 'code_verified' in request.session:
            del request.session['code_verified']
        if 'just_verified' in request.session:
            del request.session['just_verified']
        return JsonResponse({'status': 'success'})
    return JsonResponse({'status': 'error'})
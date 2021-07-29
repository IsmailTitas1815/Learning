from django.shortcuts import render, HttpResponseRedirect, HttpResponse
from django.views import View
from django.urls import reverse
from App_Order.forms import InvoiceModelForm
from App_Order.models import InvoiceModel
from django.contrib.auth.decorators import login_required

# some libraries
from io import BytesIO
from django.http import HttpResponse
from django.template.loader import get_template, render_to_string
from xhtml2pdf import pisa
import os
from django.conf import settings

def fetch_resources(uri, rel):
    path = os.path.join(settings.MEDIA_ROOT,
                        uri.replace(settings.MEDIA_URL, ""))
    return path


def save_pdf(template_src, context_dict={}):
    template = get_template(template_src)
    html = template.render(context_dict)
    result = BytesIO()
    pdf = pisa.pisaDocument(
        BytesIO(html.encode("ISO-8859-1")), result, link_callback=fetch_resources)
    if not pdf.err:
        return HttpResponse(result.getvalue(), content_type='application/pdf')
    return None


def showPdf(request, pk):
    data = InvoiceModel.objects.filter(pk=pk).values()[0]
    pdf = save_pdf('documents.html', data)
    return HttpResponse(pdf, content_type="application/pdf")


def downloadPDF(request, pk):
    data = InvoiceModel.objects.filter(pk=pk).values()[0]
    pdf = save_pdf('documents.html', data)
    if pdf:
        response = HttpResponse(pdf, content_type="application/pdf")
        filename = 'Invoice_%s.pdf' % (str(pk))
        content = "inline; filename='%s'" % (filename)
        response['Content-Disposition'] = content
        download = request.GET.get("Download")
        if download:
            content = "attachment; filename='%s'" % (filename)
            response['Content-Disposition'] = content
        return response
    return HttpResponse("Not Found")


@login_required
def order(request):
    form = InvoiceModelForm()
    if request.method == 'POST':
        form = InvoiceModelForm(data=request.POST)
        if form.is_valid():
            form.save()
            select = form.cleaned_data.get('options')
            user_order = InvoiceModel.objects.all().last()
            pk = user_order.pk
            if select == "Download":
                return HttpResponseRedirect(reverse('App_Order:documents', kwargs={"pk": pk}))
            return HttpResponseRedirect(reverse("App_Order:showPdf", kwargs={"pk": pk}))
    return render(request, 'order.html', context={"form": form})


# template = get_template('documents.html')
# html = template.render(data)
# result = BytesIO()
# pdf = pisa.pisaDocument(
#     BytesIO(html.encode("ISO-8859-1")), result)
# pdf = result.getvalue()
# filename = 'Invoice_' + data['order_id'] + '.pdf'

# mail_subject = 'Recent Order Details'
# message = render_to_string('firstapp/payment/emailinvoice.html', {
#     'user': order_db.user,
#     'order': order_db
# })
# context_dict = {
#     'user': order_db.user,
#     'order': order_db
# }
# template = get_template(
#     'firstapp/payment/emailinvoice.html')
# message = template.render(context_dict)
# to_email = order_db.user.email
# # email = EmailMessage(
# #     mail_subject,
# #     message,
# #     settings.EMAIL_HOST_USER,
# #     [to_email]
# # )

# # for including css(only inline css works) in mail and remove autoescape off
# email = EmailMultiAlternatives(
#     mail_subject,
#     "hello",       # necessary to pass some message here
#     settings.EMAIL_HOST_USER,
#     [to_email]
# )
# email.attach_alternative(message, "text/html")
# email.attach(filename, pdf, 'application/pdf')
# email.send(fail_silently=False)

# return render(request, 'firstap

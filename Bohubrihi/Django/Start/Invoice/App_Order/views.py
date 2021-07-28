from django.shortcuts import render, HttpResponseRedirect, HttpResponse
from django.views import View
from django.urls import reverse
from App_Order.forms import InvoiceModelForm
from App_Order.models import InvoiceModel

# some libraries
from io import BytesIO
from django.http import HttpResponse
from django.template.loader import get_template
from xhtml2pdf import pisa


def save_pdf(context_dict={}):
    template = get_template('documents.html')
    html = template.render(context_dict)
    result = BytesIO()
    pdf = pisa.pisaDocument(BytesIO(html.encode('UTF-8')), result)
    if not pdf.err:
        return HttpResponse(result.getvalue(), content_type='application/pdf')
    return None


class DownloadPDF(View):
    def get(self, request, pk):
        data = InvoiceModel.objects.filter(pk=pk).values()[0]
        pdf = save_pdf(data)
        response = HttpResponse(pdf, content_type='application/pdf')
        filename = "Invoice_%s.pdf" % ("12341231")
        content = "attachment; filename='%s'" % (filename)
        response['Content-Disposition'] = content
        return response


def order(request):
    form = InvoiceModelForm()
    order_saved = False
    if request.method == 'POST':
        form = InvoiceModelForm(data=request.POST)
        if form.is_valid():
            form.save()
            user_order = InvoiceModel.objects.all().last()
            pk = user_order.pk
            order_saved = True
            return HttpResponseRedirect(reverse('App_Order:documents', kwargs={"pk": pk}))
    return render(request, 'order.html', context={"form": form, "order_saved": order_saved})


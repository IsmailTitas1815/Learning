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


def save_pdf(template_src, context_dict={}):
    template = get_template(template_src)
    html = template.render(context_dict)
    result = BytesIO()
    pdf = pisa.pisaDocument(BytesIO(html.encode("ISO-8859-1")), result)
    if not pdf.err:
        return HttpResponse(result.getvalue(), content_type='application/pdf')
    return None


class DownloadPDF(View):
    def get(self, request, pk):
        data = InvoiceModel.objects.filter(pk=pk).values()[0]
        template = get_template('documents.html')
        html = template.render(data)
        pdf = save_pdf('documents.html', data)
        if pdf:
            response = HttpResponse(pdf, content_type="Application/pdf")
            filename = 'Invoice_%s.pdf' % (str(pk))
            content = "inline; filename='%s'" %(filename)
            response['Content-Disposition'] = content
            download = request.GET.get("Download")
            if download:
                content = "attachment; filename='%s'" % (filename)
                response['Content-Disposition'] = content
            return response
        return HttpResponse("Not Found")


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

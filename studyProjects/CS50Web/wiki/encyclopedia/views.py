from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import redirect, render
from django.urls import reverse
from django import forms
from django import utils

from random import random
from functools import wraps
import markdown2

from . import util

class SearchEntryForm(forms.Form):
    query = forms.CharField(label="", widget=forms.TextInput(attrs={
        'placeholder': 'Search Encyclopedia'}))

class NewEntryForm(forms.Form):
    new_title = forms.CharField(label="Title")
    new_entry = forms.Textarea()

def index(request):
    # if a search query has been made in the form, do this:
    if request.method == "POST":
        form = SearchEntryForm(request.POST)
        # Check if form data is valid (server-side)
        if form.is_valid():
            # Isolate the title from the 'cleaned' version of form data
            title = form.cleaned_data["query"]
            # return the entry page if the query matches and entry
            if title in util.list_entries():
                return entry(request, title)
            # return a list of entries matching the queried substring
            elif util.list_substring(title):
                return search(request, title)
            else: return render(request, "encyclopedia/no_entry.html", {"form": SearchEntryForm()})

    # show the normal homepage if the page was requested via GET method
    return render(request, "encyclopedia/index.html", {
        "entries": util.list_entries(),
        "form": SearchEntryForm(),
        "pageTitle": "All entries"
    })

# search of substrings
def search(request, substring):
    return render(request, "encyclopedia/search_results.html", {
        "entries": util.list_substring(substring),
        "form": SearchEntryForm(),
        "pageTitle": "Maybe you're searching one of these?"
    })

def entry(request, title):
    inmarkdown = util.get_entry(title)
    entry = markdown2.markdown(inmarkdown)
    if title in util.list_entries():
        return render(request, "encyclopedia/entry.html", {
            "entryPage": entry,
            "entryTitle": title,
            "form": SearchEntryForm()
        })
    else: 
        return render(request, "encyclopedia/no_entry.html", {
            "form": SearchEntryForm()
        })

def random_entry(request):
    # get a random entry title from the list and redirect to that page
    return HttpResponseRedirect(
        f"/entry/{util.list_entries()[int(random()*len(util.list_entries()))]}")

def new_page(request):
    if request.method == "GET":
         return render(request, "encyclopedia/new_page.html", {
            "form": SearchEntryForm()
         })
    if request.method == "POST":
        title = request.POST["Title"]
        entry = request.POST["TextAreaName"]
        if title in util.list_entries():
            return render(request, "encyclopedia/new_page.html", {
                "form": SearchEntryForm(),
                "title": title,
                "entry": entry,
                "errorMessage": "The entry already exists, click the link below to view and modify it."
            })
        else:
            util.save_entry(title, entry)
            return HttpResponseRedirect(f"/entry/{title}")

def edit_page(request, title):
    if request.method == "GET":
        return render(request, "encyclopedia/edit_page.html", {
        "form": SearchEntryForm(),
        "title": title,
        "entry": util.get_entry(title)
    })
    if request.method == "POST":
        entry = request.POST["TextAreaName"]
        util.save_entry(title, entry)
        return HttpResponseRedirect(f"/entry/{title}")
        
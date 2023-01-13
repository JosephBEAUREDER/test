# Create your views here.
from django.shortcuts import render
from django.http import JsonResponse
import json
import os
import openai
from translate import Translator
from gtts import gTTS
import random


def home(request):
    return render(request, 'home.html')


def variables(request):
    nom = "Édouard"
    hobbies = ["ping pong", "lecture", "musique"]

    return render(request, 'variables.html', {"nom":nom, "hobbies":hobbies})


def spacy(request):
    nlp = spacy.load("fr_core_news_md")

    doc = nlp("Ceci est une phrase d'exemple.")
    print(doc.text)
    for token in doc:
        tokens.append([token.text, token.lemma_, token.pos_])

    return render(request, 'spacy.html', {'tokens':tokens})



def analyze(request):

    listvoca = []
    colis = json.loads(request.body)
    text = colis['inText']

    listvoca = text.split('\n')

    var1 = random.randint(0,(len(listvoca)-1))
    var2 = random.randint(0,(len(listvoca)-1))


    openai.api_key = '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'

    gpt_prompt = "Write a sentence easy to understand for a student with the words '" + listvoca[var1] + "' and '" + listvoca[var2] + "'."

    response = openai.Completion.create(
    engine="text-davinci-002",
    prompt=gpt_prompt,
    temperature=0.5,
    max_tokens=256,
    top_p=1.0,
    frequency_penalty=0.0,
    presence_penalty=0.0
    )

    content = response.choices[0].text.split('.')
    
    rep1 = response.choices[0].text

    totranslate = response.choices[0].text
    
    translator= Translator(from_lang="english",to_lang="arabic")
    rep = translator.translate(totranslate)

    
    # The text that you want to convert to audio
    mytext = rep
    
    # Language in which you want to convert
    language = 'ar'
    
    # Passing the text and language to the engine, 
    # here we have marked slow=False. Which tells 
    # the module that the converted audio should 
    # have a high speed
    myobj = gTTS(text=mytext, lang=language, slow=False)
    
    # Saving the converted audio in a mp3 file named
    # welcome 
    myobj.save("static/welcome2.mp3")
 
    reponse = {
       "reponse":rep,
       "reponse1":rep1
     }
    return JsonResponse(reponse)
import openai

openai.api_key = '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'

# openai.api_key = os.getenv("OPENAI_API_KEY")
listvoca = ["patriarchy","hell","heaven"]

var1 = random.randint(0,(len(listvoca)-1))
var2 = random.randint(0,(len(listvoca)-1))

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
    
    print(content)
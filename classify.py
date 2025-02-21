from transformers import AutoModelForSequenceClassification, AutoTokenizer
import torch

# Load model and tokenizer
MODEL_NAME = "djangodevloper/bert-base-sa-mental-uncased"
tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)
model = AutoModelForSequenceClassification.from_pretrained(MODEL_NAME)

# Define label mappings
id2label = {
    0: "Anxiety",
    1: "Normal",
    2: "Depression",
    3: "Suicidal",
    4: "Stress",
    5: "Bipolar",
    6: "Personality disorder"
}

def classify(text):
    # Tokenize input text
    inputs = tokenizer(text, return_tensors="pt", padding=True, truncation=True, max_length=512)
    
    # Get model output
    with torch.no_grad():
        outputs = model(**inputs)
    
    # Convert logits to probabilities
    probabilities = torch.nn.functional.softmax(outputs.logits, dim=-1)
    
    # Get predicted class
    predicted_class = torch.argmax(probabilities, dim=-1).item()
    
    return id2label[predicted_class]




resources = {
    "Anxiety": "https://www.adaa.org/understanding-anxiety",
    "Depression": "https://www.nimh.nih.gov/health/topics/depression",
    "Suicidal": "https://suicidepreventionlifeline.org/",
    "Stress": "https://www.apa.org/topics/stress",
    "Bipolar": "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
    "Personality disorder": "https://www.nhs.uk/mental-health/conditions/personality-disorder/",
    "Normal": "You're doing well! Keep maintaining good mental health."
}

# Example Usage
sample_text = "i am jobless"
predicted_label, probabilities = classify(sample_text)

print(f"Predicted Mental Health Condition: {predicted_label}")
print(f"Probabilities: {probabilities}")

# Provide mental health support
print(f"Resource: {resources[predicted_label]}")
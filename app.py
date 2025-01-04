# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import json
# import pandas as pd
# from sklearn.model_selection import train_test_split
# from sklearn.feature_extraction.text import TfidfVectorizer
# from sklearn.svm import SVC
# import joblib
# import os

# app = Flask(__name__)
# CORS(app)

# # Paths to save the model and vectorizer
# MODEL_PATH = "model.pkl"
# VECTORIZER_PATH = "vectorizer.pkl"

# # Load the intents data
# with open(r"C:\Users\ayush\Downloads\intents.json", 'r') as f:
#     data = json.load(f)

# df = pd.DataFrame(data['intents'])
# dic = {"tag": [], "patterns": [], "responses": []}
# for i in range(len(df)):
#     ptrns = df.iloc[i]['patterns']
#     rspns = df.iloc[i]['responses']
#     tag = df.iloc[i]['tag']
#     for j in range(len(ptrns)):
#         dic['tag'].append(tag)
#         dic['patterns'].append(ptrns[j])
#         dic['responses'].append(rspns)

# df = pd.DataFrame.from_dict(dic)

# X = df['patterns']
# y = df['tag']

# # Check if the model and vectorizer already exist
# if os.path.exists(MODEL_PATH) and os.path.exists(VECTORIZER_PATH):
#     # Load the pre-trained model and vectorizer
#     model = joblib.load(MODEL_PATH)
#     vectorizer = joblib.load(VECTORIZER_PATH)
# else:
#     # Train a new model
#     vectorizer = TfidfVectorizer()
#     X_vec = vectorizer.fit_transform(X)
#     model = SVC()
#     model.fit(X_vec, y)

#     # Save the model and vectorizer to disk
#     joblib.dump(model, MODEL_PATH)
#     joblib.dump(vectorizer, VECTORIZER_PATH)

# def predict_intent(user_input):
#     user_input_vec = vectorizer.transform([user_input])
#     intent = model.predict(user_input_vec)[0]
#     return intent

# def generate_response(intent):
#     response = df[df['tag'] == intent]['responses'].values[0][0]
#     return response

# @app.route('/chat', methods=['POST'])
# def chat():
#     user_input = request.json.get('message')
#     intent = predict_intent(user_input)
#     response = generate_response(intent)
#     return jsonify({"response": response})

# if __name__ == '__main__':
#     app.run(debug=True)









# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import json
# import pandas as pd
# from sklearn.feature_extraction.text import TfidfVectorizer
# from sklearn.svm import SVC
# import joblib
# import os

# app = Flask(__name__)
# CORS(app)  # Allows all origins by default; customize if needed

# # Paths to save the model and vectorizer
# MODEL_PATH = "model.pkl"
# VECTORIZER_PATH = "vectorizer.pkl"

# # Load the intents data
# with open(r"C:\Users\ayush\Downloads\intents.json", 'r') as f:
#     data = json.load(f)

# df = pd.DataFrame(data['intents'])
# dic = {"tag": [], "patterns": [], "responses": []}
# for i in range(len(df)):
#     ptrns = df.iloc[i]['patterns']
#     rspns = df.iloc[i]['responses']
#     tag = df.iloc[i]['tag']
#     for j in range(len(ptrns)):
#         dic['tag'].append(tag)
#         dic['patterns'].append(ptrns[j])
#         dic['responses'].append(rspns)

# df = pd.DataFrame.from_dict(dic)

# X = df['patterns']
# y = df['tag']

# # Check if the model and vectorizer already exist
# if os.path.exists(MODEL_PATH) and os.path.exists(VECTORIZER_PATH):
#     # Load the pre-trained model and vectorizer
#     model = joblib.load(MODEL_PATH)
#     vectorizer = joblib.load(VECTORIZER_PATH)
# else:
#     # Train a new model
#     vectorizer = TfidfVectorizer()
#     X_vec = vectorizer.fit_transform(X)
#     model = SVC()
#     model.fit(X_vec, y)

#     # Save the model and vectorizer to disk
#     joblib.dump(model, MODEL_PATH)
#     joblib.dump(vectorizer, VECTORIZER_PATH)

# def predict_intent(user_input):
#     user_input_vec = vectorizer.transform([user_input])
#     intent = model.predict(user_input_vec)[0]
#     return intent

# def generate_response(intent):
#     responses = df[df['tag'] == intent]['responses'].values
#     if len(responses) > 0:
#         return responses[0][0]  # Return the first response
#     else:
#         return "Sorry, I don't understand that."

# @app.route('/chat', methods=['POST'])
# def chat():
#     try:
#         user_input = request.json.get('message')
#         if not user_input:
#             return jsonify({"error": "No message provided"}), 400

#         intent = predict_intent(user_input)
#         response = generate_response(intent)
#         return jsonify({"response": response})
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# if __name__ == '__main__':
#     app.run(debug=True)




















# import os
# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import json
# import pandas as pd
# from sklearn.feature_extraction.text import TfidfVectorizer
# from sklearn.svm import SVC
# import joblib
# import numpy as np
# from tensorflow.keras.models import load_model
# from tensorflow.keras.preprocessing import image

# # Initialize Flask application
# app = Flask(__name__)
# CORS(app)  # Enable CORS for cross-origin requests

# # Configurations
# app.config['UPLOAD_FOLDER'] = './static/uploads'
# app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg'}

# # ======= Chatbot Functionality =======

# # Paths to save the chatbot model and vectorizer
# MODEL_PATH = "model.pkl"
# VECTORIZER_PATH = "vectorizer.pkl"

# # Load the intents data
# with open(r"C:\Users\ayush\Downloads\intents.json", 'r') as f:
#     data = json.load(f)

# df = pd.DataFrame(data['intents'])
# dic = {"tag": [], "patterns": [], "responses": []}
# for i in range(len(df)):
#     ptrns = df.iloc[i]['patterns']
#     rspns = df.iloc[i]['responses']
#     tag = df.iloc[i]['tag']
#     for j in range(len(ptrns)):
#         dic['tag'].append(tag)
#         dic['patterns'].append(ptrns[j])
#         dic['responses'].append(rspns)

# df = pd.DataFrame.from_dict(dic)

# X = df['patterns']
# y = df['tag']

# # Check if the chatbot model and vectorizer already exist
# if os.path.exists(MODEL_PATH) and os.path.exists(VECTORIZER_PATH):
#     # Load the pre-trained chatbot model and vectorizer
#     model = joblib.load(MODEL_PATH)
#     vectorizer = joblib.load(VECTORIZER_PATH)
# else:
#     # Train a new chatbot model
#     vectorizer = TfidfVectorizer()
#     X_vec = vectorizer.fit_transform(X)
#     model = SVC()
#     model.fit(X_vec, y)

#     # Save the chatbot model and vectorizer to disk
#     joblib.dump(model, MODEL_PATH)
#     joblib.dump(vectorizer, VECTORIZER_PATH)

# def predict_intent(user_input):
#     user_input_vec = vectorizer.transform([user_input])
#     intent = model.predict(user_input_vec)[0]
#     return intent

# def generate_response(intent):
#     responses = df[df['tag'] == intent]['responses'].values
#     if len(responses) > 0:
#         return responses[0][0]  # Return the first response
#     else:
#         return "Sorry, I don't understand that."

# @app.route('/chat', methods=['POST'])
# def chat():
#     try:
#         user_input = request.json.get('message')
#         if not user_input:
#             return jsonify({"error": "No message provided"}), 400

#         intent = predict_intent(user_input)
#         response = generate_response(intent)
#         return jsonify({"response": response})
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# # ======= PCOS Detection Functionality =======

# # Load the PCOS detection model
# model_path = r"C:\Users\ayush\Downloads\vgg16_pcos_detection_final.h5"
# if os.path.exists(model_path):
#     pcos_model = load_model(model_path)
# else:
#     raise FileNotFoundError(f"Model file not found at {model_path}")

# def preprocess_image(image_path):
#     # Resize the image to (224, 224) as expected by VGG16
#     img = image.load_img(image_path, target_size=(224, 224))
#     img_array = image.img_to_array(img)
#     img_array = img_array / 255.0  # Normalize pixel values
#     img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension
#     return img_array

# # Function to check allowed file extensions
# def allowed_file(filename):
#     return '.' in filename and \
#            filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

# @app.route('/upload', methods=['POST'])
# def upload_file():
#     if 'file' not in request.files:
#         return jsonify({"error": "No file part"}), 400

#     file = request.files['file']

#     if file.filename == '':
#         return jsonify({"error": "No selected file"}), 400

#     if file and allowed_file(file.filename):
#         filename = file.filename
#         filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)

#         # Ensure the upload directory exists
#         if not os.path.exists(app.config['UPLOAD_FOLDER']):
#             os.makedirs(app.config['UPLOAD_FOLDER'])

#         file.save(filepath)

#         try:
#             # Preprocess the uploaded image
#             img = preprocess_image(filepath)

#             # Perform inference
#             prediction = pcos_model.predict(img)
#             class_index = np.argmax(prediction)
#             confidence = prediction[0][class_index]

#             # Define class labels
#             class_labels = ['normal', 'pcos']

#             # Prepare results
#             prediction_label = class_labels[class_index]
#             confidence_score = "{:.2f}".format(confidence * 100)

#             # Return result as JSON
#             return jsonify({
#                 "prediction": prediction_label,
#                 "confidence": confidence_score,
#                 "filename": filename
#             }), 200

#         except Exception as e:
#             return jsonify({"error": f"Error during inference: {str(e)}"}), 500

#     else:
#         return jsonify({"error": "File type not allowed"}), 400

# # ======= Run the Flask Application =======
# if __name__ == '__main__':
#     app.run(debug=True)









# import os
# import logging
# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import json
# import pandas as pd
# from sklearn.feature_extraction.text import TfidfVectorizer
# from sklearn.svm import SVC
# import joblib
# import numpy as np
# from tensorflow.keras.models import load_model
# from tensorflow.keras.preprocessing import image

# # Initialize Flask app
# app = Flask(__name__)
# CORS(app)

# # Configure logging
# logging.basicConfig(level=logging.DEBUG)

# # Chatbot configurations
# CHATBOT_MODEL_PATH = "model.pkl"
# CHATBOT_VECTORIZER_PATH = "vectorizer.pkl"

# # PCOS detection configurations
# app.config['UPLOAD_FOLDER'] = './static/uploads'
# app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg'}
# PCOS_MODEL_PATH = r"C:\Users\ayush\Downloads\vgg16_pcos_detection_final.h5"

# # Load intents data
# with open(r"C:\Users\ayush\Downloads\intents.json", 'r') as f:
#     data = json.load(f)

# df = pd.DataFrame(data['intents'])
# dic = {"tag": [], "patterns": [], "responses": []}
# for i in range(len(df)):
#     ptrns = df.iloc[i]['patterns']
#     rspns = df.iloc[i]['responses']
#     tag = df.iloc[i]['tag']
#     for j in range(len(ptrns)):
#         dic['tag'].append(tag)
#         dic['patterns'].append(ptrns[j])
#         dic['responses'].append(rspns)

# df = pd.DataFrame.from_dict(dic)
# X = df['patterns']
# y = df['tag']

# # Load or train chatbot model
# if os.path.exists(CHATBOT_MODEL_PATH) and os.path.exists(CHATBOT_VECTORIZER_PATH):
#     logging.debug("Loading pre-trained chatbot model and vectorizer.")
#     chatbot_model = joblib.load(CHATBOT_MODEL_PATH)
#     chatbot_vectorizer = joblib.load(CHATBOT_VECTORIZER_PATH)
# else:
#     logging.debug("Training new chatbot model.")
#     chatbot_vectorizer = TfidfVectorizer()
#     X_vec = chatbot_vectorizer.fit_transform(X)
#     chatbot_model = SVC()
#     chatbot_model.fit(X_vec, y)
#     joblib.dump(chatbot_model, CHATBOT_MODEL_PATH)
#     joblib.dump(chatbot_vectorizer, CHATBOT_VECTORIZER_PATH)

# # Load PCOS detection model
# if os.path.exists(PCOS_MODEL_PATH):
#     logging.debug("Loading PCOS detection model.")
#     pcos_model = load_model(PCOS_MODEL_PATH)
# else:
#     raise FileNotFoundError(f"PCOS model not found at {PCOS_MODEL_PATH}")

# # Helper function: Predict intent for chatbot
# def predict_intent(user_input):
#     try:
#         user_input_vec = chatbot_vectorizer.transform([user_input])
#         return chatbot_model.predict(user_input_vec)[0]
#     except Exception as e:
#         logging.error(f"Error during intent prediction: {e}")
#         return "unknown"

# # Helper function: Generate chatbot response
# def generate_response(intent):
#     responses = df[df['tag'] == intent]['responses'].values
#     if len(responses) > 0:
#         return responses[0][0]  # Return the first response
#     else:
#         return "Sorry, I don't understand that."

# # Helper function: Check allowed file extensions
# def allowed_file(filename):
#     return '.' in filename and filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

# # Helper function: Preprocess image for PCOS detection
# def preprocess_image(image_path):
#     img = image.load_img(image_path, target_size=(224, 224))
#     img_array = image.img_to_array(img)
#     img_array = img_array / 255.0  # Normalize pixel values
#     img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension
#     return img_array

# # Chatbot route
# @app.route('/chat', methods=['POST'])
# def chat():
#     try:
#         user_input = request.json.get('message')
#         if not user_input:
#             return jsonify({"error": "No message provided"}), 400

#         intent = predict_intent(user_input)
#         response = generate_response(intent)
#         return jsonify({"response": response})
#     except Exception as e:
#         logging.error(f"Error in chatbot: {e}")
#         return jsonify({"error": str(e)}), 500

# # PCOS detection route
# @app.route('/upload', methods=['POST'])
# def upload_file():
#     if 'file' not in request.files:
#         return jsonify({"error": "No file part"}), 400

#     file = request.files['file']

#     if file.filename == '':
#         return jsonify({"error": "No selected file"}), 400

#     if file and allowed_file(file.filename):
#         filename = file.filename
#         filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)

#         # Ensure the upload directory exists
#         if not os.path.exists(app.config['UPLOAD_FOLDER']):
#             os.makedirs(app.config['UPLOAD_FOLDER'])

#         file.save(filepath)

#         try:
#             # Preprocess the uploaded image
#             img = preprocess_image(filepath)

#             # Perform inference
#             prediction = pcos_model.predict(img)
#             class_index = np.argmax(prediction)
#             confidence = prediction[0][class_index]

#             # Define class labels
#             class_labels = ['normal', 'pcos']

#             # Prepare results
#             prediction_label = class_labels[class_index]
#             confidence_score = "{:.2f}".format(confidence * 100)

#             # Return result as JSON
#             return jsonify({
#                 "prediction": prediction_label,
#                 "confidence": confidence_score,
#                 "filename": filename
#             }), 200

#         except Exception as e:
#             logging.error(f"Error during PCOS inference: {e}")
#             return jsonify({"error": f"Error during inference: {str(e)}"}), 500

#     else:
#         return jsonify({"error": "File type not allowed"}), 400

# # Run the app
# if __name__ == '__main__':
#     app.run(debug=True)








import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
from langchain.prompts import PromptTemplate
from langchain_google_genai import GoogleGenerativeAI
from langchain.chains import LLMChain

# Initialize Flask application
app = Flask(__name__)
CORS(app)  # Enable CORS for cross-origin requests

# Configurations
app.config['UPLOAD_FOLDER'] = './static/uploads'
app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg'}

# Load the VGG16 model for PCOS detection
model_path = r"C:\Users\ayush\Downloads\vgg16_pcos_detection_final.h5"
if os.path.exists(model_path):
    model = load_model(model_path)
else:
    raise FileNotFoundError(f"Model file not found at {model_path}")

# Preprocess image for VGG16 model
def preprocess_image(image_path):
    img = image.load_img(image_path, target_size=(224, 224))
    img_array = image.img_to_array(img)
    img_array = img_array / 255.0  # Normalize pixel values
    img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension
    return img_array

# Function to check allowed file extensions
def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

# Set up Gemini API (Google Generative AI)
llm = GoogleGenerativeAI(model="gemini-1.5-flash-latest", api_key="AIzaSyBPqdPNvmnCJjcPrHvuFCClatxGfMjAST8")

# Prompt template for generating medical advice
prompt_template = PromptTemplate(
    input_variables=["symptom_query"],
    template="""
    You are a compassionate and knowledgeable medical assistant. 
    Your task is to provide brief, in points, accurate, and empathetic responses to medical queries while encouraging users to consult healthcare professionals for serious or specific concerns.

    Guidelines for your response:
    1. Be concise and to the point—avoid unnecessary detail.
    2. Address the user's query in a clear and empathetic tone.
    3. Provide general advice based on medical best practices.
    4. Avoid making specific diagnoses or treatment plans.
    5. Encourage consulting a licensed healthcare provider for further assistance when necessary.
    6. Help the user as much as you can.

    User's Query: {symptom_query}

    Your Response:
    """
)
chain = LLMChain(prompt=prompt_template, llm=llm)

# Route to handle image upload and classification
@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400
     
    file = request.files['file']

    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    if file and allowed_file(file.filename):
        filename = file.filename
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)

        # Ensure the upload directory exists
        if not os.path.exists(app.config['UPLOAD_FOLDER']):
            os.makedirs(app.config['UPLOAD_FOLDER'])

        file.save(filepath)

        try:
            # Preprocess the uploaded image
            img = preprocess_image(filepath)

            # Perform inference
            # Perform inference
            prediction = model.predict(img)
            print(prediction, filepath)

            # Use threshold to determine class
            threshold = 0.5
            predicted_class = 'PCOS' if prediction[0][0] >= threshold else 'Normal'
            confidence_score = "{:.2f}".format(prediction[0][0] * 100) if predicted_class == 'PCOS' else "{:.2f}".format((1 - prediction[0][0]) * 100)

            # Print results for debugging
            print("Predicted Class:", predicted_class)
            print("Confidence Score:", confidence_score)

            # Return result as JSON
            return jsonify({
                "prediction": predicted_class,
                "confidence": confidence_score,
                "filename": filename
            }), 200


        except Exception as e:
            return jsonify({"error": f"Error during inference: {str(e)}"}), 500

    else:
        return jsonify({"error": "File type not allowed"}), 400

# Route to get advice from Gemini API
@app.route("/chat", methods=["POST"])
def get_medical_advice():
    data = request.json
    symptom_query = data.get("symptom_query")

    if not symptom_query:
        return jsonify({"response": "Please provide a symptom or medical query."}), 400

    # Generate response from Gemini API
    response = chain.invoke({"symptom_query": symptom_query})
    advice = response.get("text", "Sorry, I couldn't provide advice on that at the moment. Please consult a healthcare professional.")
    
    return jsonify({"response": advice})

if __name__ == "__main__":
    app.run(debug=True)

# from flask import Flask, request, jsonify
# from tensorflow.keras.models import load_model
# from tensorflow.keras.preprocessing import image
# import numpy as np
# import os

# app = Flask(__name__)

# # Load the PCOS detection model with the correct path
# model_path = r"C:\Users\ayush\Downloads\vgg16_pcos_detection_final.h5"
# model = load_model(model_path)

# # Function to preprocess the input image
# def preprocess_image(img_path):
#     img = image.load_img(img_path, target_size=(224, 224))
#     img_array = image.img_to_array(img)
#     img_array = np.expand_dims(img_array, axis=0)
#     img_array = img_array / 255.0  # Normalize to [0, 1]
#     return img_array

# # Endpoint for PCOS detection
# @app.route('/pcos-detection', methods=['POST'])
# def predict_pcos():
#     if 'image' not in request.files:
#         return jsonify({'error': 'No image file in the request'}), 400

#     file = request.files['image']

#     if file.filename == '':
#         return jsonify({'error': 'No file selected for uploading'}), 400

#     if file:
#         file_path = os.path.join('uploads', file.filename)
#         file.save(file_path)

#         img = preprocess_image(file_path)
#         prediction = model.predict(img)

#         prediction_class = 'Positive' if prediction[0][0] > 0.5 else 'Negative'

#         os.remove(file_path)

#         return jsonify({'pcos': prediction_class})

# if __name__ == '_main_':
#     if not os.path.exists('uploads'):
#         os.makedirs('uploads')
#     app.run(debug=True)

# from flask import Flask, request, jsonify
# from tensorflow.keras.models import load_model
# from tensorflow.keras.preprocessing import image
# import numpy as np
# import os
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)  # Enable CORS for your Flask app

# # Load the PCOS detection model
# model_path = r"C:\Users\ayush\Downloads\vgg16_pcos_detection_final.h5"
# model = load_model(model_path)

# # Function to preprocess the input image
# def preprocess_image(img_path):
#     img = image.load_img(img_path, target_size=(224, 224))
#     img_array = image.img_to_array(img)
#     img_array = np.expand_dims(img_array, axis=0)
#     img_array = img_array / 255.0  # Normalize to [0, 1]
#     return img_array

# # Endpoint for PCOS detection
# @app.route('/pcos-detection', methods=['POST'])
# def predict_pcos():
#     if 'image' not in request.files:
#         return jsonify({'error': 'No image file in the request'}), 400

#     file = request.files['image']

#     if file.filename == '':
#         return jsonify({'error': 'No file selected for uploading'}), 400

#     if file:
#         file_path = os.path.join('uploads', file.filename)
#         os.makedirs('uploads', exist_ok=True)  # Ensure uploads directory exists
#         file.save(file_path)

#         try:
#             img = preprocess_image(file_path)
#             prediction = model.predict(img)
#             prediction_class = 'Positive' if prediction[0][0] > 0.5 else 'Negative'
#         except Exception as e:
#             return jsonify({'error': str(e)}), 500
#         finally:
#             os.remove(file_path)

#         return jsonify({'pcos': prediction_class})

# if __name__ == '__main__':
#     app.run(debug=True, port=3001)  # Ensure the port matches what your frontend expects



# from flask import Flask, request, jsonify
# from tensorflow.keras.models import load_model
# from tensorflow.keras.preprocessing.image import img_to_array, load_img
# from PIL import Image
# import numpy as np
# import os

# app = Flask(__name__)

# # Load the VGG16 model
# model = load_model( r"C:\Users\ayush\Downloads\vgg16_pcos_detection_final.h5")

# def prepare_image(image, target_size=(224, 224)):
#     if image.mode != "RGB":
#         image = image.convert("RGB")
#     image = image.resize(target_size)
#     image = img_to_array(image)
#     image = np.expand_dims(image, axis=0)
#     return image

# @app.route('/pcos-detection', methods=['POST'])
# def predict():
#     if 'file' not in request.files:
#         return jsonify({"error": "No file part"}), 400

#     file = request.files['file']
#     if file.filename == '':
#         return jsonify({"error": "No selected file"}), 400

#     try:
#         image = Image.open(file)
#         processed_image = prepare_image(image)
        
#         # Make the prediction
#         prediction = model.predict(processed_image)
#         # Assuming your model outputs a binary classification
#         result = np.argmax(prediction, axis=1)[0]
#         return jsonify({"prediction": bool(result)}), 200

#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# if __name__ == '__main__':
#     app.run(debug=True)


# import os
# from flask import Flask, request, jsonify
# import numpy as np
# from tensorflow.keras.models import load_model
# from tensorflow.keras.preprocessing import image
# from flask_cors import CORS

# # Initialize Flask application
# app = Flask(__name__)
# CORS(app)  # Enable CORS for cross-origin requests

# # Configurations
# app.config['UPLOAD_FOLDER'] = './static/uploads'
# app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg'}

# # Load the model (architecture + weights) from an HDF5 file
# model_path = r"C:\Users\ayush\Downloads\vgg16_pcos_detection_final.h5"
# if os.path.exists(model_path):
#     model = load_model(model_path)
# else:
#     raise FileNotFoundError(f"Model file not found at {model_path}")

# # Function to preprocess the image
# # def preprocess_image(image_path):
# #     try:
# #         img = image.load_img(image_path, target_size=(128, 128), color_mode='rgb')
# #         img_array = image.img_to_array(img)
# #         img_array = img_array / 255.0  # Normalize pixel values
# #         img_array = np.expand_dims(img_array, axis=0)
# #         return img_array
# #     except Exception as e:
# #         raise RuntimeError(f"Error processing image: {str(e)}")
    
# from tensorflow.keras.preprocessing import image

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

# # Route to handle image upload and classification
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
#             prediction = model.predict(img)
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


# if __name__ == '__main__':
#     app.run(debug=True)










import os
from flask import Flask, request, jsonify
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
from flask_cors import CORS

# Initialize Flask application
app = Flask(__name__)
CORS(app)  # Enable CORS for cross-origin requests

# Configurations
app.config['UPLOAD_FOLDER'] = './static/uploads'
app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg'}

# Load the model (architecture + weights) from an HDF5 file
model_path = r"C:\Users\ayush\Downloads\vgg16_breast_cancer_final.h5"
if os.path.exists(model_path):
    model = load_model(model_path)
else:
    raise FileNotFoundError(f"Model file not found at {model_path}")

# Function to preprocess the image
def preprocess_image(image_path):
    # Resize the image to (224, 224) as expected by the Attention U-Net
    img = image.load_img(image_path, target_size=(224, 224))
    img_array = image.img_to_array(img)
    img_array = img_array / 255.0  # Normalize pixel values
    img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension
    return img_array

# Function to check allowed file extensions
def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

# Route to handle image upload and classification
@app.route('/upload_bcd', methods=['POST'])
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
            prediction = model.predict(img)
            class_index = np.argmax(prediction)
            confidence = prediction[0][class_index]

            # Define class labels for Breast Cancer detection
            class_labels = ['Normal', 'Benign', 'Malignant']

            # Prepare results
            prediction_label = class_labels[class_index]
            confidence_score = "{:.2f}".format(confidence * 100)

            # Return result as JSON
            return jsonify({
                "prediction": prediction_label,
                "confidence": confidence_score,
                "filename": filename
            }), 200

        except Exception as e:
            return jsonify({"error": f"Error during inference: {str(e)}"}), 500

    else:
        return jsonify({"error": "File type not allowed"}), 400


if __name__ == '__main__':
    app.run(debug=True)

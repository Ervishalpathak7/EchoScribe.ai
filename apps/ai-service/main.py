from flask import Flask
app = Flask(__name__)

@app.route("/")
def index():
    return "EchoScribe AI Service Running"

if __name__ == "__main__":
    app.run(port=5001)
